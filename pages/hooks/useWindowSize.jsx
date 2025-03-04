// 5. Custom hook (3p)
// Flytta all logik som hanterar width och height in i en
// custom hook: useWindowSize

// useWindowSize ska returnera ett objekt med width, height och isMobile
// isMobile är true om fönstret är mindre än 600px bred.

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height, isMobile };
}
