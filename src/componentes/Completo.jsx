import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import './completo.css'

export const Completo = (props) => {

    let [elemento, setElemento] = useState({})
    let location = useLocation()

    useEffect(()=>{
        if(location.state){
            setElemento({...location.state})
        }
    },[location.state, props.Meses])

    return<div className="d-flex align-self-center col-lg-8 border p-3 bg-dark bg-gradient text-white">
        <span>
            <img className="img-thumbnail imagen" src={elemento.imagen} alt={elemento.signo}/>
            <h2 className="mt-lg-5">
                SIGNO: <b>{elemento.signo}</b>
            </h2>
        </span>
        <span className="mx-lg-3">
            <div className="d-flex">
                <p>Elemento:</p>
                <p className="mx-lg-3"><b>{elemento.elemento}</b></p>
            </div>
            <div className="d-flex">
                <p>Simbolo:</p>
                <p className="mx-lg-3"><b>{elemento.simbolo}</b></p>
            </div>
            <div className="d-flex">
                <p className="m-0">Meses:</p>
                {
                    elemento.meses ?
                    <ul className="mt-lg-3">
                        <li className="m-0"><b>{props.Meses[location.state.meses[0]]}</b></li>
                        <li className="m-0"><b>{props.Meses[location.state.meses[1]]}</b></li>
                    </ul>
                    :
                    <ul></ul>
                }
            </div>
            <div>
                <p>Descripción:</p>
                <p className="mx-lg-5"><b>{elemento.descripcion}</b></p>
            </div>
        </span>
    </div>
}