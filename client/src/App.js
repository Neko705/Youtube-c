import './App.css';
import Allrouters from './components/Allrouters';
import Drawersidebar from './components/LeftSidebar/drawersidebar';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Drawersidebar/>
      <Allrouters />
    </Router>
  );
}

export default App;
