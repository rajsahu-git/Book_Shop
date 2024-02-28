import Books from "./components/Books";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="App">
      <Header />
      <Books></Books>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
