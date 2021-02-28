import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './agricard.styles.css'

const AgricLoan = () => {
	return (
	<>
		<Carousel>
		<Carousel.Item interval={1000}>
			<img
				className="d-block w-100"
				src="https://netstorage-legit.akamaized.net/images/2a7217cbde1af5c0.jpg?imwidth=900" alt='' />
		</Carousel.Item>
		</Carousel>
		<div className="display">
		<br />
		<h1>Large Credit Product</h1>
		<br />
			<ol>
				<li>Developed to finance agricultural production and Agro-allied activities.
				</li>
				<li>Loan Volume ranging from %0 million to a maximum of 1 billion for a single obligor</li>
				<li> Loan tenor not exceeding five(5) years</li>
			</ol>
			{/* <img classname='' src='https://netstorage-legit.akamaized.net/images/2a7217cbde1af5c0.jpg?imwidth=900' alt='' /> */}
		</div>
		<br />
		<div>
			<h1>
				AgriCard Loan Requirement
			</h1>
			<br />
			<ul>
				<p>.........</p>
				<p>...........</p>
				<p>...........</p>
			</ul>
		</div>
		</>
	)
}

export default AgricLoan
