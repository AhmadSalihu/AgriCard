import React from 'react'
import { data } from '../../agrikad.data'
import AgriCard from './agriproduct'

const AgriProducts = () => {
	return (
		<div className='row center tc'>
			{
				data.map(data => (
					<AgriCard key={data.id} data={data} />
				)) 
			}
		</div>
	)
}

export default AgriProducts
 