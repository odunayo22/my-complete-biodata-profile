import React from 'react';
import './About.scss';
import my from '../../assets/odu-edit-1.png';
import { FaAward } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { FcFolder } from 'react-icons/fc';


const About = () =>{
    return(
        <section id="about">
        <h5>Know More</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
            <div className="about__me">
                <div className="about__me-image">
                    <img src={my} alt="my" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icons'/>
                        <h5>Experience</h5>
                        <small>3+ Year Working</small>
                    </article>

                    <article className='about__card'>
                        <ImUsers className='about__icons'/>
                        <h5>Clients</h5>
                        <small>50+ Clients</small>
                    </article>

                    <article className='about__card'>
                        <FcFolder className='about__icons'/>
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>

                <p>
                    The information provided are all true. all details needeed is included. information provided are all true. all details needeed is included. information provided are all true. all details needeed is included. information provided are all true. all details needeed is included.
                </p>

                <a href='#contact' className='btn btn-primary'>Let's discuss</a>
            </div>
        </div>

        </section>
    )
}

export default About;