const Details = ({ content }) => {
  return (
    <section className="details">
        {(content[0].name || content[0].category === "TOUT VOIR") ? (<h2 className="details__title">{content[0].name}</h2>) : (<h2 className="details__title">{content[0].category}</h2>)}
        <p className="details__description">{content[0].description}</p>
        <p className="details__links">créé par <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">mks</a> | <a href="https://github.com/marinakinalone" target="_blank" rel="noopener noreferrer">github</a></p>
    </section>
  )
}

export default Details