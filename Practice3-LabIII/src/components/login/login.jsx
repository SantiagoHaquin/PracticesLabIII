import React, { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);

    if (inputValue.includes("o") || inputValue.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const clickHandler = () => {
    if (!userName) {
      alert("Ingrese un nombre de usuario!");
    } else if (userName.includes("o") || userName.includes("O")) {
        alert("Usuario inválido para registrarse");
    }else {
      alert("¡Usuario registrado correctamente!");
      setUserName(""); 
    }
  };

  return (
    <>
      <input type="text" value={userName} onChange={handleInputChange} />
      <button onClick={clickHandler}>Registrarse</button>
      <p>{userName}</p>
    </>
  );
};

export default Login;