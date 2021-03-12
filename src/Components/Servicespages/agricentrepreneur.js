import { Button } from '@material-ui/core'
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
      </Carousel>
      <br />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Understanding
              <br className="hidden md:block" />
              Entrepreneurship{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  In Farming
                </span>
              </span>
              </h2>
            <h1 className="text-deep-purple-accent-400">What is Entrepreneurship?</h1>
            <p className="text-base text-gray-700 md:text-lg">
             <strong classname='i font-bold'>Entrepreneurship</strong> is a key factor for the survival of smallscale farming in an ever-changing and increasingly
              complex global economy. But what is entrepreneurship
              in agriculture? How does it relate to small-scale farmers
              who operate on the edges of the economy?
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-bold leading-5">
                  Farmers as entrepreneurs
                </h6>
                <p className="text-sm text-gray-900">
                Farmer-entrepreneurs see their farms as a business. They
                see their farms as a means of earning profits. They are
                passionate about their farm business and are willing to
                take calculated risks to make their farms profitable and
                their businesses grow. 
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-bold leading-5">
                 The entrepreneurial environment
                </h6>
                <p className="text-sm text-gray-900">
                Farmer-entrepreneurs operate in a complex and dynamic
                environment. They are part of a larger collection of people
                including other farmers, suppliers, traders, transporters,
                processors and many others. Each of these has a role to
                play in producing products and moving them through to
                the market – through the value chain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Farmer-entrepreneurs
              <br className="hidden md:block" />
              face many challenges{' '}
                <br />
                {/* <br />
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                 Solutions:
                </span>
              </span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             Entrepreneurial
							farmers need access
							to finance, land,
							labour, information
							and knowledge to be
							successful.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Some of the Challenges are:
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Market-related Risk
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Access to Finance and Credit
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Access to Information
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Low Bargaining Power
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Bandits and kidnappers
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Access to Training
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
      </div>
      <br />
			  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/entrep02.jpg'
              alt="entrepreneur"
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>						
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
						src='/cardimages/entrep.jpg' 								
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/agripump.jpg'
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/entrep0.jpg'
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/entrep02.jpg'
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/cardimages/entrep00.jpg'
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
					</a>
					<a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
             src='/cardimages/entrep01.jpeg'
              alt=""
            />
            <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">More Info</h3>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-l	g hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
               src='/cardimages/entrep.jpg'
              alt=""
            />
             <div style={{display: 'flex', justifyContent: 'space-between'}} className="absolute inset-x-0 bottom-0 px-1 py-2 bg-black bg-opacity-175">
               	<h3 className="text-sm btn font-medium tracking-wide pa5 text-white">Entrepreneurship</h3>
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

export default AgricEntrepreneur
