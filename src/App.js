import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import ImageResults from './components/image-results/ImageResults'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
