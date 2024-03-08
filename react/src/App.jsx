import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    localStorage.setItem("theme", preferredTheme);
    return preferredTheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () =>
      setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
