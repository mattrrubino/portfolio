import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";

export default function ExperienceContainer({ id, innerRef, org, loc, role, dates, desc, tech, link }) {
  const navigate = useSmartNavigate();

  return (
    <Container id={id ? id : org.toLowerCase().replaceAll(" ", "-")}>
      <div ref={innerRef} className="h-full flex flex-col items-center p-2 pb-8 sm:p-8 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
        <div className="w-full flex justify-between items-baseline">
          <h1 className="font-bold">{org}</h1>
          <h2>{loc}</h2>
        </div>
        <div className="w-full flex justify-between">
          <h2>{role}</h2>
          <h2>{dates}</h2>
        </div>
        <div className="w-4/5 flex-1 self-center flex flex-col justify-center items-center text-center text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:w-2/3 leading-none">
          {desc.map((line, i) => <span key={i} className="my-4" dangerouslySetInnerHTML={{ __html: line }} />)}
          {link ? <button className="p-2 my-2 w-fit bg-accent" onClick={() => navigate(link)}>Learn More</button> : <div className="my-10"></div>}
        </div>
        <div className="flex flex-wrap text-4xl justify-center">
          {tech.map(({ src, alt }, i) => <img key={i} alt={alt} src={src} className="w-12 h-12 mx-2" />)}
        </div>
      </div>
    </Container>
  );
}

ExperienceContainer.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.object,
  org: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
};
