import PropTypes from "prop-types";
import Container from "./Container";

export default function CenterContainer({ id, innerRef, children }) {
  return (
    <Container id={id}>
      <div ref={innerRef} className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </Container>
  );
}

CenterContainer.propTypes = {
  id: PropTypes.string,
  innerRef: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

