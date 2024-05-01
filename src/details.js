import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import AboutMe from "./aboutme";
import Projects from "./projects";
import Certifications from "./certifications";

const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  font-size: 100%;
  margin: 0;
  border-radius: 3px;
  padding: 0 5% 0 5%;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

export default function Details() {
  /* useEffect(() => {
    if (window.location.pathname !== '/portfolio-react-app/') {
      window.location.href = '/portfolio-react-app/';
    }
  }, []);
  */

  return (
    <Router>
      <Navigation>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
      </Navigation>
      <hr />
      <Routes>
    <Route path="/" exact element={<AboutMe />} />
      <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}
