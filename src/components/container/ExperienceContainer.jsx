import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";

export default function ExperienceContainer({ innerRef, org, loc, role, dates, desc, tech, proj }) {
  const navigate = useSmartNavigate();

  return (
    <Container>
      <div ref={innerRef} className="h-full flex flex-col p-8 text-6xl">
        <div className="flex justify-between items-baseline">
          <h1 className="font-bold">{org}</h1>
          <h2>{loc}</h2>
        </div>
        <div className="flex justify-between">
          <h2>{role}</h2>
          <h2>{dates}</h2>
        </div>
        <div className="w-128 flex-1 flex flex-col justify-center items-center text-center text-4xl leading-none">
          {desc.map((line, i) => <span key={i} className="my-4" dangerouslySetInnerHTML={{__html: line}} />)}
          {proj ? <button className="p-4 my-10 w-fit bg-accent" onClick={() => navigate(proj)}>See Projects</button> : <div className="my-10"></div>}
        </div>
        <div className="flex text-4xl justify-center">
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
  proj: PropTypes.string,
};
