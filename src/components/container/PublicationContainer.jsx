import { PropTypes } from "prop-types";
import Container from "./Container";
import useSmartNavigate from "../../hooks/useSmartNavigate";

export default function PublicationContainer({ id, innerRef, title, location, type, authors, abstract, link }) {
  const navigate = useSmartNavigate();

  return (
    <Container id={id}>
      <div ref={innerRef} className="h-full flex flex-col p-4 sm:p-8 text-2xl md:text-4xl lg:text-5xl">
        <h1 className="font-bold leading-none">{title}</h1>
        <div className="flex justify-between items-baseline">
          <h2>{location}</h2>
          <h2>{type}</h2>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="mt-4 text-xl sm:text-2xl lg:text-4xl flex flex-col">
            <span className="font-bold leading-none">Authors</span>
            <span className="leading-none">{authors.join(", ")}</span>
          </div>
          <div className="mt-4 text-base sm:text-xl lg:text-2xl flex flex-col">
            <span className="font-bold leading-none">Abstract</span>
            <div className="leading-none">{abstract}</div>
          </div>
        </div>
        <div className="text-xl sm:text-4xl text-center">
          <button className="p-2 my-2 w-fit bg-accent" disabled={!link} onClick={() => navigate(link)}>{link ? "Link" : "Publication in Progress"}</button>
        </div>
      </div>
    </Container>
  );
}

PublicationContainer.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.object,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  type: PropTypes.string,
  authors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  abstract: PropTypes.string,
  link: PropTypes.string,
};
