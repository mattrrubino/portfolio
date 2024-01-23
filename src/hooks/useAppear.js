import { useEffect, useRef } from "react";

// This hook causes a DOM element to fade in when it enters the viewport.
// It returns a ref which should be passed to the target DOM element.
export default function useAppear() {
  const ref = useRef(undefined);

  useEffect(() => {
    if (ref === undefined) return;

    // This prevents strange blinking behavior on load
    ref.current.classList.add("opacity-0");

    const obs = new IntersectionObserver(([entry]) => {
      ref.current.classList.remove("opacity-0");
      ref.current.classList.toggle("animate-appear", entry.isIntersecting)
    });

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return ref;
}
