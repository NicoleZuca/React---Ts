import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <>
        <span>Milisegundos { milisegundos }</span>

        <br/>

        <button className="btn btn-outline-success" //se incrementa cada segundo
                onClick={ () => setMilisegundos(1000)}> 
            1000
        </button>

        <button className="btn btn-outline-success" //se incrementa cada 2 segundos
                onClick={ () => setMilisegundos(2000)}>
            2000
        </button>

        <Timer milisegundos={milisegundos}/>
    </>
  )
}
