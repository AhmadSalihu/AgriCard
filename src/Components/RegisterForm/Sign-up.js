import React, { useState } from 'react'
import { Typography, Paper, Stepper, Step, StepLabel } from '@material-ui/core'

import useStyles from './styles'
import AgriCardType from './AgriCardTypeForm';
import AddressForm from './RegisterForm';


const steps = ['Address Form', 'AgriCard Type'];
const SingUpForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [dataForm, setDataForm] = useState({})
	const classes = useStyles();

	
	const next = (data) => {
		setDataForm(data)
		nextStep();
	}

	const ConfirmationForm = () => (
		<div>
			Confirmation
		</div>
	);
	
	const  nextStep  = () => setActiveStep ((prevActiveStep) => prevActiveStep + 1) 
	const  backStep  = () => setActiveStep ((prevActiveStep) => prevActiveStep - 1) 

	const Form = () => activeStep === 0
		? <AddressForm next={next} />
		: <AgriCardType dataForm={dataForm} nextStep={nextStep} backStep={backStep} />


 
	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography varian='h4' align='center'>Register Form</Typography>
					<Stepper activeStep={activeStep} className={classes.stpper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? <ConfirmationForm /> : <Form />}
				</Paper>
			</main>
		</>
	)
}

export default SingUpForm
