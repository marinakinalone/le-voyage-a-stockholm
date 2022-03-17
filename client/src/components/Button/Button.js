import React from 'react'

const Button = ({ title, color, getLocationsByType, getDescriptionByType }) => {
    const handleChangeDisplay = () => {
        getLocationsByType(title);
        getDescriptionByType(title);
    }
     
  return (
    <button className="buttons__btn" style={{'backgroundColor': color}} onClick={handleChangeDisplay}>{title}</button>
  )
}

export default Button