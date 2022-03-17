import React from 'react'
import { Button } from '../index';

const ButtonSet = ({ typesInfo }) => {
  return (
      <section className="buttons">
          {typesInfo.map(type => {
            return(<Button key={type.type } title={type.type} color={type.colors.default} />)
          })}
      </section>
  )
}

export default ButtonSet