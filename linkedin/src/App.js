import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Divpage from './Pages/Divpage/divPage.js';
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
          <Route path='/divpage' element={<Divpage/>}/>
          <Route path='/network' element={<Networkpage/>}/>
          <Route path='/msg' element={<Messagepage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;



