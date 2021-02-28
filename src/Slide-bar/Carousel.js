import React from 'react'
// import { Link } from 'react-router-dom';
import { Carousel }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



 function Slidebar() {
  return (
    <Carousel className="border-b pa3 ma3">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://miro.medium.com/max/1366/1*JGzG0Jhgs-OrMCH1-Qj2MA.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Digitalize Agric Cultural Management Systems</h3>
      <p>Real Time Agricultural Online Agric Cultural Bussiness With Effective Security</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.euractiv.com/wp-content/uploads/sites/2/2018/09/shutterstock_772071496-800x450.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Online Roburst Citizen Database</h3>
      <p>Effective Revenue Recovery upto 30%</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eco-business.imgix.net/ebmedia/fileuploads/soybean-field-farming-field-agriculture.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440"
      alt=""
    />

    <Carousel.Caption>
      <h3>Secured Your Agric Card</h3>
      <p>Secured Your Owned Card for Keeping The Change KTC</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}


export default Slidebar;