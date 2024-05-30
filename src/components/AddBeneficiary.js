// src/components/AddBeneficiary.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBeneficiary } from '../store/beneficiariesSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBeneficiary = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newBeneficiary = { id: uuidv4(), ...data };
    dispatch(addBeneficiary(newBeneficiary));
   navigate('/manage-beneficiaries');
  };

  return (
    <div>
      <h1>Add New Beneficiary</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full Name</label>
          <input {...register('fullName', { required: true })} />
          {errors.fullName && <p>This field is required</p>}
        </div>
        <div>
          <label>Address</label>
          <input {...register('address', { required: true })} />
          {errors.address && <p>This field is required</p>}
        </div>
        <div>
          <label>Country</label>
          <select {...register('country', { required: true })}>
            <option value="">Select...</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>
          {errors.country && <p>This field is required</p>}
        </div>
        <div>
          <label>Pincode</label>
          <input {...register('pincode', { required: true })} />
          {errors.pincode && <p>This field is required</p>}
        </div>
        <button type="submit">Add Beneficiary</button>
      </form>
    </div>
  );
};

export default AddBeneficiary;
