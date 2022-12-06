import "./App.css";
import Header from "../src/components/Header.jsx";
import ReviewsList from "../src/components/ReviewsList.jsx";
import Nav from "./components/Nav";
import Review from "./components/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/reviews" element={<ReviewsList />} />

          <Route path="/reviews/:review_id" element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
