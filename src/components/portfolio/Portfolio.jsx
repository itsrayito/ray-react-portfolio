import React from 'react';
import './portfolio.css'
import cover1 from '../../assets/note-taker.png'
import cover2 from '../../assets/oasis.png'
import cover3 from '../../assets/text-editor.png'
import cover4 from '../../assets/marvel.png'

function Portfolio() {
    return (
            <section id='portfolio'>
                <h5>My Works</h5>
                <h2>Portfolio</h2>

                <div className="container portfolio__container">
                    <article className='portfolio__item'>
                        <div className='portfolio__item'>
                            <img src={cover1} alt="Project 1" />
                        </div>
                        <h3>Note Taker</h3>
                        <a href="https://github.com/itsrayito" className='btn' target='_blank'>GitHub Repository</a>
                        <a href="https://github.com/itsrayito" className='btn btn-primary' target='_blank'>Live Site</a>
                    </article>

                    <article className='portfolio__item'>
                        <div className='portfolio__item'>
                            <img src={cover2} alt="Project 1" />
                        </div>
                        <h3>Oasis</h3>
                        <a href="https://github.com/itsrayito" className='btn' target='_blank'>GitHub Repository</a>
                        <a href="https://gothub.com/itsrayito" className='btn btn-primary' target='_blank'>Live Site</a>
                    </article>

                    <article className='portfolio__item'>
                        <div className='portfolio__item'>
                            <img src={cover3} alt="Project 1" />
                        </div>
                        <h3>Text Editor</h3>
                        <a href="https://github.com/itsrayito" className='btn' target='_blank'>GitHub Repository</a>
                        <a href="https://gothub.com/itsrayito" className='btn btn-primary' target='_blank'>Live Site</a>
                    </article>

                    <article className='portfolio__item'>
                        <div className='portfolio__item'>
                            <img src={cover4} alt="Project 1" />
                        </div>
                        <h3>Marvel Gifs Assemble</h3>
                        <a href="https://github.com/itsrayito" className='btn' target='_blank'>GitHub Repository</a>
                        <a href="https://gothub.com/itsrayito" className='btn btn-primary' target='_blank'>Live Site</a>
                    </article>
                </div>
            </section>
    )
}

export default Portfolio