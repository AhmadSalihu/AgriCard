import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

const Poultry = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={1000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry02.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
			</Carousel>
		<div className='flex flexDirection row '>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" class="db w-100 br2 br--top" alt="" />
		<div class="pa2 ph3-ns pb3-ns">
			<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
				If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
			</p>
					</div>
				</Link>			
			</article>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" class="db w-100 br2 br--top" alt="" />
		<div class="pa2 ph3-ns pb3-ns">
			<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
				If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
			</p>
					</div>
				</Link>			
			</article>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry04.jpg" class="db w-100 br2 br--top" alt="" />
		<div class="pa2 ph3-ns pb3-ns">
			<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
				If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
			</p>
					</div>
				</Link>			
			</article>
			<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry05.jpg" class="db w-100 br2 br--top" alt="" />
		<div class="pa2 ph3-ns pb3-ns">
			<div class="dt w-100 mt1">
			</div>
			<p class="f6 lh-copy measure mt2 mid-gray">
				If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
			</p>
					</div>
				</Link>			
				</article>
			</div>
		</>
			
	)
}

export default Poultry
