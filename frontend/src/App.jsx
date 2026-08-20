import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {useData} from "./hooks/useData.jsx";

function App() {
    const {data: apodData, loading:apodLoading, error:apodError} = useData("https://api.nasa.gov/planetary/apod?api_key=Jusq3dHNj6XS0j3ypUVa00QLYHwM7wb48MpMvAG3");
    const {data:epicData, loading:epicLoading, error:epicError} = useData();
    const cardsData = [
        {
            id:"1",
            title: (apodData && apodData.title) || "Astro Pic of the Day",
            mediaType: (apodData && apodData.media_type),
            media: (apodData && apodData.url) || "https://placehold.net/600x400.png",
            description: (apodData && apodData.explanation) || "NASA chosen image of the day.",
            extraInfo: (apodData && apodData.date) || "2/26/26",
            loading:apodLoading,
            error: apodError
        },
        {
            id:"2",
            title: (epicData && epicData.title) || "EPIC",
            image: (epicData && epicData.url) || "https://placehold.net/600x400.png",
            description: (epicData && epicData.caption) || "View unique perspectives of astronomical events.",
            extraInfo: (epicData && epicData.date) || "2/26/26",
            loading: epicLoading,
            error: epicError
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
                      mediaType={item.mediaType}
                      media={item.media}
                      description={item.description}
                      extraInfo={item.extraInfo}
                      loading={item.loading}
                      error={item.error}
                  />
                  ))}
              </div>
        </main>
      </>
  );
}

export default App;