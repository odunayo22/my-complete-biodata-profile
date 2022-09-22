import React from 'react';
import './Services.scss';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return(
        <section id='services-serv'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>
                        
                    </ul>

                </article>
                {/**End of Web Development */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                       

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                       
                        {/*

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

    */}
                    </ul>

                </article>
                 {/**End of Web Development */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

                        
                    </ul>

                </article>
                 {/**End of Content Creation */}

                
            </div>
       
        </section>
    )
}

export default Services;