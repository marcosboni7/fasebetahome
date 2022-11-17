import React from 'react';
import './App.css';

import Menu from './components/Menu';
import Landing from './components/Landing';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import Produtos from './components/Produtos';

function App() {
  return (
    <div className="App">
   <Menu />
   <Landing/>
   <Depoimentos />
   <Footer />
   <Produtos />
    </div>
  );
}

export default App;
