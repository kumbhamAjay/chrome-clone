import React from 'react';
import './App.css';
import Nav from './Components/nav';
import Page1 from './Pages/Page1';
import Footer from './Components/Footer';
import Page2 from './Pages/Page2';
import Page3 from './Pages/PAge3';
import Page4 from './Pages/Page4';
import Questions from './Pages/Questions';
import Experience from './Pages/Experience';
import GoogleAi from './Pages/GoogleAi';



function App() {
  return (
    <div className="App">
      <Page1/>
      <Page2/>
      <Page3/>
      {/* <Page4/> */}
      <Experience/>
      <GoogleAi/>
      <Questions/>
      <Footer/>
     
    </div>
  );
}

export default App;
