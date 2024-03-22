import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Menu from './Pages/Menu';
import OurServices from './Pages/OurServices';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/menu' element={<Menu />}>
            </Route>
            <Route path='/aboutUs' element={<AboutUs />}>

            </Route>
            <Route path='/ourservices' element={<OurServices />}></Route>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
