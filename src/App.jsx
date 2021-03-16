//con el siguiente comentario quitamos el warning de eval
/* eslint no-eval: 0 */

// importamos las librerias que necesitamos 
import React, { useState } from 'react'
import words from 'lodash.words'
// generación de la funcion del componente, para ello nos valemos de unas caracteristicas de ES6
//funcion flecha o arrow function, no se puede modificar por lo general se le pone App
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

//importamos el css para darle estilo, para ello indico donde está el archivo
import './App.css'



const App = () => {
    //useState es un componenete interno de React por eso se lo importa como esta en la primera linea
    //useState devuelve una variable  o valor y nos permite modificarlo
    
    //array destructuring
    //1er posicion "stack": valor( que inicialmente es el valor por defecto)
    //2da posicion "setStack": funcion que me va a permitir modificar el valor por defecto
    const [stack, setStack ] = useState("")

    const items = words(stack, /[^-^+^*^]+/g) // /[^-^+^*^]+/g esto es una exprecion regular o RegExp

    // Operador condicional terniario Es similar a un if 
    // (esverdadero) ? (resultadoPorVerdaero) : (resultadoPorfalso) 
    const value = items.length > 0 ? items[items.length-1] : "0"; // si items.length > 0 es verdadero retorna items[items.length-1] sino retorna 0
    console.log("Renderización de la App", value)
    return (
    //utilizamos main por ser el contenedor que tiene el cuerpo principal de nuestra app
    //con item 
    <main className='react-calculator'>
        <Result value={value}/> 
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`) // utilizamos template literals para poder concatenar con `${variable1}${variable2}`
        }} />
        <Functions 
            onContentClear={ clear => {
            console.log("Content Clear")
            setStack('')
            }}
            onDelete={ operation => {
                if (stack.length > 0){
                    console.log("onDelete")
                    const newStack = stack.substring(0, stack.length-1) //sirve para borrar la ultima posicion del array
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => {
                console.log("Equal:", equal)
                setStack(eval(stack)) //eval es una propiedad de JavaScript la cual retorna el resultado despues de analizar lo que tiene ej: (5+4) retorna el 9
            }}/>
    </main>)
}
// exportación
export default App