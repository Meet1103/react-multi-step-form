import React from 'react';
import './ProfileForm.css';

const ProfileForm = ({ formData, setFormData }) => {
	return (
		<div className='profile-form'>
			<div className='profile-step-number'>Step 1</div>
			<div className='profile-form-name'>Your Profile</div>
			<div className='profile-form-description'>
				Enter the login information for your account. You
				will be able to create additional users after
				registering.
			</div>
			<div className='profile-form-content'>
				<div>
					<label className='labels'>
						First Name
						<span className='profile-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input Your First Name'
						type='text'
						className='profile-inputs'
						name='fname'
						value={formData.firstName}
						onChange={(e) =>
							setFormData({
								...formData,
								firstName: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Last Name
						<span className='require-fields'>*</span>
					</label>
					<br />
					<input
						placeholder='Input Your Last Name'
						type='text'
						className='profile-inputs'
						value={formData.lastName}
						onChange={(e) =>
							setFormData({
								...formData,
								lastName: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Email<span className='require-fields'>*</span>
					</label>
					<br />
					<input
						placeholder='Input Your Email'
						type='email'
						className='profile-inputs'
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Phone Number
						<span className='require-fields'>*</span>
					</label>
					<br />
					<input
						placeholder='Input Your Phone Number'
						type='text'
						className='profile-inputs'
						value={formData.phoneNumber}
						onChange={(e) =>
							setFormData({
								...formData,
								phoneNumber: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Password
						<span className='require-fields'>*</span>
					</label>
					<br />
					<input
						placeholder='Create Password'
						type='text'
						className='profile-inputs'
						value={formData.password}
						onChange={(e) =>
							setFormData({
								...formData,
								password: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Confirm Password
						<span className='require-fields'>*</span>
					</label>
					<br />
					<input
						placeholder='Confirm Your Password'
						type='text'
						className='profile-inputs'
						value={formData.confirmPassword}
						onChange={(e) =>
							setFormData({
								...formData,
								confirmPassword: e.target.value
							})
						}
						required
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;
