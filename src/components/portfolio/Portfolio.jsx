import React from "react";
import "./portfolio.css";
import cover1 from "../../assets/note-taker.png";
import cover2 from "../../assets/oasis.png";
import cover3 from "../../assets/text-editor.png";
import cover4 from "../../assets/marvel.png";
import cover5 from "../../assets/empty scheduler.png";
import cover6 from "../../assets/weather.png";

const data = [
    {
        id: 1,
        image: cover1,
        title: "Note-Taker",
        github: "https://github.com/itsrayito/Express.js-Note-Taker",
        demo: "https://note-taker-ra.herokuapp.com/",
    },
    {
        id: 2,
        image: cover2,
        title: "Oasis",
        github: "https://github.com/robobrownie13/animal-blog-group-4-p2",
        demo: "https://salty-badlands-43491.herokuapp.com/",
    },
    {
        id: 3,
        image: cover3,
        title: "Text-Editor",
        github: "https://github.com/itsrayito/PWA-text-editor",
        demo: "https://lovely-jate-2fa379ab8708.herokuapp.com/",
    },
    {
        id: 4,
        image: cover4,
        title: "Marvel Gifs Assemble",
        github: "https://github.com/jdel-18/first-group-project",
        demo: "https://jdel-18.github.io/first-group-project/",
    },
    {
        id: 5,
        image: cover5,
        title: "Work-Day-Scheduler",
        github: "https://github.com/itsrayito/Work-Day-Scheduler",
        demo: "https://itsrayito.github.io/Work-Day-Scheduler/",
    },
    {
        id: 6,
        image: cover6,
        title: "Weather-Dashboard",
        github: "https://github.com/itsrayito/Weather-Dashboard",
        demo: "https://itsrayito.github.io/Weather-Dashboard/",
    },
];

function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                href={github}
                                classname="btn"
                                target="_blank"
                                >
                                    GitHub Repository
                                    </a>
                                    <a
                                    href={demo}
                                    classname="btn btn-primary"
                                    target="_blank"
                                    >
                                    Live Demo
                                    </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;