import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

function Services() {
    return (
        <section id='services'>
            <h5>Let's do this</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UX/UI Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                    </ul>
                </article>
                {/* section for service 2 */}
                <article className='service'>
                    <div className="service__head">
                        <h3>service 2</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                    </ul>
                </article>
                {/* ----- section for service 3 */}
                <article className='service'>
                    <div className="service__head">
                        <h3>service 2</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                        <li><FiCheck className='service__list-icon'/>
                        <p>Elementum taciti nec curabitur tempor bibendum eros</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services