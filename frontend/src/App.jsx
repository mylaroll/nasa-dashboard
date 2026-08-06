import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoad] = useState(true);
    const cardsData = [
        {
            id:"1",
            title: (apodData && apodData.title) || "Astro Pic of the Day",
            image: (apodData && apodData.url) || "https://placehold.net/600x400.png",
            description: (apodData && apodData.explanation) || "NASA chosen image of the day.",
            extraInfo: (apodData && apodData.date) || "2/26/26"
        },
        {
            id: "2",
            title: "Exoplanets",
            image: "https://placeholder.com",
            description: "Different exoplanets that have been discovered."
        }
    ];
    useEffect(() => {
        async function getApodData(file) {
            let myObject = await fetch(file);
            let myData = await myObject.json();
            setApodData(myData);
            setLoad(false);
        }
        getApodData("https://api.nasa.gov/planetary/apod?api_key=Jusq3dHNj6XS0j3ypUVa00QLYHwM7wb48MpMvAG3")
    }, []);
  return (
      <>
          <Navbar />
          <Hero />
          <main>
            <h1>NASA Dashboard</h1>
            <p>Exploring space data with NASA APIs</p>
              <div className ="cardContainer">
                {cardsData.map((item) => (<Card key={item.id} title={item.title} image ={item.image} description={item.description} extraInfo={item.extraInfo}/>
                    ))}
            </div>
        </main>
      </>
  );
}

export default App;