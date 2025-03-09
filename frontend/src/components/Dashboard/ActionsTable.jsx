import React from "react";

// This is a React component that renders a table displaying a list of actions with options
// to edit or delete each action.
const ActionsTable = ({ actions, handleEdit, handleDelete }) => {
  return (
    <div className="actions-table">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Date</th>
            <th>Points</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((item) => (
            <tr key={item.id}>
              <td>{item.action}</td>
              <td>{item.date}</td>
              <td>{item.points}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  EDIT
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionsTable;
