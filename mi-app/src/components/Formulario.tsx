//import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
        email: 'nicole@gmail.com',
        nombre: 'Nicole Zúñiga',
        edad: 35
    }); //está exportando el valor del formulario y la función para cambiar el formulario

    //const {email, nombre, edad} = formulario;

    //todo esto es la función de arriba simplificada y la función de arriba (const { formulario, handleChange } = useForm) la podemos reutilizar en otros componentes sin necesidad de copiar todo este código
    /*const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    const handleChange = ( {target}: ChangeEvent<HTMLInputElement>) => { //se llama esta función cada vez que el input cambia (el en change event seleccionamos el elemento que queremos cmabiar)
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [ name ]: value  
        })
    }*/

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={ handleChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={ handleChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number"
                        className="form-control"
                        name="edad"
                        value={edad}
                        onChange={ handleChange }
                />
            </div>

            <pre> { JSON.stringify(formulario)} </pre>

        </form>
    )
}