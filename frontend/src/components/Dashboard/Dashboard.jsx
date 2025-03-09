import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ActionsTable from "./ActionsTable";
import { getActions, createAction, updateAction, deleteAction } from "../../api/actionsApi";
import "./Dashboard.css"; // Import updated styles

const Dashboard = () => {
  const [actions, setActions] = useState([]);
  const [form, setForm] = useState({ action: "", date: "", points: 0, id: null });

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    const data = await getActions();
    setActions(data);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateAction(form.id, form);
    } else {
      await createAction(form);
    }
    setForm({ action: "", date: "", points: 0, id: null });
    fetchActions();
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (item) => {
    setForm(item);
  };

  const handleDelete = async (id) => {
    await deleteAction(id);
    fetchActions();
  };

  return (
    <div className="dashboard-container">
      {/* Top row: Input Form */}
      <div className="input-section">
        <InputForm 
          form={form} 
          handleFormSubmit={handleFormSubmit} 
          handleInputChange={handleInputChange} 
        />
      </div>
      
      {/* Bottom row: Actions Table */}
      <div className="table-section">
        <ActionsTable 
          actions={actions} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
        />
      </div>
    </div>
  );
};

export default Dashboard;
