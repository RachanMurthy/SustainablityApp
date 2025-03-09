import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/actions/";

// GET
// Get all actions
export const getActions = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching actions:", error);
        return [];
    }
};

// POST
// Create a new action
export const createAction = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.error("Error creating action:", error);
    }
};
// PUT
// Update an existing action
export const updateAction = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating action:", error);
    }
};

// DELETE
// Delete an action
export const deleteAction = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error("Error deleting action:", error);
    }
};
