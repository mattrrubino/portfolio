import { useEffect, useRef } from "react";

// This hook uses the embedded YouTube player JS API to automatically pause videos
// when they go offscreen. It may need to be updated if the JS API changes.
export default function usePause() {
  const ref = useRef(undefined);

  useEffect(() => {
    if (ref === undefined || ref.current === undefined) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        entry?.target?.contentWindow?.postMessage(`{"event":"command", "func":"pauseVideo", "args":""}`, "*");
      }
    });

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return ref;
}

