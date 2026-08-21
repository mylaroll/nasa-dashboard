import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {useData} from "./hooks/useData.jsx";

function App() {
    const getDaily = (arr) => {
        if (!arr?.length) return null;
        const ms = 24 * 60 * 60 * 1000;
        const daysPassed = Math.floor(Date.now() / ms);
        const index = daysPassed % arr.length;
        return arr[index];
    }
    const {data: apodData, loading:apodLoading, error:apodError} = useData("http://localhost:3000/api/apod");
    const {data:epicData, loading:epicLoading, error:epicError} = useData("http://localhost:3000/api/epic");
    const epic = epicData ? getDaily(epicData) : null;
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
            title: apodData?.title || "Astro Pic of the Day",
            mediaType: apodData?.media_type,
            media: apodData?.url || "https://placehold.net/600x400.png",
            description: apodData?.explanation || "NASA chosen image of the day.",
            extraInfo: apodData?.date || "2/26/26",
            loading:apodLoading,
            error: apodError
        },
        {
            id:"2",
            title: epic?.image || "EPIC",
            mediaType: "image",
            media: epicImage || "https://placehold.net/600x400.png",
            description: epic?.caption || "View unique perspectives of astronomical events.",
            extraInfo: epic?.date || "2/26/26",
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