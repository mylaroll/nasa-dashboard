function Card({title, image, description, extraInfo,loading, error}){
    return (

        <section className= "card">
            {loading ? "Data is loading" :
                error ? "Difficulties loading data" :
                    <>
                    <h2>{title}</h2>
                    <img src = {image} alt={"Image unavailable"}></img>
                    <p>{description}</p>
                    {extraInfo && (<p>{extraInfo}</p>)}
                    </>
                }
        </section>
    )
}
export default Card;
