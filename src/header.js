
import React from "react";
import "./app.css";
import styled from "styled-components";

export default function Header(){
    return(
        <div>
        <div id="main">
           
            <img id="photo" alt="profile-pic" src="profile-pic.jpg" />
            
            <div id="bio">
                <span id="name">Loveleen Kaur</span>Full Stack developer | Student at
                chitkara university.
            </div>
            <div id="space"></div>

            <div id="contact">
                <h4>contact me</h4>
                <div className="icons">
                    <a href="https://github.com/loveleen4k"><img alt="github" src="png/github-icon.png" /></a>
                    <a href="https://www.linkedin.com/in/loveleenk14/"><img alt="linkedin" src="png/linked-in.png" /></a>
                    <a href="mailto:kambojloveleen@gmail.com"><img alt="email" src="png/mail.png" /></a>
                    <br/>
                </div>
            </div>

        
         
        </div><hr/>

        </div>
    )
}