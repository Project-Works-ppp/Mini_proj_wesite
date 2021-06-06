import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {TextField,Button,Divider, Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {useHistory} from "react-router-dom";
import red from '@material-ui/core/colors/red';

function Signup(){
    const[data,setData]=useState({
        Name:'',
        email:'',
        devtype:'',
        qualification:'',

    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });

    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your details have been submitted`);

    }
    return(
        <>

            <div className="my-5">
            <div className="icon">
                <div className="icon_class">
                    <PersonAddIcon  style={{ color: "black" , fontSize: 50 }}  />
                </div>

                <div className="text">Sign Up</div>
            </div>

            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                           
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            name="Name"
                            value={data.Name}
                            onChange={InputEvent}
                            
                            placeholder="Enter your name"/>
                            </div>

                            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
               
                
                            <input type="email" class="form-control" id="exampleFormControlInput2"
                             name="email"
                             value={data.email}
                             onChange={InputEvent}
                            
                            placeholder="name@example.com"/>
                            </div>

                            <div class="mb-3">
                    <label for="exampleFormControlInput3" class="form-label">Development</label>
                   
                            <input type="text" class="form-control" id="exampleFormControlInput3"
                             name="devtype"
                             value={data.devtype}
                             onChange={InputEvent}
                            placeholder="Enter what development you know"/>
                            </div>



                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Qualification</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1"
                            name="qualification"
                            value={data.qualification}
                            onChange={InputEvent}
                             rows="3"></textarea>
                            </div>

                            <br/>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontsize="small"/>}
                                        checkedIcon={<CheckBoxIcon fontsize="small"/>}
                                        name="checkedI"
                                        />
                                }
                            label="i agree to all the terms and conditions"
                            
                            /> 

                            <br/><br/>
                                <div className="button2">
                                
                                <Button variant ="outlined" color="primary" type="submit" >create account</Button>
                                
                            </div>
                            <br/>
                            <p className="text-center">
                                <Link to="/Login" className="text-black-50">
                                <h5 > Already have an Account?</h5>
                                </Link>
                            </p>

                         </form>
                    </div>
                </div>
            </div>
        
        
        </>
    );
};
export default Signup;