import { useEffect, useState } from "react"
import loadsh from 'lodash'
import _ from "lodash"

export const Agrupados = (props) => {

    const [elementos, setElementos] = useState([])

    useEffect(() => {

        let zGrupo = loadsh.groupBy(props.zodiacos, 'elemento');
        let array = []

        _.forIn(zGrupo, (lista, nombreGrupo) => {
            array.push(
            <tr key={nombreGrupo}>
                <td class="text-end">
                    {nombreGrupo}
                </td>
                <td>
                    <ul>
                        {lista.map(
                            signo => 
                                    {
                                        return <li>{signo.signo}</li>
                                    }
                            )
                        }
                    </ul>
                </td>
            </tr>)
        })

        setElementos(array)

    }, [props.zodiacos])

    return <div class="col-lg-2 mx-auto">
        <table class="text-white table">
            <thead>
                <tr>
                    <th class="text-end"><b>ELEMENTO</b></th>
                    <th><b>SIGNOS</b></th>
                </tr>
            </thead>
            <tbody>
                {
                    elementos
                }
            </tbody>
        </table>
    </div>
}