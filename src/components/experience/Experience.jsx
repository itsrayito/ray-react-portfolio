import React from "react";
import "./experience.css";
import { BsCheck2Circle, BsPatchCheckFill } from "react-icons/bs";

function Experience() {
    return (
        <section id="experience">
        <h5>Experience</h5>
        <h2>Skills</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Front-End Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>Javascript</h4>
                        <small className="text-light">Experience</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>Bootstrap</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>TailWind</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>React</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle />
                        <h4>Handlebars</h4>
                        <small className="text-light">Experienced</small>
                    </article>
                    </div>
                    {/* ----- end for the front-end / start of the back-end card ----- */}

                    <h3>Back-End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>Node.js</h4>
                            <small className="text-light">Experienced</small>
                            </article>
                            <article className="experience__details">
                                <BsCheck2Circle />
                                <h4>Express.js</h4>
                                <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>MySQL</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>MongoDB</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>Progressive Web Applications</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>Git</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>Object-Oriented Programming</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle />
                            <h4>Modewl-View-Controller</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                    </div>
                </div>
            <div className="experience__backend"></div>
        </div>
    </section>
    );
}


export default Experience;

