import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";

export default function PublicationContainer({ innerRef, title, location, type, authors, abstract, link }) {
  const navigate = useSmartNavigate();

  return (
    <Container>
      <div ref={innerRef} className="h-full flex flex-col p-8 text-6xl">
        <h1 className="font-bold">{title}</h1>
        <div className="flex justify-between items-baseline">
          <h2>{location}</h2>
          <h2>{type}</h2>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="mt-4 text-4xl flex flex-col leading-none">
            <span className="font-bold">Authors</span>
            <span>{authors.join(", ")}</span>
          </div>
          <div className="mt-4 text-2xl flex flex-col leading-none">
            <span className="font-bold">Abstract</span>
            <div>{abstract}</div>
          </div>
        </div>
        <div className="text-4xl text-center">
          {link ? <button className="p-4 my-10 w-fit bg-accent" onClick={() => navigate(link)}>Link</button> : <div className="my-10"></div>}
        </div>
      </div>
    </Container>
  );
}

PublicationContainer.propTypes = {
  innerRef: PropTypes.object,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  type: PropTypes.string,
  authors: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  abstract: PropTypes.string,
  link: PropTypes.string,
};
