import React from "react";
import "./style.css";
import img from "./WIN_20240413_21_24_20_Pro.jpg";
export default function Profile(params) {
    return (
        <>
            
            <div className="profile">
                <h2>Shravan PAi</h2>
                <img src={img} alt="DARSHAN" width="200" height="200" />
                <div className="object">
                    <h2>OBJECTIVES</h2>
                    <p>Very skilled web developer</p>
                </div>
                <div className="education">
                    <h2>EDUCATION</h2>
                    <ul>
                        <li>Bachelor of Computer Application</li>
                        <li>Master of Computer Application</li>
                    </ul>
                </div>
                <div className="skills">
                    <h2>SKILLS</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="personal">
                    <h2>Personal Info</h2>
                    <p><strong>GMAIL:</strong><a href="mailto:shravanpai83530@gmail.com">MY MAIL</a></p>
                    <p><strong>CONTACT:</strong> 123456789</p>
                    <p><strong>GITHUB:</strong><a href="https://github.com/ShArAvaNPai" target="_blank" rel="noopener noreferrer">SHRAVN GIT</a></p>
                </div>
                <div className="language">
                    <h2>Languages Known</h2>
                    <ul>
                        <li>Kannada</li>
                        <li>English</li>
                        <li>Hindi</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
