import "./App.css";
import Header from "../src/components/Header.jsx";
import ReviewsList from "../src/components/ReviewsList.jsx";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ReviewsList />
    </div>
  );
}

export default App;
