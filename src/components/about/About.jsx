import React from "react";
import "./about.css";
import meAbout from "../../assets/me-about.jpeg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
    return (
        <section id="about">
            <h5>Let's get to know each other!</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={meAbout} alt="About section Image of Rayito Aguirre" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaAward />
                            </icon>
                            <h5>Experience</h5>
                            <small>Current Student</small>
                        </article>
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaUsers />
                            </icon>
                            <h5>Projects</h5>
                            <small>Accomplished Works!</small>
                        </article>
                        <article className="about__card">
                            <icon className="about__icon">
                                <FaTasks />
                            </icon>
                        </article>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Connect
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About