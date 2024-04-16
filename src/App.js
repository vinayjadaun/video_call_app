import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from "./pages/home";
import Roompage from "./pages/room";
// import dotenv from "dotenv";
// dotenv.config()
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/room/:roomId" element={<Roompage/>}/>
    </Routes>
  );
}

export default App;
