import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import './Header.styles.css';


function Header() {
    return (
        <header  className="center sm:text-left border-b p-2 flex justify-between shadow-2xl items-center">
              <Link to="/">
                	 <div>
                    <img  className='font' src='/cardimages/agricard.png' alt='' />
                </div>
            </Link>
            <div className="dropdown dropbtn ">
             <div className="dropdown">
           <button  style={{ fontSize: '20px'}} className="dropbtn">AgriCard</button>
                <div className="dropdown-content block">
                  <a href="/agricloans">AgriCard Loans Mgt System</a>
                  <a href="agric_entrepreneur">AgriCard Entreprenuer</a>
                  <a href="/agric_investment">AgriCard Insuarance</a>
                  <a href="/acquatic">AgriCard Fish & Aquatic Mgt System</a>
                  <a href="/procurement">AgriCard Procurements Mgt</a>
                  <a href="agricard_cbhi">AgriCard CBHI</a>
                  <a href="grains">AgriCard Grains Mgt System</a>
                  <a href="ktc">AgriCard Keeping The Change(KTC)</a>
                  <a href="/poultry">AgriCard Poultry Mgt System</a>
                  <a href="/mixedagric">AgriCard Mixed Farming Mgt System</a>
                  <a href="/agric_price_survey">AgriCard Market Price Surveys</a>
                  <a href="livestock">AgriCard Livestock Mgt System</a>
                  <a href="/fetilizer_program">AgriCard Fertilizer Program</a>
                  <a href="/market_analytics">AgriCard Produces Market Analytics</a>
                  <a href="/agric_cei">AgriCard Commordity Exchange Information</a>
                </div>
            </div> 
            </div>  
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
                <Link style={{ fontSize: '20px'}} className="dropbtn" to='/signin'>Register</Link>
            <Navigation />
            </header>
    )
}

export default Header 