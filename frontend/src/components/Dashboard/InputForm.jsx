import React from "react";

const InputForm = ({ form, handleFormSubmit, handleInputChange }) => {
  return (
    <form className="input-form" onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        name="action" 
        value={form.action} 
        onChange={handleInputChange} 
        placeholder="Action" 
        required 
      />
      <input 
        type="date" 
        name="date" 
        value={form.date} 
        onChange={handleInputChange} 
        required 
      />
      <input 
        type="number" 
        name="points" 
        value={form.points} 
        onChange={handleInputChange} 
        required 
      />
      <button type="submit">{form.id ? "Update" : "Add"}</button>
    </form>
  );
};

export default InputForm;
