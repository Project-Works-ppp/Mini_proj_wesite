import  React from "react";
import Home  from "./Home";
import About  from "./About";
import web from "../src/image/main_bg.jpg";
import Login from "./Login";
import Signup from"./Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Navbar from "./Navbar";
import {Switch,Route, Redirect} from "react-router-dom";
import Footer from "./Footer";
const App=()=>{
  const myStyle={
    backgroundImage:`url(${web})`,
    width:'100%',
    height:'1500px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    };
  return(
    <>
    <div style={myStyle}>
    <Navbar/>
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/About"  component={About}/>
      <Route path="/Signup" exact component={Signup}/>
      
      <Route path="/Login" exact component={Login}/>
      <Redirect to="/"/>  
    </Switch>
    
    <Footer/>
     </div> 
     
     
    </>
  );
};

export default App;