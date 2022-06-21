import "./App.scss";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { Now } from "./pages/Now/Now";
import { useDispatch } from "react-redux";
import { themeActions } from "./store/theme-slice";
import { Project } from "./pages/Project/Project";
import Radium, { StyleRoot } from "radium";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(themeActions.getThemeFromLocalStorage());
    dispatch(themeActions.changeTheme());
  }, [dispatch]);
  return (
    <StyleRoot>
      <div className="App">
        {createPortal(
          <div className="gradient-inner"></div>,
          document.getElementById("gradient-outer")
        )}
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/" element={<Projects />}></Route>
          <Route path="/projects/:projectId" element={<Project />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
