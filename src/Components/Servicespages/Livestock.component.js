import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Livestock = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={8000}>
			<img
				className="d-block w-100"
				src="/cardimages/livestock05.jpg"
				alt="livestock"
			/>
			<Carousel.Caption>
				<h3 className="h1">Livestock</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry05.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3 className='h1'>Livestock Management</h3>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block w-100"
				src="/cardimages/livestock03.jpg"
				alt="Third slide"
			/>
			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
				<div class="row">
					<div class="column">
					<div class="card">
						<img src='/cardimages/livestock01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div class="column">
					<div class="card">
						<img src='/cardimages/livestock02.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/livestock03.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/livestock04.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/livestock01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div class="column">
					<div class="card">
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div class="column">
					<div class="card">
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
					<div class="card">
						<img src='/cardimages/poultry05.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Livestock
