import PropTypes from "prop-types";

export default function Container({ id, children }) {
  return (
    <div id={id} className="lg:snap-start h-[calc(100vh-4rem)] relative border-black border-2 border-t-0 pt-1">
      {children}
    </div>
  )
}

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
