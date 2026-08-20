import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {useData} from "./hooks/useData.jsx";

function App() {
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const {data: apodData, loading:apodLoading, error:apodError} = useData("http://localhost:3000/api/apod");
    const {data:epicData, loading:epicLoading, error:epicError} = useData("http://localhost:3000/api/epic");
    const epic = epicData ? getRandom(epicData) : null;
    const getImage = (epic) => {
        if (!epic) return null;
        const date = epic.date.split(" ")[0];
        const [year, month,day] = date.split("-");
        return `https://epic.gsfc.nasa.gov/archive/enhanced/${year}/${month}/${day}/png/${epic.image}.png`
    }
    const epicImage = getImage(epic);
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
            title: (epic && epic.image) || "EPIC",
            mediaType: "pic",
            media: (epicImage) || "https://placehold.net/600x400.png",
            description: (epic && epic.caption) || "View unique perspectives of astronomical events.",
            extraInfo: (epic && epic.date) || "2/26/26",
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