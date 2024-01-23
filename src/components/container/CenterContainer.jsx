import PropTypes from "prop-types";
import Container from "./Container";

export default function CenterContainer({ innerRef, children }) {
  return (
    <Container>
      <div ref={innerRef} className="w-full h-full flex justify-center items-center">
        { children }
      </div>
    </Container>
  );
}

CenterContainer.propTypes = {
  innerRef: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

