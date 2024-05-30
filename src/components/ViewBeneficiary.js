// src/components/ViewBeneficiary.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.beneficiaries.find(b => b.id === id));

  if (!beneficiary) {
    return <p>Beneficiary not found</p>;
  }

  return (
    <div>
      <h1>View Beneficiary</h1>
      <p>Full Name: {beneficiary.fullName}</p>
      <p>Address: {beneficiary.address}</p>
      <p>Country: {beneficiary.country}</p>
      <p>Pincode: {beneficiary.pincode}</p>
    </div>
  );
};

export default ViewBeneficiary;
