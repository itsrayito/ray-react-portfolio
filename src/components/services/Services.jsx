import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

function Services() {
    return (
        <section id='services'>
            <h5>Let's do this together!</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Full-Stack Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Knowleadgeable in front & back-end technologies. </p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Familiar with database management such as MySQL & MongoDB.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Developing and integrating API's</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Well knowing of Version Control, like Git.</p>
                        </li>
                    </ul>
                </article>
                {/* section for service 2 */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Full Stack Web Development Cont.</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Diligently come up with a useful design.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Testing & debugging using frameworks such as Jest.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Deploying and hosting using servers such as Heroku & GitHub pages.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>CI/CD (Continuous Integration and Deployment) using GitLab.</p>
                        </li>
                    </ul>
                </article>
                {/* ----- section for service 3 */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Team Player</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Manages stress easily in a fast paced environment.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Effective good communication within group members.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Adaptability to adapt to changing project requirements.</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Positive attitude and support within my group.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services