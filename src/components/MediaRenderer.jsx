import { PropTypes } from "prop-types";
import usePause from "../hooks/usePause";

export default function MediaRenderer({ media }) {
  const ref = usePause();

  return (
    <div className="w-full aspect-video relative">
      {
        media.includes("youtube.com")
        ? <iframe ref={ref} src={media+"?enablejsapi=1"} allowFullScreen className="w-full h-full" />
        : <img src={media} className="w-full h-full" />
      }
    </div>
  )
}

MediaRenderer.propTypes = {
  media: PropTypes.string.isRequired,
};
