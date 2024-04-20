import './App.css';
import Feedback from './components/Feedback';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
