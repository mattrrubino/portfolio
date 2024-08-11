import PropTypes from "prop-types";

export default function ContainerList({ children }) {
  return (
    <div id="cl" className="lg:snap-y lg:snap-mandatory lg:scroll-smooth overflow-y-scroll h-[calc(100vh-4rem)]">
      {children}
    </div>
  )
}

ContainerList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
