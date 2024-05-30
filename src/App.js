// src/App.js
import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route, Link
} from "react-router-dom";
import ManageBeneficiaries from './components/ManageBeneficiaries';
import AddBeneficiary from './components/AddBeneficiary';
import EditBeneficiary from './components/EditBeneficiary';
import ViewBeneficiary from './components/ViewBeneficiary';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/manage-beneficiaries">Manage Beneficiaries</Link>
      </nav>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="//manage-beneficiaries" element={<ManageBeneficiaries />} />
          <Route path="//manage-beneficiaries/add" element={<AddBeneficiary />} />
          <Route path="//manage-beneficiaries/edit/:id" element={<EditBeneficiary />} />
          <Route path="//manage-beneficiaries/view/:id" element={<ViewBeneficiary />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
