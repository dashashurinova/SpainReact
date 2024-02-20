
import './App.css';
import Header from './sections/Header/Header';
import Intro from './sections/Intro/Intro';
import Benefits from './sections/Benefits/Benefits';
import PhotoGrid from './sections/PhotoGrid/PhotoGrid';
import Places from './sections/Places/Places';
import Motivation from './sections/Motivation/Motivation';
import Footer from './sections/Footer/Footer';
import React, { useEffect } from "react";

const Main = () => {useEffect(() => {document.title = "Spain travel on React"}, [])};

function App() {
  return (
    <div className="App">
      <Main />
      <Header/>
      <Intro/>
      <Benefits/>
      <PhotoGrid/>
      <Places/>
      <Motivation/>
      <Footer/>
    </div>
  );
}

export default App;
