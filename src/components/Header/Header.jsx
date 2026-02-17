import React from 'react';
import './Header.scss';
import CTA from './CTA';
import ME from '../../assets/odunmi.png';
import HeaderSocials from './HeaderSocials';


const Header = () =>{
    return(
        <header>
            <div className= "container header__container">
                <h5> Hello I'm</h5>
                <h1>Oketoye Sakirat</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                
                <CTA />
        


       
                <HeaderSocials  className='social' />
               

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
        
            </div>

        </header>
    )
}

export default Header;