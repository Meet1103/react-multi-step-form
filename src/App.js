import React, { useEffect, useState } from 'react';
import StepButton from './Components/StepButton/StepButton';
import FormContainer from './Components/FormContainer/FormContainer';
import './App.css';

const getFormDataFromLocalStorage = () => {
	let formDataObject = localStorage.getItem('formData');

	if (formDataObject !== null) {
		return JSON.parse(formDataObject);
	} else {
		return {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
			brandName: '',
			brandType: '',
			streetAddress: '',
			city: '',
			zipcode: 0,
			taxIdNumber: 0
		};
	}
};

const App = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState(
		getFormDataFromLocalStorage()
	);

	useEffect(() => {
		localStorage.setItem(
			'formData',
			JSON.stringify(formData)
		);
	}, [formData]);

	const formTitle = [
		'Your Profile',
		'Business Information',
		'Confirmation'
	];

	const prevStep = () => {
		setStep((currentStep) => currentStep - 1);
	};

	const nextStep = () => {
		if (step < 2) {
			setStep((currentStep) => currentStep + 1);
		} else {
			alert('Form Submitted');
			setStep(0);
		}
	};

	return (
		<div className='app'>
			<div>
				<h2>Create New Account</h2>
			</div>
			<div className='stepper'>
				{formTitle.map((title, index) => (
					<div
						key={index}
						className={
							step >= index
								? step === index
									? 'rounded-border current-step step'
									: 'current-step step'
								: 'step'
						}>
						<div className='rounded-step-number'>
							{index + 1}
						</div>
						<div>{title}</div>
					</div>
				))}
			</div>
			<div className='form-container'>
				<FormContainer
					step={step}
					formData={formData}
					setFormData={setFormData}
				/>
			</div>
			<div className='buttons'>
				<StepButton
					step={step}
					prevStep={prevStep}
					nextStep={nextStep}
				/>
			</div>
		</div>
	);
};

export default App;
