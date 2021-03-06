// import axios from 'axios'
import States from '../Constants/States'

// const states_api = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';

const getStates = () => {
		const states = [];
		States().map(data => {
			return (states.push(data.state.name, data.state.image))
		});
	return states
}	
	
export default getStates