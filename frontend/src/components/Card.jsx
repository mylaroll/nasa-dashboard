function Card({title, image, description, extraInfo}){
    return (
        <section className= "card">
            <h2>{title}</h2>
            <img src = {image} alt={"Image unavailable"}></img>
            <p>{description}</p>
            {extraInfo && (<p>{extraInfo}</p>)}
        </section>
    )
}
export default Card;
