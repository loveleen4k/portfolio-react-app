
import React from "react";
import "./app.css";
import styled from "styled-components";

const stick=styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #28192b;
    `;


export default function Header(){
    return(
        <div>
        <stick>
        <div id="main">
            <div id="photo">
                <img alt="profile-pic" id="pfp" src="profile-pic.jpg" />
            </div>
            
            <div id="bio">
                <span id="name">Loveleen Kaur</span>Full Stack developer | Student at
                chitkara university.
            </div>
            <div id="space"></div>

            <div id="contact">
                <h4>contact me</h4>
                <div id="icons">
                    <a href="https://github.com/loveleen4k"><img alt="github" src="png/github-icon.png" /></a>
                    <a href="https://www.linkedin.com/in/loveleenk14/"><img alt="linkedin" src="png/linked-in.png" /></a>
                    <a href="mailto:kambojloveleen@gmail.com"><img alt="email" src="png/mail.png" /></a>
                    <br/>
                </div>
            </div>

        
         
        </div><hr/>
        </stick>

        </div>
    )
}