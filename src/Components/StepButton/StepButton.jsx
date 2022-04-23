import React from 'react';
import './StepButton.css';

const StepButton = ({ step, prevStep, nextStep }) => {
	return (
		<React.Fragment>
			{step > 0 ? (
				<button
					className='previous-step'
					onClick={prevStep}
					style={{ cursor: 'pointer' }}>
					Previous Step
				</button>
			) : null}
			<button
				className='next-step'
				onClick={nextStep}
				style={{ cursor: 'pointer' }}>
				{step === 2 ? 'Confirm' : 'Next Step'}
			</button>
		</React.Fragment>
	);
};

export default StepButton;
