import React from 'react';
import './App.css';
import Header from './Components/Header';
import './Components/Header.css'
import './Components/Left_card';
import './Components/Left_card.css';
import Left_card from './Components/Left_card';
import Right_card from './Components/Right_card';
import './Components/Right_card.css';
import Main_card from './Components/Main_card';
import './Components/Main_card.css';
import './Components/Story_card.css'




function App() {
  return (
    <div className="App">
      <Header />
      <Left_card />
      <Main_card />
      <Right_card />
    </div>
  );
}




export default App;