import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    beneficiaries: [],
    status: 'idle',
    error: null,
};

const beneficiariesSlice = createSlice({
    name: 'beneficiaries',
    initialState,
    reducers: {
        addBeneficiary: (state, action) => {
            state.beneficiaries.push(action.payload);
        },
        editBeneficiary: (state, action) => {
            const { id, updatedDetails } = action.payload;
            const index = state.beneficiaries.findIndex(b => b.id === id);
            if (index !== -1) {
                state.beneficiaries[index] = updatedDetails;
            }
        },
        removeBeneficiary: (state, action) => {
            state.beneficiaries = state.beneficiaries.filter(b => b.id !== action.payload);
        },
    },
});

export const { addBeneficiary, editBeneficiary, removeBeneficiary } = beneficiariesSlice.actions;
export default beneficiariesSlice.reducer;
