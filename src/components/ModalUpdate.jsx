import React, { useState, useEffect } from "react";

const ModalUpdate = ({ user, onClose, onUpdate }) => {
  const [updateUser, setUpdateUser] = useState(user);

  useEffect(() => {
    setUpdateUser(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updateUser);
  };

  return (
    <div className="ventana-popup">
      <div className="contenido-popup">
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={updateUser.name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            value={updateUser.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={updateUser.email}
            placeholder="Email"
            onChange={handleInputChange}
          />
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
