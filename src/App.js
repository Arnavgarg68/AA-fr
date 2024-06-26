import './App.css';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route exact path='/feedback' element={<Feedback/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
