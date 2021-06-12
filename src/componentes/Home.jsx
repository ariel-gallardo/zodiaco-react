import { HomeElemento } from "./HomeElemento"

export const Home = (props) => {

    return <div className="d-flex flex-wrap col-lg-10 mx-auto">
                {
                    props.zodiacos.map(z => {
                        return <HomeElemento key={String(z.id)} signo={z.signo} id={z.id} elemento={z.elemento} imagen={z.imagen} simbolo={z.simbolo} descripcion={z.descripcion} meses={z.meses} />
                    })
                }
            </div>
}