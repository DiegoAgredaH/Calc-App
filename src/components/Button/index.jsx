// este es antiguamente button.jsx 

import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

//componenete funcional
// type = button-long-text

const Button = ({ type,text, controladorClick }) =>(
    <button className={type} onClick= {() => controladorClick(text)}>
            <span>{ text }</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    controladorClick: PropTypes.func.isRequired
}
export default Button