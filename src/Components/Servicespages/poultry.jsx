import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.styles.css'

const Poultry = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/poult.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1 bold">Poultry</h3>
			</Carousel.Caption>
				</Carousel.Item>
					<Carousel.Item interval={4000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry02.jpg"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h3 className="h1 bold">Poultry</h3>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
				<div class="row">
					<div class="column">
					<div class="card">
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3 classname="title">Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>	<div class="column">
					<div class="card">
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between shrink">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
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
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
					<div class="column">
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
						<img src='/cardimages/poultry01.jpg' alt='' />
						<div className="tb flex justify-between">
						<h3>Poultry</h3>
						<button className="btn">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
			

		{/* <div className='flex flex-wrap'>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
			Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
			Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry04.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
				Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry05.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
				Poultry Chicken
			</p>
					</div>
				</Link>			
				</article>
					<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
			Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry01.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
			Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry04.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
				Poultry Chicken
			</p>
					</div>
				</Link>			
			</article>
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Link to='/' >
		<img src="/cardimages/poultry05.jpg" className="db w-100 br2 br--top" alt="" />
		<div className="pa2 ph3-ns pb3-ns">
			<div className="dt w-100 mt1">
			</div>
			<p className="f6 lh-copy measure mt2 mid-gray">
				Poultry Chicken	</p>
				<Button variant="primary">Go somewhere</Button>
					</div>
				</Link>			
				</article>
			</div> */}
		</>
			
	)
}

export default Poultry
