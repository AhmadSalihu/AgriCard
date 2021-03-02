import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const AgriCardGrains = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/grain06.jpg"
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
				src="/cardimages/grain07.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
				<div class="row">
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain03.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain02.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain02.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grains05.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain0.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain01.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain07.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src='/cardimages/grain06.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Grains</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>	
		</>
	)
}

export default AgriCardGrains
