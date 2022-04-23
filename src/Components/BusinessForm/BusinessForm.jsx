import React from 'react';
import './BusinessForm.css';

const BusinessForm = ({ formData, setFormData }) => {
	return (
		<div className='business-form'>
			<div className='business-form-details'>
				<div className='business-step-number'>Step 2</div>
				<div className='business-form-name'>
					Business Information
				</div>
				<div className='business-form-description'>
					Please, enter information about your company
				</div>
			</div>
			<div className='business-form-heading'>
				<span>GENERAL INFORMATION</span>
			</div>
			<div className='business-form-content'>
				<div>
					<label className='labels'>
						Brand Name
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input Your Brand Name'
						type='text'
						className='business-inputs'
						value={formData.brandName}
						onChange={(e) =>
							setFormData({
								...formData,
								brandName: e.target.value
							})
						}
						required
					/>
				</div>
				<div>
					<label className='labels'>
						Brand Type
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<select
						className='business-inputs'
						placeholder='Select Type of Your Brand'
						value={formData.brandType}
						onChange={(e) =>
							setFormData({
								...formData,
								brandType: e.target.value
							})
						}>
						<option value='local'>Local</option>
						<option value='natipnal'>National</option>
					</select>
				</div>
				<div>
					<label className='labels'>
						Street Address
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input Your Street Address'
						type='text'
						className='business-inputs'
						value={formData.streetAddress}
						onChange={(e) =>
							setFormData({
								...formData,
								streetAddress: e.target.value
							})
						}
					/>
				</div>
				<div>
					<label className='labels'>
						City
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input City'
						type='text'
						className='business-inputs'
						value={formData.city}
						onChange={(e) =>
							setFormData({
								...formData,
								city: e.target.value
							})
						}
					/>
				</div>
				<div>
					<label className='labels'>
						Zip Code
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input Zip Code'
						type='number'
						className='business-inputs'
						value={formData.zipcode}
						onChange={(e) =>
							setFormData({
								...formData,
								zipcode: e.target.value
							})
						}
					/>
				</div>
				<div>
					<label className='labels'>
						Tax id Number
						<span className='business-require-fields'>
							*
						</span>
					</label>
					<br />
					<input
						placeholder='Input Tax ID Number'
						type='number'
						className='business-inputs'
						value={formData.taxIdNumber}
						onChange={(e) =>
							setFormData({
								...formData,
								taxIdNumber: e.target.value
							})
						}
					/>
				</div>
			</div>
			<div className='business-form-heading'>
				<span>COI PDF UPLOAD</span>
			</div>
			<div className='business-form-documents-description'>
				Once the following documents are signed, you'll be
				ready to get staerted
			</div>
			<div className='pdf-upload-section'>
				<div className='select-pdf'>
					Electronically sign the agreement(s)
				</div>
				<button
					onClick={() =>
						alert('Thanks for uploading documents')
					}
					className='upload-selected-pdf'>
					+
				</button>
			</div>
		</div>
	);
};

export default BusinessForm;
