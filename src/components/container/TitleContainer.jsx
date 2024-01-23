import { PropTypes } from "prop-types";
import CenterContainer from "./CenterContainer";
import ArrowDown from "../ArrowDown";

export default function TitleContainer({ innerRef, title, desc }) {
  return (
    <CenterContainer innerRef={innerRef}>
      <div className="flex flex-col w-fit items-center">
        <h1 className="text-9xl font-bold text-accent text-center">{title}</h1>
        <h2 className="text-6xl leading-none" dangerouslySetInnerHTML={{ __html: desc}} />
      </div>
      <ArrowDown />
    </CenterContainer>
  );
}

TitleContainer.propTypes = {
  innerRef: PropTypes.object,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
