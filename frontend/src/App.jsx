import Navbar from "./components/Navbar";
function App() {
  return (
      <>
          <Navbar />
          <main>
            <h1>NASA Dashboard</h1>
            <p>Exploring space data with NASA APIs</p>
            <section>
                <h2> Astro Pic of the Day</h2>
                <p>To Be Found</p>
            </section>
            <section>
                <h2> Mars Rovers</h2>
                <p> To Be Found</p>
            </section>
        </main>
      </>
  );
}

export default App;