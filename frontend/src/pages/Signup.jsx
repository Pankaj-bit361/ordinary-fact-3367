import axios from "axios";
 import {
  Box,
  Input,
  InputGroup,

  InputRightElement,
 
  Button,} from '@chakra-ui/react';

  import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import "../components/css/singup.css";
import { useDispatch } from "react-redux";
import { logintry } from "../redux/auth/action";
import LargeWithAppLinksAndSocial from "../components/Footer";

const init={
  name:"",
email:"",
pass:"",
age:"",
}

export const Signup = () => {

const dispatch=useDispatch()
const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
const [adddetails,setadddetails]=useState(init)

const handleChange=(e)=>{
const {name,value}=e.target;
setadddetails({...adddetails,[name]:value})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(adddetails)
dispatch(logintry(adddetails))
.then(()=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Account Created Successfully',
    showConfirmButton: false,
    timer: 1500
  })
  navigate("/login")
})
}


  
  return (
    <>

    <div id="main">
      <form id="form" disabled={adddetails.Password!==adddetails.ConfirmPassword} onSubmit={handleSubmit}>
        <h3>Create Account</h3>
       
        <div >
        <h4>Personal information</h4>
        <Input type="text" placeholder='Enter Your Name' name="name" onChange={handleChange} value={adddetails.name}/>
        <br/>
        <Input type="text" placeholder='Enter Your Age' name="age" onChange={handleChange} value={adddetails.age}  />
        </div>
  <div>
  <h4>Contact Information</h4>
  <br/>
  <Input type="text" placeholder='Email' onChange={handleChange} name="email" value={adddetails.email} />
  </div>
     
       <div id="maintain">
        <Box mb={"-10%"}>Security</Box>

      

        <InputGroup mb={"-5%"}  className='ghost' >
                <Input   type={showPassword ? 'text' : 'password'} placeholder="Password" name="pass" value={adddetails.pass} onChange={handleChange} />
                <InputRightElement  >
                  <div 
                   
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </div>
                </InputRightElement>
              </InputGroup>
      
        
              
            
     
          
          
              </div>
       <br/>
       <button id="fixbutton"  type='submit' >Create Account</button>
       <Box >By Placing your order, you agree to Belk's</Box>
       <Box id="span">
        <span >Priavacy Policy </span>
        <span> & </span>
        <span> Term of Use</span>
       </Box>
      </form>
      <hr className="hr"/>
   <div id="all"><span>Already have account? </span> <Link><span >Sign In</span></Link> </div>
    </div>
    
    </>
  )
}

export default Signup