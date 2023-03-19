// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertToggle = (type,message) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout( () => {
      setAlert(null)
    },1000)
  } 

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      alertToggle("success :", "this is dark mode ");
      document.title = 'himanshu - dark';
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertToggle("success :", "this is Light mode ");
      document.title = 'himanshu - light';
    }
  }

  return (
        <>
        <Router>
      <Navbar title = "himanshu22" about = "himanshuAbout" mode = {mode} toggleMode = {toggleMode}/>
      <Alerts alert = {alert}/>

      <div className = "container my-3">
      <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform heading ="Type here whatever you like" mode = {mode} alert = {alertToggle}/> } />
        </Routes>

        {/* <Textform heading ="Type here whatever you like" mode = {mode} alert = {alertToggle}/> */}
      </div>
      </Router>
        </>
      );
    }

export default App;
