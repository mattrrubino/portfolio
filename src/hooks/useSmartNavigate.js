import { useNavigate } from "react-router-dom";

// Returns a NavigateFunction that opens remote links in a new tab and uses React routing otherwise
export default function useSmartNavigate() {
  const navigate = useNavigate();

  // We assume that all remote links contain a "." and local links do not.
  // This hook could break under some condition where this does not hold.
  const smartNavigate = (to, options) => to.includes(".") ? window.open(to, "_blank") : navigate(to, options);

  return smartNavigate;
}
