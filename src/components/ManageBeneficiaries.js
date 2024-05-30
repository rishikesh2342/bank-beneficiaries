// src/components/ManageBeneficiaries.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBeneficiary } from '../store/beneficiariesSlice';

const ManageBeneficiaries = () => {
    const beneficiaries = useSelector(state => state.beneficiaries.beneficiaries);
    console.log("beneficiaries", beneficiaries)
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to remove this beneficiary?')) {
            dispatch(removeBeneficiary(id));
        }
    };

    return (
        <div>
            <h1>Manage Beneficiaries</h1>
            <Link to="/manage-beneficiaries/add">Add New Beneficiary</Link>
            <ul>
                {beneficiaries.map(b => (
                    <li key={b.id}>
                        <Link to={`/manage-beneficiaries/view/${b.id}`}>{b.fullName}</Link>
                        <button onClick={() => handleRemove(b.id)}>Remove</button>
                        <Link to={`/manage-beneficiaries/edit/${b.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageBeneficiaries;
