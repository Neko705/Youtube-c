import './App.css';
import Allrouters from './components/Allrouters';
import Drawersidebar from './components/LeftSidebar/drawersidebar';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [toggleDrawersidebar, settoggleDrawersidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawersidebar.display==='none'){
      settoggleDrawersidebar({
        display:'flex'
      })
    }else{
      settoggleDrawersidebar({
        display:'none'
      })
    }
  }
  return (
    <Router>
      <Navbar
      toggleDrawer={toggleDrawer}
      />
      <Drawersidebar
      toggleDrawer={toggleDrawer}
      toggleDrawersidebar={toggleDrawersidebar}
      />
      <Allrouters />
    </Router>
  );
}

export default App;
