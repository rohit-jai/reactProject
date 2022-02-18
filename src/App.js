import react,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar , Nav  } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import User from './Users'
import './App.css';
import Users from './Users';
import CreateUser from './CreateUser'


function App() {
  const [name,setName] = useState("rohit")
  return (
    <div className="App">
       <Router>
      
       <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
    <Routes>
    <Route path='/about' element={< About />}></Route>
    </Routes>
       
        
        
      <h1>hellow from react </h1>
      {/* <About name={name} /> */}      
      {/* <Contact  name={name}/> */}
{/* <Users /> */}
{/* <CreateUser /> */}
</Router>
    </div>
  );
}

export default App;
