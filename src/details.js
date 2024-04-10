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
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
      </Navigation>
      <hr/>
        <Routes>
          <Route path={"/"} exact element={<AboutMe />} />
          <Route path={"/aboutme"} exact element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      
    </Router>
    )
}