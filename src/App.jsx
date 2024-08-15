import { useState } from "react";
import Card from "./Components/Card";
import AppStyles from "./Styles/App.module.css";

function App() {
  const [showCard, setShowCard] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    lastName: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
      setCustomer({...customer, [e.target.name]: e.target.value});
      setError(false);
      setShowCard(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(customer.name.trim().length >= 3 && customer.lastName.trim().length >= 6) 
        {setShowCard(true); setError(false);}
      else {setError(true); setShowCard(false);}
  }

  return (
    <div className={AppStyles.container}>
      <h1 className={AppStyles.title}>Carga de estudiantes</h1>
      <div>
        <form onSubmit={handleSubmit} className={AppStyles.form}>
        <h3>Ingresa tus datos</h3>
        <input type="text" value={customer.name} name="name" onChange={handleChange} placeholder="Nombre"/>
        <input type="text" value={customer.lastName} name="lastName" onChange={handleChange} placeholder="Apellido"/>
        <button>Enviar</button>
        </form>
        {error && <h4 style={{color: "red", marginTop: "10px"}}>Por favor chequea que la información sea correcta</h4>}
      </div>
      {showCard && <Card customer={customer}/>}
    </div>
  )
}

export default App
