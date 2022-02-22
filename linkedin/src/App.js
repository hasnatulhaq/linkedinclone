import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Networkpage from './Pages/Network/networkpage.js';
import Messagepage from './Pages/Messages/messagepage.js'




function App() {
  return (
    <>
    <div className="App">
       <h1>Linkedin clone</h1>
       <Router>
    <Routes>
       <Route path='./Pages/Messages/messagepage.js' element={<Messagepage/>}></Route>
        <Route path='./Pages/Network/networkpage.js' element={<Networkpage/>}></Route>
    </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
