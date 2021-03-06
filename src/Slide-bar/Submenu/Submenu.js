import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './submenu.styles.css';

const Submenu = () => {
  AOS.init();
  return (
      <>
        <div className="main border-b">
        <div className="row">
          <div className="content">
      <img src="/cardimages/agricard02.jpg" alt="Agricard" style={{width: '100%'}}/>
      <h3 className="h1">AgriCard</h3>
     <p className="font-bold">You grow, you raise, you farm. You are a Producer. Let AgriCard get you what you need to keep growing, raising and farming.</p>
						<p className="font-bold"> A Digitalize AgriCard Management Sytems for robust citizen database with effective security management and Real Time Online Agricultural Bussiness Revenue Recoveries</p>
    </div>
  </div>
      </div>
     <section className="mw7 center avenir">
  <h2 className="baskerville fw1 ph3 ph0-l tc h1">AgriC Verve (Prepaired FRiD)</h2>
  <article className="bb b--black-10">
    <a style={{textDecoration: 'none', color: 'navy-blue'}} className="db pv4 ph3 ph0-l black " href="/#">
      <div className="flex flex-column flex-row-ns">
        <div data-aos="fade-right" className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="cardimages/vervecard.jpg" className="db fl w-50" alt="" />
        </div>
        <div className="w-100  w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 h1 fl w-50 lh-title">Agric Verve Card, is a payment solution for farmers</h1>
            <p className="">Agric Verve card, is an agricultural credit card dedicated exclusively to YOU: Nigerian’s farmers. Designed to work with producers’ cash flow needs, AgriCard offers various payment and plans benefits that suit YOUR agribusiness.</p>
        </div>
      </div>
    </a>
  </article>
</section>
      <br />
          <h2 className="h1">How To Access AGriCard</h2>
      <div  data-aos="fade-up"
     data-aos-duration="3000">
      <div className="row">
        <div className="card">
          <h3 className="h1">Step 1</h3>
          <p className="font-bold text-purple-700 text-opacity-100"><strong>Create user profile and register with your email</strong></p>
          <span className="font-bold text-purple-700 text-opacity-100"><strong></strong>Includes your address, and state</span>
      </div>

        <div className="card">
          <h3 className="h1">Step 2</h3>
          <p className="font-bold text-purple-700 text-opacity-100"><strong>Click the Next step button</strong></p>
          <p className="font-bold text-purple-700 text-opacity-100"><strong></strong></p>
          <p className="font-bold text-purple-700 text-opacity-100">Select AgriCard Service type of your choice</p>
        </div>
        <div className="card">
          <h3 className="h1">Step 3</h3>
            <p className="font-bold text-purple-700 text-opacity-100"><strong>Create Profile</strong></p>
            <span className="font-bold text-purple-700 text-opacity-100">Provide the neccessary details in the register form</span>
          <p className="font-bold text-purple-700 text-opacity-100 ">Make Sure to reviev the details for accuracy</p>
          </div>
      
        <div className="card">
          <h3 className="h1">Step 4</h3>
          <p className="font-bold text-purple-700 text-opacity-100"></p>
          <p className="font-bold text-purple-700 text-opacity-100 "></p>
      </div>
        </div>
      </div>  
     
	</>
	)
}

export default Submenu
