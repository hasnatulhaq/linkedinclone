import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Messagepage from './Pages/Messages/messagepage.js'
import Networkpage from './Pages/Network/networkpage.js';




function App() {
  return (
    <>
    <div className="App">
       <h1>Linkedin clone</h1>
    </div>
    <Router>
      <Routes>
          <Route path='/network' element={<Networkpage/>}></Route>
          <Route path='/message' element={<Messagepage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
