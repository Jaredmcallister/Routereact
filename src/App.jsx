import { Routes, Route, Link } from "react-router-dom"
import Red from "./red"
import Blue from "./blue"
import Home from "./home"
const App = () => {
 

  return (
    
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
        <Route path ="/home" element ={<Home/>}/>
        <Route path ="/blue" element ={<Blue/>}/>
        <Route path ="/red" element = {<Red/>}/>
        </Routes></div>
    </div>
    </>
  )
}

export default App
