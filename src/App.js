import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from "axios"
import { useEffect, useMemo, useState } from "react";
import { NavBar } from "./componentes/NavBar"
import { Home } from './componentes/Home'
import { Agrupados } from "./componentes/Agrupados"
import { Completo } from './componentes/Completo';
import './style.css'


export const App = () => {

  const [zodiacos, setZodiacos] = useState([])

  const Meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];


  const cargarDatos = async (num) => {
    
    try {

      let data = await axios.get('http://localhost:3000/test/tb/zodiaco.json');
      data = data.data
        if(num === undefined){
            setZodiacos(data)
        }else{
            setZodiacos(data.filter(d => {return d.meses[0] === num || d.meses[1] === num}))
        }
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    if(zodiacos.length === 0){
      cargarDatos()
    }
  }, [zodiacos.length])

  return <div className="container">
    <BrowserRouter>
      <NavBar cargarDatos={cargarDatos}  zodiacos={zodiacos} />
      <div className="d-flex flex-column container py-lg-5">
        <Switch>
          <Route exact path="/" component={() => <Home zodiacos={zodiacos} />} />
          <Route path="/agrupados" component={() => <Agrupados zodiacos={zodiacos} />} />
          <Route path="/elemento/:id" component={() => <Completo Meses={Meses} />} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
}