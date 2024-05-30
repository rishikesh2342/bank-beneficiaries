// src/components/EditBeneficiary.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editBeneficiary } from '../store/beneficiariesSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.beneficiaries.find(b => b.id === id));
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: beneficiary,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(editBeneficiary({ id, updatedDetails: data }));
   navigate('/manage-beneficiaries');
  };

  return (
    <div>
      <h1>Edit Beneficiary</h1>
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
        <button type="submit">Update Beneficiary</button>
      </form>
    </div>
  );
};

export default EditBeneficiary;
