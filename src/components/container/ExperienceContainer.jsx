import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";

export default function ExperienceContainer({ innerRef, org, loc, role, dates, desc, tech, link }) {
  const navigate = useSmartNavigate();

  return (
    <Container>
      <div ref={innerRef} className="h-full flex flex-col items-center p-8 text-2xl md:text-4xl lg:text-5xl">
        <div className="w-full flex justify-between items-baseline">
          <h1 className="font-bold">{org}</h1>
          <h2>{loc}</h2>
        </div>
        <div className="w-full flex justify-between">
          <h2>{role}</h2>
          <h2>{dates}</h2>
        </div>
        <div className="w-11/12 flex-1 self-center flex flex-col justify-center items-center text-center text-xl md:text-3xl lg:text-4xl lg:w-4/5 2xl:w-2/3 leading-none">
          {desc.map((line, i) => <span key={i} className="my-4" dangerouslySetInnerHTML={{__html: line}} />)}
          {link ? <button className="p-4 my-10 w-fit bg-accent" onClick={() => navigate(link)}>Learn More</button> : <div className="my-10"></div>}
        </div>
        <div className="flex flex-wrap text-4xl justify-center">
          {tech.map((src, i) => <img key={i} src={src} className="w-12 h-12 mx-2" />)}
        </div>
      </div>
    </Container>
  );
}

ExperienceContainer.propTypes = {
  innerRef: PropTypes.object,
  org: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
};
