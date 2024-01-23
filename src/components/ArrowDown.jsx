import { PropTypes } from "prop-types";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function ArrowDown({ innerRef }) {
  // For now, we assume the arrow always scrolls the element with ID "cl".
  // If this arrow needs to scroll something that is not a "ContainerList"
  // or if multiple container lists can be present on the same page, this
  // will require modification.
  return (
    <div ref={innerRef} className="text-accent text-8xl animate-bounce cursor-pointer absolute bottom-0">
      <KeyboardArrowDown onClick={() => document.getElementById("cl")?.scrollBy({top: 1})} fontSize="inherit" />
    </div>
  );
}

ArrowDown.propTypes = {
  innerRef: PropTypes.object,
};
