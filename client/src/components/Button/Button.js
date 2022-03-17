import React from 'react'

const Button = ({ title, color, getLocationsByType }) => {
    const handleChangeDisplay = () => {
        getLocationsByType(title);
    }
     
  return (
    <button className="buttons__btn" style={{'backgroundColor': color}} onClick={handleChangeDisplay}>{title}</button>
  )
}

export default Button