import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const AgricEntrepreneur = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/entrep03.jpeg"
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
				src="/cardimages/entrep000.jpg"
				alt="Second slide"
			/>
					<Carousel.Caption>
				<h3 className="h1">Secure Your Own AgriCard</h3>
				<p className="h1">For large Agric Bussiness Production</p>
					</Carousel.Caption>
				</Carousel.Item>
					<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/entrep03.jpg"
				alt="Second slide"
			/>
					<Carousel.Caption>
				<h3 className="h1">Secure Your Own AgriCard</h3>
				<p className="h1">For large Agric Bussiness Production</p>
					</Carousel.Caption>
					
		</Carousel.Item>
			</Carousel>
			<div>
				<h3 className="h1">Grap Your AgriCard to get 30% discount on the AgriCard Product of your choice.</h3>
			</div>
				<div className="row">
					<div className="column">
					<div className="card">
						<img src='/cardimages/entrep02.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/agripump.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/entrep0.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/entrep000.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Entrepreneurship</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/entrep00.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/entrep000.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/entrep01.jpeg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/entrep.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Entrepreneurshi</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AgricEntrepreneur
