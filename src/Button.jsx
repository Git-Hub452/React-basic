import React from 'react'
import propTypes from 'prop-types'
const Button = (props ) => {
  console.log(props)
  return (
    <div>
        <button>{props.textInsideButton}</button>
            </div>
  )
}
Button.propTypes ={
  textInsideButton : propTypes.string
}

export default Button