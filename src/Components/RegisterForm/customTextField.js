import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';


const FormInput = ({ label, name }) => {
	const { control } = useForm();
	return (
		<Grid item xs={12} sm={6}>
			<Controller
				as={TextField}
				control={control}
				fullWidth
				name={name}
				defaultValue=''
				label={label}
				/>
		</Grid>
	)
}

export default FormInput
