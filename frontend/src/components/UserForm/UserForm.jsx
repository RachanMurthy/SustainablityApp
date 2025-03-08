import { useState } from "react";
import "./UserForm.css"; 

function UserForm() {
  const [formData, setFormData] = useState({
    action: "",
    date: "",
    points: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form inputs
  const validate = () => {
    let newErrors = {};
    
    if (formData.action.length > 255) {
      newErrors.action = "Action must be less than 255 characters";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (formData.points === "" || isNaN(formData.points)) {
      newErrors.points = "Points must be a valid number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ action: "", date: "", points: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Action:</label>
          <input
            type="text"
            name="action"
            value={formData.action}
            onChange={handleChange}
            maxLength="255"
            required
          />
          {errors.action && <p className="error">{errors.action}</p>}
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label>Points:</label>
          <input
            type="number"
            name="points"
            value={formData.points}
            onChange={handleChange}
            required
          />
          {errors.points && <p className="error">{errors.points}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
