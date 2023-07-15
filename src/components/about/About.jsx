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
                        <img src={meAbout} alt="Creator in About Section" />
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
                  <br></br>
                  <center>Hey Ya'll, and welcome to my portfolio! My name is Rayito Aguirre, or just call me Ray for short.<br></br>
                  I am a current student at Rice University's Coding Bootcamp in partnership with edX, finishing August 2023.
                  I graduated from the University of Houston- Downtown with a Bachelor's of Science in Criminal Justice. 
                  Software Develpment has always intrigued me, so I decided to finally learn it in depth and actually learn how
                  all things go together to create amazing things.
                  <br></br>
                  I am committed to continuous learning, keeping up with industry trends, and applying 
                  innovative technologies to enhance user experiences.
                  I am also looking up to contributing to impactful projects and grow as a professional 
                  in a dynamic and supportive environment. <br></br>
                  P.S. I love The Mandalorian.
                  </center>
                    </p>

                        <a href="#contact" className="btn btn-primary about__btn">
                        Connect
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;