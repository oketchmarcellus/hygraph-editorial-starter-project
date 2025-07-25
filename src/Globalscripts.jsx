// src/scripts.jsx
import { useEffect } from 'react';

const GlobalScripts = () => {
  useEffect(() => {
    const scripts = [
      "assets/js/jquery.min.js",
      "assets/js/browser.min.js",
      "assets/js/breakpoints.min.js",
      "assets/js/util.js",
      "assets/js/main.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = `${process.env.VITE_PUBLIC_URL}/${src}`;
      script.async = true;
      document.body.appendChild(script);

      // Cleanup function to remove the script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    });
  }, []);

  return null; // This component doesn't render anything
};

export default GlobalScripts;