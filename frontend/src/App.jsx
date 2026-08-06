import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const cardsData = [
    {
        id:"1",
        title: "Astro Pic of the Day",
        image: "https://placeholder.com",
        description: "NASA chosen image of the day."
    },
    {
        id: "2",
        title: "Mars Rovers",
        image: "https://placeholder.com",
        description: "Different rovers that have been sent to Mars."
    }
];

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <main>
            <h1>NASA Dashboard</h1>
            <p>Exploring space data with NASA APIs</p>
              <div className ="cardContainer">
                {cardsData.map((item) => (<Card key={item.id} title={item.title} image ={item.image} description={item.description}/>
                    ))}
            </div>
        </main>
      </>
  );
}

export default App;