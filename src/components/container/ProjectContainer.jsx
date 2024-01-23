import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";
import MediaRenderer from "../MediaRenderer";

export default function ProjectContainer({ innerRef, proj, venue, desc, tech, link, media }) {
  const navigate = useSmartNavigate();

  return (
    <Container>
      <div ref={innerRef} className="h-full flex flex-col p-8 text-6xl">
        <div className="flex justify-between items-baseline">
          <h1 className="font-bold">{proj}</h1>
          <h2>{venue}</h2>
        </div>
        <div className="flex-1 flex space-x-32">
          <div className="flex-1 flex flex-col justify-center text-4xl leading-none mb-16">
            {desc.map((line, i) => <span key={i} className="my-4" dangerouslySetInnerHTML={{__html: line}} />)}
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <MediaRenderer media={media} />
            {link ? <button className="p-2 my-4 w-fit text-4xl bg-accent" onClick={() => navigate(link)}>Check It Out</button> : <div className="my-10"></div>}
          </div>
        </div>
        <div className="flex text-4xl justify-center">
          {tech.map((src, i) => <img key={i} src={src} className="w-12 h-12 mx-2" />)}
        </div>
      </div>
    </Container>
  );
}

ProjectContainer.propTypes = {
  innerRef: PropTypes.object,
  proj: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  media: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
