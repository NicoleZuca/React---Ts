import { useReducer } from "react";

const initialState = {
    contador: 10,
}

//acciones que va a recibir el reducer
type ActionType = 
| { type: 'incrementar' } 
| { type: 'decrementar' } //indica por medio de | que sea la acción incrementar o la acción decrementar
| { type: 'custom', payload: number }; //payload es el argumento en el que viene la accón

const contadorReducer = ( state: typeof initialState, action: ActionType ) => {
    
    switch (action.type){
        case 'incrementar':
            return{
                ...state, //esto extrae todo lo que tenga el state y lo esparce creando por decirlo asi una copia que no mantiene la referencia, es decir crea una misma variable con el mismo valor del state pero no apunta al mismo lugar de memoria
                contador: state.contador + 1
            }
        case 'decrementar':
            return{
                ...state,
                contador: state.contador -1
            }
        case 'custom':
            return{
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
    return state;
}

export const ContadorRed = () => {

    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState) //el dispatch es una función que va a ser utilizada para disparar acciones de tipo actionType
    //

    return (
    <>
        <h2>Contador: {contador}</h2>
        <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'incrementar'})}> {/*se hace el dispatch de la acción incrementar, entonces se va a ejecutar el reducer, recibe el actionType incrementar, entonces va a regresar un nuevo state en el cuál se va a incrementar el contador en 1*/}
            +1
        </button>
        <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'decrementar'})}>
            -1
        </button>
        <button className="btn btn-outline-danger"
                onClick={ () => dispatch({ type: 'custom', payload: 100})}>
            100
        </button>
    </>
  )
}
