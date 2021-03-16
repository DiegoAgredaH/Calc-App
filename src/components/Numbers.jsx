import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber) => {
    //var number = 0
    // Iterar desde botón 1 hasta 0 ( while, for , foreach ) no vamos 
    // a utilizar estos porque existe una funcion que nos ayuda con eso
    const renderButton = number => (
        <Button key={number} 
        text={number.toString()} 
        controladorClick= {onClickNumber} 
        />
    )
    // la funcion map nos sirve para tomar los elementos del array numers uno por uno.
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => 
    <section className="numbers">
        {
            //esto que esta entre llaves es codigo javaScript dentro de codigo jsx por eso se utiliza las {}
            renderButtons(onClickNumber)
        }
    </section>

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers 