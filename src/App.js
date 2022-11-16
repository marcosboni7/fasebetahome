import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Landing from './components/Landing';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <Menu />
   <Landing/>
   <Depoimentos />
   <Footer />
    </div>
  );
}

export default App;
