import { PropTypes } from "prop-types";
import { useLayoutEffect } from "react";
import usePause from "../hooks/usePause";

export default function MediaRenderer({ media }) {
  const ref = usePause();

  // Numerator and denominator for the target aspect ratio.
  const num = 16;
  const den = 9;

  // This is an incredibly hacky solution to get the media to dynamically size correctly.
  // A pure CSS solution would be a significant improvement, but this will do for now.
  //
  // TLDR - Acquire the size of the parent element and set the height of this element
  //        such that it fills as much of the parent as possible while maintaining 16/9.
  useLayoutEffect(() => {
    const onResize = () => {
      if (!ref || !ref.current) return;

      // We must prevent current media size from influencing parent container size.
      ref.current.style.height = "0px";
      ref.current.style.width = "0px";

      const parent = ref.current.parentElement;
      let { height, width } = parent.getBoundingClientRect();

      // We only want to consider unused height so subtract height from other children.
      // This assumes the element is part of a flex column. Hopefully, this stays true!
      for (let child of parent.children) {
        height -= child.getBoundingClientRect().height;

        const style = child.currentStyle || window.getComputedStyle(child);
        height -= parseInt(style.marginTop) + parseInt(style.marginBottom);
      }

      const targetHeight = width * den/num;
      const targetWidth = height * num/den;

      // We constrain this element while filling as much space as possible.
      if (targetHeight > height) {
        ref.current.style.height = height+"px";
        ref.current.style.width = targetWidth+"px";
      } else {
        ref.current.style.height = targetHeight+"px";
        ref.current.style.width = width+"px";
      }
    }

    onResize();
    const listener = window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", listener)
  }, [ref]);

  return (
    media.includes("youtube.com")
    ? <iframe ref={ref} src={media+"?enablejsapi=1"} allowFullScreen />
    : <img ref={ref} src={media} />
  )
}

MediaRenderer.propTypes = {
  media: PropTypes.string.isRequired,
};
