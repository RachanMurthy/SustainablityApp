import React from "react";

// This React component renders a form for inputting or updating action details, including action name, date, and points,
// with a submit button that changes text based on whether an action is being added or updated.

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
