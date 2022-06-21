import { useState } from 'react';

interface User {
    uid: string;
    name: string;
} //reglas que le podemos poner a los objetos


export const Usuario = () => {
  
    const [user, setUser] = useState<User>(); //internamente el useState va a manejar un User
  
    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Nicole Zúñiga'
        });
    }

    return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>

        <button
            onClick={ login }
            className='btn btn-outline-primary'>
            Login
        </button>

        {
            (!user) //si no existe el user va a mostrar el msj 
                ? <pre> No hay usuario </pre>
                //Una impresión del user porque no se puede imprimir directamente como un objeto
                : <pre> {JSON.stringify(user) }</pre> 
        }
    </div>
  )
}
