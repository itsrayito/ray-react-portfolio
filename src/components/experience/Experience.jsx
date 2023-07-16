import React from "react";
import "./experience.css";
import { BsCheck2Circle } from "react-icons/bs";

function Experience() {
    return (
        <section id="experience">
        <h5>Experience</h5>
        <h2>Skills Learned</h2>

        {/* ---------- beginning of front-end card ----------- */}
        <div className="container experience__container">
            <center></center>
            <div className="experience__frontend">
                <h3>Front-End Development</h3>

                <div className="experience__content">
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                        <h4>Javascript</h4>
                        <small className="text-light">Experience</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                            <h4>jQuery</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                                <h4>TailWind</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            </article>
                            <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                    
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                        <h4>React</h4>
                        <small className="text-light">Experience</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsCheck2Circle className="experience__details-icon" />
                        <div>
                            <h4>Handlebars</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                    </div>
                    {/* ---------- begginning of back-end card ----------- */}
                    <div className="experience__backend">
                        <center></center>
                    <div className="experience__content">
                    <h3>Back-End Development</h3>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                            <h4>Node.js</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                            </article>
                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon" />
                                <div>
                                <h4>Express.js</h4>
                                <small className="text-light">Experienced</small>
                                </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                            <h4>Progressive Web Application</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div> 
                            <h4>Git</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                            <h4>Object-Oriented Programming</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon" />
                            <div>
                                     <h4>Model-View-Controller</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        </div>
                    </div>
                </div>
                </section>

    );
}


export default Experience;

