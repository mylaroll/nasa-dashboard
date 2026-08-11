import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {getData} from "./hooks/getData";

function App() {
    const apodData = getData("https://api.nasa.gov/planetary/apod?api_key=Jusq3dHNj6XS0j3ypUVa00QLYHwM7wb48MpMvAG3");
    const epicData = getData("https://api.nasa.gov/planetary/apod?api_key=Jusq3dHNj6XS0j3ypUVa00QLYHwM7wb48MpMvAG3");
    const cardsData = [
        {
            id:"1",
            title: (apodData && apodData.title) || "Astro Pic of the Day",
            image: (apodData && apodData.url) || "https://placehold.net/600x400.png",
            description: (apodData && apodData.explanation) || "NASA chosen image of the day.",
            extraInfo: (apodData && apodData.date) || "2/26/26"
        },
        {
            id:"2",
            title: (epicData && epicData.title) || "EPIC",
            image: (epicData && epicData.url) || "https://placehold.net/600x400.png",
            description: (epicData && epicData.caption) || "View unique perspectives of astronomical events.",
            extraInfo: (epicData && epicData.date) || "2/26/26"
        }
    ];
  return (
      <>
          <Navbar />
          <Hero />
          <main>
            <h1>NASA Dashboard</h1>
            <p>Exploring space data with NASA APIs</p>
              <div className ="cardContainer">
                  {cardsData.map((item) => (
                  <Card
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      extra={item.extra}
                      loading={loading}
                      error={error}
                  />
                  ))}
              </div>
        </main>
      </>
  );
}

export default App;