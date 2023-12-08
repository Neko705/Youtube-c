import './App.css';
import Allrouters from './components/Allrouters';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Allrouters />
    </Router>
  );
}

export default App;
