import React, { Fragment, useState } from 'react';
import BusinessForm from '../BusinessForm/BusinessForm';
import ConfirmForm from '../ConfirmForm/ConfirmForm';
import ProfileForm from '../ProfileForm/ProfileForm';

const FormContainer = ({ step, formData, setFormData }) => {
	const formContent = () => {
		if (step === 0) {
			return (
				<ProfileForm
					formData={formData}
					setFormData={setFormData}
				/>
			);
		} else if (step === 1) {
			return (
				<BusinessForm
					formData={formData}
					setFormData={setFormData}
				/>
			);
		} else {
			return <ConfirmForm />;
		}
	};

	return <div>{formContent()}</div>;
};

export default FormContainer;
