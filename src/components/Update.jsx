function Update() {
  const [updateUser, setUpdateUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  function handleInputChange(event) {
    setUpdateUser({
      ...updateUser,
      [event.target.name]: event.target.value,
    });
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(updateUser);
  };

  return (
    <div>
      <h1>Update</h1>
      {/* Actualizar usuario Formulario */}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="id"
          value={updateUser.id}
          placeholder="ID"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          value={updateUser.name}
          placeholder="Nombre"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          value={updateUser.username}
          placeholder="Nombre de usuario"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={updateUser.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
export default Update;
