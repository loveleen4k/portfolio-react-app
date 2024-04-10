import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Fixed import for Routes
import styled from 'styled-components';

import AboutMe from './aboutme';
import Projects from './projects';
import Certifications from './certifications';


const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px 0 10px;
  padding: 05px 10px;
  border: 1px solid #333;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;




export default function Details(){
    return(
    <Router>
      
      <Navigation>
        <NavLink to="/portfolio-react-app/aboutme">About Me</NavLink>
        <NavLink to="/portfolio-react-app/projects">Projects</NavLink>
        <NavLink to="/portfolio-react-app/certifications">Certifications</NavLink>
      </Navigation>
      <hr/>
        <Routes>
          <Route path={"/portfolio-react-app"} element={<AboutMe />} />
          <Route path={"/portfolio-react-app/aboutme"} element={<AboutMe />} />
          <Route path="/portfolio-react-app/projects" element={<Projects />} />
          <Route path="/portfolio-react-app/certifications" element={<Certifications />} />
        </Routes>
      
    </Router>
    )
}