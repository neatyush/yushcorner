import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // "smooth" if you want scroll effect
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
