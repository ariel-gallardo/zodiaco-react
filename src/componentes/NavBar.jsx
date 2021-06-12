import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

export const NavBar = (props) => {
    
    const cambiarDatos = (e) => {
        let num = Number(e.target.value)
        if(num > 0){
            props.cargarDatos(num)
            console.log('Se cambiaron')
        }else{
            props.cargarDatos()
        }     
    }

    return <nav className="d-flex justify-content-center py-lg-3 bg-dark">
        <Link to="/" className="mx-lg-3 nav-link text-white">Home</Link>
        <Link to="/agrupados" className="mx-lg-3 nav-link text-white">Agrupados por Elemento</Link>
        <select className="mx-lg-3" onChange={cambiarDatos}>
            <option value="0" default>-Seleccione un mes-</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
        </select>
    </nav>
}