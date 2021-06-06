import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Login = () =>{
    return(
        <>  

            <div className="my-5">
            <div className="icon">
                <div className="icon_class">
                <PersonAddIcon  style={{ color: "black" , fontSize: 50 }}  />
                </div>
                
                <div className="text">Login</div>
            </div>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
            
                    <form >
            <       div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    
            
            <p className="text-center">
                <Link to="/Signup" className="text-black-50">
                    <h5>create account ?</h5>
                </Link>
            </p>
            </form>
            </div>
            </div>
            </div>
            
        </>
    );
};
export default Login;