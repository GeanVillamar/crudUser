import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";

function Home() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", username: "", email: "" });
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "nombre usuario",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
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
      <div className="form-container">
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
          columns={columns}
          data={users}
          selectableRows
          pagination
          paginationPerPage={4}
          onSelectedRowsChange={(data) => console.log(data)}
        />
      </div>
    </div>
  );
}
export default Home;
