
import Movies from './components/Movies';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Api from './components/Api';
import Effect from './components/Effect';
import Form from './components/Form';
function App() {
  return (
    <>
      {/*
      <Movies /> */}

      <Router>

          <NavbarComp/>

          <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/api" element={<Api/>}/>
              <Route path="/effect" element={<Effect/>}/>
              <Route path="/forms" element={<Form/>}/>

          </Routes>

      </Router>

    </>
  );

}
export default App;
