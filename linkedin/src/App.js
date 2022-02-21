import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Container from '../src/Components/main_container/main_container.js';
import Network from '../src/Pages/Network/networkpage.js'
import Networkpage from '../src/Pages/Network/networkpage.js';

function App() {
  return (
    <>
      <Router>
    <Routes>
        <Route path='../src/Pages/Network/networkpage.js' element={<Networkpage/>}></Route>
    </Routes>
    </Router>
    <div className="App">
       <h1>Linkedin clone</h1>
         <Container/>
         <Network/>
    </div>
   
    </>
    
  );
}

export default App;
