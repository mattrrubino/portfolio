import PropTypes from "prop-types";

export default function Container({ children }) {
  return (
    <div className="lg:m-8 lg:snap-start h-[calc(100vh-4rem)] relative">
      { children }
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
