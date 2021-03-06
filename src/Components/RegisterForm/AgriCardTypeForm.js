import { Grid, InputLabel, MenuItem, Button, Select, Typography } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormInput from './customTextField'

const AgriCardType = ({ next, backStep }) => {

const methods = useForm()

	return (
		<>	<Typography style={{padding: '15px 0'}} variant='h6' gutterBottom>Agricard Reg</Typography>
			<FormProvider {...methods}>
				<form onSubmit={''}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select Agricard</InputLabel>
							<Select>
									{/* {data.map((data) => (
								<MenuItem key={data.id} value={data.id}>
										{data.label}
								</MenuItem>
									))} */}
							</Select>
						</Grid>
					<FormInput required name="address" label='Farm Address' />
					<FormInput required name="localGovt" label='Farm Local Govt' />
					</Grid>
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button component={Link} to ='/' variant="outlined" onClick={backStep}>Back</Button>
						<Button type='submit' variant="contained" color='primary'>NEXT</Button>
					</div>
				</form>
			</FormProvider>
		
		</>
	)
}

export default AgriCardType
