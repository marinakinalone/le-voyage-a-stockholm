const Details = ({ content }) => {
  return (
    <section className="details">
        {content[0].name ? (<h3 className="details__title">{content[0].name}</h3>) : (<></>)}
        <p className="details_description">{content[0].description}</p>
        <p className="details__links">créé par <a href="https://kinalone.dev">mks</a> | <a href="https://github.com/marinakinalone">GitHub</a></p>
    </section>
  )
}

export default Details