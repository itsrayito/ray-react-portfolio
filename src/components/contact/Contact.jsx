import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Contact() {
    return (
        <section id="contact">
            <h5>Let's Connect!</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contct__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <a href="mailto:rayito.aguirre94@gmail.com" target="_blank" classname="">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <FiLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <a
                        href="https://www.linkedin.com/in/rayitoaguirre/"
                        target="_blank"
                        classname=""
                        >
                            Let's Connect!
                        </a>
                    </article>
                    <article className="contact__option">
                        <FiGithub className="contact__option-icon"/>
                        <h4>GitHub</h4>
                        <a
                        href="https://www.github.com/itsrayito"
                        target="_blank"
                        className=""
                        >
                            My Projects
                        </a>
                    </article>
                </div>

                {/* beginning of the contact form */}

                <form>
                    <input
                    type="text"
                    name="name"
                    placeholder="First Name Last Name"
                    required
                    />
                    <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                    ></textarea>
                    <button type="submit" id="contact__btn" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;