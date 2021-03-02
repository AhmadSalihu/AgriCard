import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './page.styles.css'

const MixedAgric = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/ntergrtd.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1">Agricultural Entrepreneurship</h3>
				<p className="h1">With AgriCard Bussiness For Nigerian's Farmers</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block w-100"
				src="/cardimages/rice&fish.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3>Mix Farm</h3>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
				<div class="row">
				<div class="column">
					<div class="card">
						<img src='/cardimages/mixedfarm.jpeg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Mixed Farming</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/mixedfarm00.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Mixed Farming</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			<div class="column">
					<div class="card">
						<img src='/cardimages/mixfarm0.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Mixed Farming</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div class="column">
					<div class="card">
						<img src='/cardimages/mixedfarm.jpeg' alt='' />
						<div className="tb flex justify-between">
						<h3>Mixed Farming</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/ntergrtd.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Mixed Farming</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MixedAgric
