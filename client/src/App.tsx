import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import SearchResultsPage from "./components/SearchResultPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Uncomment the line below if you want to use the Card component */}
        {/* <Route path="/user" element={<Card />} /> */}
        <Route path="/search/:query" element={<SearchResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
