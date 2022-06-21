import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number
}

//recibimos la información de un componente padre, se la enviamos al hijo, estamos estableciendo el tipo de dato que va a recibir el componente hijo y lo utilizamos dentro del export
export const Timer = ({ milisegundos }: TimerArgs) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        ref.current && clearInterval(ref.current); //si ref.current existe entonces ejecuta esta función de limpieza
        ref.current = setInterval( () => setSegundos( s => s + 1 ), milisegundos); //función propia de js para hacer un intervalo de tiempo el cual recibe un callback y le indicamos que se ejecute esta intrucción cada 1000 segundos
    }, [milisegundos])

  return (
    <>
        <h4>Timer: <small>{ segundos }</small></h4>  
    </>
  )
}
