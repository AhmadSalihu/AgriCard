import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

const MixedAgric = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={5000}>
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
		<Carousel.Item interval={3000}>
			<img
				className="d-block w-100"
				src="/logoimages/CASAVA FARM.jpg"
				alt="Second slide"
			/>
			<Carousel.Caption>
				<h3>CASAVA FARM</h3>
				<p></p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
			<div className='flex flexDirection row '>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
			<img src="/logoimages/YAMS.jpg" class="db w-100 br2 br--top" alt="" />
			<div class="pa2 ph3-ns pb3-ns">
				<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
			YAM Products
			</p>
					</div>
					</Link>
					
				</article>
					<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
			<img src="/logoimages/WATER MELONS.jpg" class="db w-100 br2 br--top" alt="" />
			<div class="pa2 ph3-ns pb3-ns">
				<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
			YAM Products
			</p>
					</div>
					</Link>
					
				</article>
					<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
			<img src="/logoimages/YAMS.jpg" class="db w-100 br2 br--top" alt="" />
			<div class="pa2 ph3-ns pb3-ns">
				<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
			YAM Products
			</p>
					</div>
					</Link>
					
				</article>
			</div>
		</>
	)
}

export default MixedAgric
