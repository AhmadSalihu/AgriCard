import { Button, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
// import { usePaystackPayment } from 'react-paystack';
// import { PaystackButton } from "react-paystack"


	
// const config = {
		
// 	reference: (new Date()).getTime(),
// 	amount: '1000',
// 	publicKey: 'pk_test_2f2e79d83303375aca4ca56ac8e9de6d50832611'
//   };
	
const AgriCardType = ({ backStep, dataForm }) => {
		
	// const handlePaystackSuccessAction = (reference) => {
  //     console.log(reference);
  //   };

	//  const handlePaystackCloseAction = () => {
  //     console.log('closed')
  //   }

	//  const componentProps = {
	// 	 ...config,
	// 	 text: 'Paystack Button Implementation',
  //       onSuccess: (reference) => handlePaystackSuccessAction(reference),
	// 	 onClose: handlePaystackCloseAction,
	// 		...dataForm
  //   };


	return (
		<>	<Typography style={{ padding: '15px 0', fontWeight: 'bold'}} variant='h6' gutterBottom>Review</Typography>
			<List disablePadding>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.FirstName} />
					<Typography variant='body2' >{dataForm.lastName}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.email} />
					<Typography variant='body2'>{dataForm.phoneNo}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.selectState} />
					<Typography variant='body2'>{dataForm.selectLocalGovt}</Typography>
				</ListItem>
				<ListItem style={{ padding: '10px 0', fontWeight: 'bold' }}>
						<ListItemText primary={dataForm.selection} />
					<Typography variant='body2'>₦{dataForm.price}</Typography>
				</ListItem>
			</List>	
				<Divider />
			<Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method</Typography>
			
			<br />
			<br />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Button variant='outlined' color='primary' onClick={backStep}>Back</Button>
			<Button variant='contained' color='primary'>pay NGN{dataForm.price}</Button>
			</div>
			{/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<PaystackButton {...componentProps} />
			<Button variant="contained" onClick={backStep}>back</Button>
				<PaystackButton variant='contained' className="paystack-button" color='primary' onClick={() => {
                initializePayment()
            }}>NGN{dataForm.price }</PaystackButton>
			</div> */}
		</>
	)
}

export default AgriCardType
