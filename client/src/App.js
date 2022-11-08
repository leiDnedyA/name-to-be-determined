import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import Predictions from './pages/Predictions';
import {FaGithub} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <h1>Star System Data Predictor</h1>
      <p>Predict data about star systems based on basic information about the star!</p>
      <Routes>
        <Route path="/" element={<DataEntry/>}/>
        <Route path="/predictions" element={<Predictions/>}/>
      </Routes>

      {/* 
      REMINDER:
        Change github link once we change the link for the project
      */}

      <div className="footer"><a href="https://github.com/leiDnedyA/name-to-be-determined/">Follow us on GitHub! <FaGithub/></a></div>
    </div>
  );
}

export default App;
