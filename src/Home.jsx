import  React from "react";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Card from "./Card";

const Home=()=>{
    let history=useHistory();
  return(
    <>
   
      <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav-bg">
              
                  <div className="col-10 mx-auto">
                      <div className="row">
                      <div className="col-md-5 pt-10 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1>Get your Job recommendation with <b className="navbar-brand" href="#">Student<b className="navbar-brand1">Arena</b></b></h1>
                          <div class="mt-3">
                            <Button className="button1" color="primary" variant="outlined" 
                            onClick={()=>{history.push('/Signup')}}>Get Started</Button>
                                
                               
                           </div>
                           
                           
                                

                             </div> 
                             

                          </div>
                      
                      </div>
                  </div>
                  
          
      </section>
      <Card/>
     
    </>
  );
};

export default Home;