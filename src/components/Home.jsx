import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ModalUpdate from "./ModalUpdate";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  // Function Models
  const openPopup = (user) => {
    setSelectedUser(user);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedUser(null);
  };

  //function to create new user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", username: "", email: "" });
  };

  // Function to update user
  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    closePopup();
  };

  // Function to delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button id="button-update" onClick={() => openPopup(row)}>
            Update
          </button>
          <button id="button-delete" onClick={() => handleDeleteUser(row.id)}>
            Delete
          </button>
        </>
      ),
    },
  ];

  {
    users.map((user) => (
      <div className="user-card" key={user.id}>
        {user.name}
        {user.username}
        {user.email}
      </div>
    ));
  }

  return (
    <div className="container-home">
      <div className="container-formCreate">
        <h4>Agregar usuarios</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newUser.name}
            placeholder="name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>

      <div className="container-table">
        <DataTable
          title="Usuarios"
          columns={columns}
          data={users}
          pagination
          paginationPerPage={4}
          onSelectedRowsChange={(data) => console.log(data)}
        />
        {isPopupOpen && (
          <ModalUpdate
            user={selectedUser}
            onClose={closePopup}
            onUpdate={handleUpdateUser}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
