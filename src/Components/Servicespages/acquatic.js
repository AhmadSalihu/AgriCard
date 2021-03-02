import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Acquatic = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/fish01.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Acquatics Fish</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/fish02.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}> 
			<img
				className="d-block w-100"
				src="/cardimages/fish0.jpg"
				alt="Third slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Acquatics</h3>
				<p className="h1">Acquatic Fish</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
				<div className="row">
					<div className="column">
					<div className="card">
						<img src='/cardimages/livestock01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Cows</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/fish01.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/fish02.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/fish01.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish03.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish0.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div className="column">
					<div className="card">
						<img src='/cardimages/acquafish.jpg' alt='' />
						<div className="tb flex justify-between">
					<h3 classname="title">Fish</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Acquatic
