// import axios from 'axios'
import States from '../Constants/States'

// const states_api = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';


const getLocals = () => {
		// const { data } = await axios(states_api);
		const Locals = {}
		States().map(data => {
			Locals[data.state.name] = data.state.locals;
			return Locals
		})		
		return Locals;
}	
	
export default getLocals