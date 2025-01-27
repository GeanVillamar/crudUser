// Extraer las funciones necesarias de React
const { useState } = React;
const { render } = ReactDOM;

// Definir el componente PopupExample
const PopupExample = () => {
  // Estado para controlar la visibilidad del popup
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Función para abrir el popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  // Retornar la estructura JSX del componente
  return (
    <div>
      {/* Botón para abrir el popup */}
      <button onClick={openPopup}>Abrir Popup</button>
      {/* Popup: se muestra si isPopupOpen es true */}
      {isPopupOpen && (
        <div className="ventana-popup">
          <div className="contenido-popup">
            <p>Contenido del popup</p>
            <p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" />
            </p>
            {/* Botón para cerrar el popup */}
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Renderizar el componente en el elemento con el id "root"
render(<PopupExample />, document.getElementById("contenedor-popup"));
