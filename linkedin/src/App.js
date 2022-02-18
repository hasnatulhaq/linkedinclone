//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Container from '../src/Components/main_container/main_container.js';

function App() {
  return (
    <>
    <div className="App">
       <h1>Linkedin clone</h1>
         <Container/>
    </div>
    

    {/* <Router>
    <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signin' element={<Sigin/>}></Route>
    </Routes>
  </Router> */}
    </>
    
  );
}

export default App;
