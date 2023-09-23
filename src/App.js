import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SpeedDialComponent from "./components/UI/speed-dial-component/SpeedDialComponent";
import AboutMe from "./screens/AboutMe";
import Certificates from "./screens/Certificates";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import TestZone from "./screens/TestZone";
import Github from "./screens/Github";
import ProfExperience from "./screens/ProfExperience";

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [theme, setTheme] = useState(undefined)
  const mode = useContext(ThemeContext)

  useEffect(() => {
    setTheme(mode)
  }, [mode])

  return theme?.theme === "dark" ? (
    <>
    <ScrollToTop/>
    <div
      style={{
        position: "relative",
        backgroundColor: "#252525",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
      className="h-100 text-light bg-dark"
    >

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/test-zone" element={<TestZone />} />
        <Route path="/github" element={<Github />} />
        <Route path="/experience" element={<ProfExperience />} />
      </Routes>

      <div className="fixed-bottom">
        <SpeedDialComponent />
      </div>
    </div>
    </>
  ) : (
    <div
    style={{
      position: "relative",
      minHeight: "100vh",
      minWidth: "100vw"
    }}
    className="h-100 text-dark"
  >
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/test-zone" element={<TestZone />} />
      <Route path="/github" element={<Github />} />
    </Routes>

    <div className="fixed-bottom">
      <SpeedDialComponent />
    </div>
  </div>
  )
}

export default App;
