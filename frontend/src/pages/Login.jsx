import React, { useState } from 'react'
import { auth } from '../firebase';
import axios from "axios"
import OtpInput from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth';
import { Box, Button, Input,PinInput,PinInputField,Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import {Toaster,toast} from "react-hot-toast"
import Swal from 'sweetalert2'
import { async } from '@firebase/util';

import LargeWithAppLinksAndSocial from '../components/Footer';
export const Login = () => {
const [ph,setph]=useState("")
const [user,setuser]=useState("")
const [otp,setotp]=useState("")
const [change,setchnage]=useState(true)

const [change2,setchange2]=useState(true)


///
const navigate=useNavigate()
const [data,setdata]=useState([])
const[email,setcheckemail]=useState("")
const[pass,setcheckpss]=useState("")
// useEffect(() => {
  
// axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
// .then((res)=>setdata(res.data))
 
// }, [])


const onsubmit=async(e)=>{
let data={
email,pass

}

    e.preventDefault()
    console.log(data)
    axios.post(`https://distinct-blue-blazer.cyclic.app/users/login`,data)
    .then((res)=>{
        console.log(res.data)
        localStorage.setItem("token",JSON.stringify(res.data.token))
        if(res.data.token){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1000
              })
              navigate("/")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Wrong email or password",
               timer:0
              })
        }
    })
}

// const clicked=()=>{
//   navigate("/admin")
// }
/////







function onCatchVerify(){
if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
         
         onSingup()
        },
        'expired-callback': () => {
        
        }
      }, auth);
}
}


const onSingup=()=>{
    onCatchVerify()
setchange2(!change2)
    const appVerifier=window.recaptchaVerifier;

    const phoneformat="+91"+ph

    signInWithPhoneNumber(auth, phoneformat, appVerifier)
    .then((confirmationResult) => {

      window.confirmationResult = confirmationResult;
      
     toast.success('Otp Send Successfully')
      
    }).catch((error) => {
       console.log(error)
    });
}
const wrongalert=async()=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "Wrong Otp",
   
  })
}


function onOtpVerify(){
    window.confirmationResult.confirm(otp).then(async(result) => {
       
      setuser(result.user)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/")
      }).catch((error) => {
       wrongalert()
      });
}

  return (

    <>
 
    <div>
   
<Button mt={"2%"} color="white" bg={"#00a699"} onClick={()=>setchnage(!change)}>{change?"Sign in using Number":"Sign in using Email"}</Button>

{change?<Box pt={"5%"} w={"50%"} m="auto" >
<Text fontSize={"xl"} textAlign="left">My Account</Text>
<Input mt={"3%"} placeholder="Email" value={email} onChange={(e)=>setcheckemail(e.target.value)}/>
<Input mt={"3%"} placeholder="Password" value={pass} onChange={(e)=>setcheckpss(e.target.value)}  />
<Button onClick={onsubmit} mt={"3%"} color="white" bg={"#00a699"} w={"100%"}>Sign In</Button>
</Box>:<Box> 
<Toaster  toastOptions={{duration:1000}}/>
 <Box id="recaptcha-container" > </Box>
    
   {change2? <Box w={"50%"}  margin="auto">  <Input w={"100%"} mt={"3%"} type="number" placeholder='Enter Mobile Number' value={ph} onChange={(e)=>setph(e.target.value)} />
      <Button   color="white" bg={"#00a699"} w={"100%"} mt={"3%"} onClick={onSingup}>Send otp</Button> </Box>:
      <Box style={{width:"50%",margin:"auto",marginTop:"5%"}} >
      <div style={{width:"100%",margin:"auto", marginLeft:"2%"}} >

      <OtpInput 
                    value={otp}
                    onChange={setotp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    color="#333"
                    inputStyles={{border:"1px solid black",width:"100%",marginBottom:"3%"}}
                autofocus
                    ></OtpInput>
      </div>

       <Button w={"100%"}  color="white" bg={"#00a699"} onClick={onOtpVerify}>Verify</Button>
       </Box>
       }
  
     
      </Box>
      }
<Text fontSize={"14px"} m="auto" w={"50%"} mt={"2%"}>By signing into your account,you agree</Text>
<Text fontSize={"14px"} m='auto' w={"50%"}><span>to Belks's </span><span style={{color:"#00a699"}}>Privacy Policy </span><span> & </span> <span style={{color:"#2e3192"}}> Terms of Use</span></Text>
    <hr style={{width:"50%"}}/>
    <Link to="/signup"> <Box  mt={"2%"}>
  <Button   bg={"##00a699"} background={"white"} border={"1px solid #2e3192"} w={"50%"} m="auto" color={"#00a699"}>Create Account</Button></Box></Link>
    </div>

</>
  )
}


