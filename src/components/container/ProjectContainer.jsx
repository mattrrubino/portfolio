import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";
import MediaRenderer from "../MediaRenderer";

export default function ProjectContainer({ id, innerRef, proj, venue, desc, tech, link, desktop, media }) {
  const navigate = useSmartNavigate();

  return (
    <Container id={id ? id : proj.toLowerCase().replaceAll(" ", "-")}>
      <div ref={innerRef} className="h-full flex flex-col p-4 pb-8 sm:p-8 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
        <div className="flex justify-between items-baseline">
          <h1 className="font-bold">{proj}</h1>
          <h2>{venue}</h2>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row lg:space-x-32">
          <div className="flex flex-col justify-center leading-none text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:flex-1 lg:mb-16">
            {desc.map((line, i) => <span key={i} className="leading-none my-2 lg:my-4" dangerouslySetInnerHTML={{ __html: line }} />)}
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <MediaRenderer media={media} />
            {(link && (!desktop || window.innerWidth >= 1024)) ? <button className="p-2 my-2 w-fit bg-accent" onClick={() => navigate(link)}>Check It Out</button> : <div className="my-4 lg:my-10"></div>}
          </div>
        </div>
        <div className="flex flex-wrap text-4xl justify-center">
          {tech.map(({ src, alt }, i) => <img key={i} alt={alt} src={src} className="w-12 h-12 mx-2" />)}
        </div>
      </div>
    </Container>
  );
}

ProjectContainer.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.object,
  proj: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
  desktop: PropTypes.bool,
  media: PropTypes.object,
};
