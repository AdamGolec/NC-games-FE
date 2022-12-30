import "./App.css";
import { useState } from "react";
import Header from "../src/components/Header.jsx";
import ReviewsList from "../src/components/ReviewsList.jsx";
import Nav from "./components/Nav";
import Review from "./components/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterOrderBy, setFilterOrderBy] = useState('desc');
  const [filterSortBy, setFilterSortBy] = useState('votes');

console.log(filterSortBy);
console.log(filterOrderBy);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav filterCategory={filterCategory} setFilterCategory={setFilterCategory} filterOrderBy={filterOrderBy} setFilterOrderBy={setFilterOrderBy} filterSortBy={filterSortBy} setFilterSortBy={setFilterSortBy}/>
        <Routes>
        <Route path="/" element={<ReviewsList filterCategory={filterCategory} setFilterCategory={setFilterCategory} filterOrderBy={filterOrderBy} setFilterOrderBy={setFilterOrderBy}filterSortBy={filterSortBy} setFilterSortBy={setFilterSortBy}/>}  />
        <Route path="/reviews" element={<ReviewsList filterCategory={filterCategory} setFilterCategory={setFilterCategory} filterOrderBy={filterOrderBy} setFilterOrderBy={setFilterOrderBy}filterSortBy={filterSortBy} setFilterSortBy={setFilterSortBy}/>} />

          <Route path="/reviews/:review_id" element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
