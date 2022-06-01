import React from 'react'

const Button = ({ title, color, getLocationsByType, getDescriptionByType, setActiveMarker }) => {
    const handleChangeDisplay = () => {
        getLocationsByType(title);
        getDescriptionByType(title);
        setActiveMarker(false);
    }
     
  return (
    <button className="buttons__btn" style={{'backgroundColor': color}} onClick={handleChangeDisplay}>{title}</button>
  )
}

export default Button