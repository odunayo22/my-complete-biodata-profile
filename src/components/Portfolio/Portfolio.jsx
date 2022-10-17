import React from 'react';
import './Portfolio.scss';


import data from './Items-array';

/*
import IMG1 from '../../assets/edit-2.png';
import IMG2 from '../../assets/img-3.jpg';
import IMG3 from '../../assets/odun-333.png';
import IMG4 from '../../assets/odu-edit.png';
import IMG5 from '../../assets/edit-4.png';
import IMG6 from '../../assets/edit-1.png';
*/


const Portfolio = () =>{
    return(
        <section className="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>

                {
                    data.map(({id, image, title, github, demo}) =>{
                        return(
                            <article key={id}className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank'>Github</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  
                            </div>    
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;