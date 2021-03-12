import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.styles.css'
import { Button } from '@material-ui/core';

const Poultry = () => {
	return (
		<>
		<Carousel>
		<Carousel.Item interval={7000}>
			<img
				className="d-block w-100"
				src="/cardimages/poultry01.jpg"
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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Poultry 
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Understanding</span>
          </span>{' '}
         Poultry Management Systems.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Find tips for raising poultry, including broilers, layer chickens, and turkeys. This section also includes information on flock management, handling, animal health, equipment, buildings, and technology.
        </p>
				</div>
				<div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
					<div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
							<h6 className="mb-2 font-bold text-deep-purple-accent-400 leading-5">
								

								
						</h6>
            <p className="text-base text-gray-900">
						These farmers do yet see their farms as
						businesses. Long-term investment is not yet a priority.
						They are hesitant about diversifying to higher value
						products. They are comfortable selling surpluses of
						their foodrops. Shifting to cash crops is too extreme and
						involves risks that they are not willing to take
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-gray-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-gray-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
            <p className="text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>

		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/poultry01.jpg'
              alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>						
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
					src='/cardimages/poult.jpg' 								
              alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/poultry-03.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/poultry02.jpg'
              alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/poultry04.jpg'
            alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/poultry05.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/poultry06.jpg'
             alt="poultry"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-l	g hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
               src='/cardimages/poultry0.jpg'
              alt="poultry"
            />
             <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Grains Product</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
      </div>
			</div>
			<br />
			<div>
				<Button type='submit' variant="contained"
					color='primary'>Apply for Card{' '} ₦5000</Button>
			</div>	
		</>
			
	)
}

export default Poultry
