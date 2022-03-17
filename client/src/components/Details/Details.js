import React from 'react'

const Details = ({typesInfo}) => {
  return (
    <section className="details">
        <p className="details_description">{typesInfo[4].description}</p>
        <p className="details__links">créé par <a href="https://kinalone.dev">mks</a> | <a href="https://github.com/marinakinalone">GitHub</a></p>
    </section>
  )
}

export default Details