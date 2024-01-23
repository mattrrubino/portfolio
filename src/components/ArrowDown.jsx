import { PropTypes } from "prop-types";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function ArrowDown({ innerRef }) {
  return (
    <div ref={innerRef} className="text-accent text-8xl animate-bounce cursor-pointer absolute bottom-0">
      <KeyboardArrowDown
        onClick={() => document.getElementById("cl")?.scrollBy({top: 1})}
        fontSize="inherit"
      />
    </div>
  );
}

ArrowDown.propTypes = {
  innerRef: PropTypes.object,
};
