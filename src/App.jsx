import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about'; 
import Contact from './pages/contact';
import HireMe from './pages/hireme';
import Projects from "./pages/projects"
import Home from './pages/home';
function App() {
console.log(location);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/hireme' element ={<HireMe/>} />
        <Route path='/projects' element ={<Projects/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
