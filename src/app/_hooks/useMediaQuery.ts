import { useEffect, useState } from "react";

export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined to ensure it's a browser environment
    if (typeof window !== "undefined") {
      const mediaMatch = window.matchMedia(query);
      setMatches(mediaMatch.matches);

      const handler = (e: any) => setMatches(e.matches);

      // Add event listener for changes
      mediaMatch.addEventListener("change", handler);

      // Cleanup function to remove event listener when component unmounts
      return () => {
        mediaMatch.removeEventListener("change", handler);
      };
    }
  }, [query]);

  return matches;
};
