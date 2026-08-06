function Card({title, image, description}){
    return (
        <section className= "card">
            <h2>{title}</h2>
            <img src = {image} alt={"Image unavailable"}></img>
            <p>{description}</p>
        </section>
    )
}
export default Card;
