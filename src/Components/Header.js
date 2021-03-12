import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import './Header.styles.css';
import AgriCardServices from './Servicespages/agricard.services';


function Header() {
    return (
        <header style={{ fontSize: '20px' }}  className="center sm:text-left border-b p-0 flex justify-between shadow-2xl items-center">
              <Link to="/">
                	 <div>
                    <img  className='font' src='/logoimages/Agricard_log.jpg' alt='agricard.logo' />
                </div>
            </Link>
           <AgriCardServices />
             <div className="dropdown">
            <button style={{ fontSize: '20px'}} className="dropbtn">Services</button>
                <div className="dropdown-content">
                  <a href="/acquatic">Acquatic</a>
                  <a href="/agric_entrepreneur">Agric Entreprenuer</a>
                  <a href="/grains">Grains</a>
                  <a href="/livestock">Livestock</a>
                  <a href="/mixedagric">Mixed Farming</a>
                  <a href="/poultry">Poultry</a>
                </div>
            </div> 
				
                <Link style={{ fontSize: '20px'}} className="dropbtn" to='/about'>About</Link>
                <Link style={{ fontSize: '20px'}} className="dropbtn" to='/sign_up'>Register</Link>
            <Navigation />
            </header>
    )
}

export default Header 