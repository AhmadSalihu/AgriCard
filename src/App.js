import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Footer/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Carousel from './Slide-bar/Carousel';
import Submenu from './Slide-bar/Submenu/Submenu';
import Acquatic from './Components/Servicespages/acquatic';
import Poultry from './Components/Servicespages/poultry';
import Livestock from './Components/Servicespages/Livestock.component';
import Insuarance from './Components/Servicespages/insuarance';
import AgricLoan from './Components/Servicespages/agricloans';
import AgricEntrepreneur from './Components/Servicespages/agricentrepreneur';
import AgriCardProcurement from './Components/Servicespages/agriCard.procurements';
import AgriCardCBHI from './Components/Servicespages/agricard.cbhi';
import AgriCardGrains from './Components/Servicespages/agricard.grains';
import KeepingTheChange from './Components/Servicespages/agricard.ktc';
import MixedAgric from './Components/Servicespages/mixedagric';
import AgriCardPriceSurvey from './Components/Servicespages/agricprice.survey';
import AgriCardFertilizer from './Components/Servicespages/agricard.fertilizer';
import CommordityExchangeInformation from './Components/Servicespages/agricard.commodityexchange_information';


function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Route exact path='/'>
            <Carousel />
          </Route>
        <Switch>
          <Route exact path="/">
              <Submenu />
              <Home />
            </Route>
            <Route path='/agricard_cbhi' component={AgriCardCBHI} />
            <Route path='/acquatic' component={Acquatic} />
            <Route path='/grains' component={AgriCardGrains} />
            <Route path='/poultry' component={Poultry} />
             <Route path='/livestock' component={Livestock} />
             <Route path='/agric_investment' component={Insuarance} />
             <Route path='/agricloans' component={AgricLoan} />
             <Route path='/procurement' component={AgriCardProcurement} />
             <Route path='/agric_entrepreneur' component={AgricEntrepreneur} />
             <Route path='/ktc' component={KeepingTheChange} />
             <Route path='/mixedagric' component={MixedAgric} />
             <Route path='/agric_price_survey' component={AgriCardPriceSurvey} />
             <Route path='/fetilizer_program' component={AgriCardFertilizer} />
             <Route path='/agric_cei' component={CommordityExchangeInformation} />
           <Route path="/about">
            <About />
          </Route>        
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
