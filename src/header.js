import React from "react";
const picture="profile-pic.jpg";

export default function Header(){
    return(
        <div>
            <div id="stick">
        <div id="main">
            <div id="photo">
                <img alt="profile-pic" id="pfp" src={picture} />
                </div>
            <div id="bio">
                <span id="name">Loveleen Kaur</span>Full Stack developer | Student at
                chitkara university.
            </div>

            <div></div>
            <div id="contact">
                <h4>contact me</h4>
                <div id="icons">
                    <a href="https://github.com/loveleen4k"><img alt="github" src="png/github-icon.jpg" /></a>
                    <a href="https://www.linkedin.com/in/loveleenk14/"><img alt="linkedin" src="png/linked-in.png" /></a>
                    <a href="mailto:kambojloveleen@gmail.com"><img alt="email" src="png/mail.png" /></a>
                   
                    <br/>
                </div>
            </div>

        </div>
        <hr/>

</div>
        </div>
    )
}