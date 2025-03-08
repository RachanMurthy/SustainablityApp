import React, { useEffect, useState } from "react";
import { getActions, createAction, updateAction, deleteAction } from "../../api/actionsApi";
import "./Dashboard.css"; // Import styles

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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await updateAction(form.id, form);
        } else {
            await createAction(form);
        }
        setForm({ action: "", date: "", points: 0, id: null });
        fetchActions();
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
            <div className="dashboard-header">
                <h2>Dashboard</h2>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" name="action" value={form.action} onChange={handleChange} placeholder="Action" required />
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
                <input type="number" name="points" value={form.points} onChange={handleChange} required />
                <button type="submit">{form.id ? "Update" : "Add"}</button>
            </form>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Date</th>
                            <th>Points</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actions.map((item) => (
                            <tr key={item.id}>
                                <td>{item.action}</td>
                                <td>{item.date}</td>
                                <td>{item.points}</td>
                                <td className="action-buttons">
                                    <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
