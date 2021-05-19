import React, { useState } from 'react';
import './App.css';

function App() {



  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(preveContador => preveContador + 1);
    setContador(preveContador => preveContador + 1);
  }

  const restar = () => {
    setContador(preveContador => preveContador - 1);
    setContador(preveContador => preveContador - 1);
  }




  return (
    <div className="App">
      <button className="button" onClick={sumar}>Sumar</button>
      <div className="contador">{contador}</div>
      <button className="button" onClick={restar}>Restar</button>
    </div>
  );
}

export default App;
