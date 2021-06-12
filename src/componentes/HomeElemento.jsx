import { useHistory } from "react-router"

export const HomeElemento = (props) => {

    const history = useHistory()

    const verDetalle = () => {
        history.push(`/elemento/${props.id}`,{...props})
    }


    return <div className="text-center p-1 m-1 card bg-secondary align-self-between bg-gradient">
        <img className="img-responsive img-thumbnail" src={props.imagen} alt={props.signo} />
        <div className="my-1">
            <p className="m-0">SIGNO</p>
            <b className="m-0">{props.signo}</b>
        </div>
        <button className="btn btn-outline-dark m-3" onClick={verDetalle}><b>VER DETALLE</b></button>
    </div>
}