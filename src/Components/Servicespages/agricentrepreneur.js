import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const AgricEntrepreneur = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/entrep01.jpeg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Agricultural Entrepreneurship</h3>
				<p className="h1">With AgriCard Bussiness For Nigerian's Farmers</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/agricard02.jpg"
				alt="Second slide"
			/>
					<Carousel.Caption>
				<h3 className="h1">Secure Your Own AgriCard</h3>
				<p className="h1">For large Agric Bussiness Production</p>
			</Carousel.Caption>
		</Carousel.Item>
		</Carousel>
		</>
	)
}

export default AgricEntrepreneur
