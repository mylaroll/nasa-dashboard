function Card({title, mediaType, media, description, extraInfo,loading, error}){
    return (

        <section className= "card">
            {loading ? "Data is loading" :
                error ? "Difficulties loading data" :
                    <>
                        <h2>{title}</h2>
                        {mediaType === "video" ?
                            <video controls width="320" autoPlay muted>
                                <source src={media} type="video/mp4"/>
                                Video not supported.
                            </video>:
                            <img src={media} alt={"Image unavailable"}></img>
                        }
                        <p>{description}</p>
                        {extraInfo && (<p>{extraInfo}</p>)}
                    </>
                }
        </section>
    )
}
export default Card;
