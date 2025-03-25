import React from 'react'
import Header from './components/Header.jsx' // Header component
import Card from './components/card.jsx' // Review component
import Footer from "./components/footer.jsx" // Footer component


function App() {
  return (
    <>
      <Header/>
      <section id="films">
        <Card/>
      </section>
      <Footer/>
    </>
  );
}

export default App;
