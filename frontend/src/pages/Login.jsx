import React, { useState } from "react";
import { auth } from "../firebase";
import axios from "axios";
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {
  Box,
  Button,
  Input,
  PinInput,
  PinInputField,
  Text,
  Center,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { async } from "@firebase/util";

import LargeWithAppLinksAndSocial from "../components/Footer";
import Navbar from "../components/Navbar";
import Mobnav from "../components/Mobnav";
import Footer from "../components/Footer";
export const Login = () => {






  const [windowDimension,detectHW]=useState({
    winWidth:window.innerWidth
   })
  
   const detectSize=()=>{
    detectHW({
      winWidth:window.innerWidth
    })
   }
  useEffect(()=>{
    window.addEventListener("resize",detectSize)
  
    return ()=>{
      window.removeEventListener("resize",detectSize)
    }
  },[windowDimension])
  
  console.log(windowDimension.winWidth)
let color=""
 if(windowDimension.winWidth>767){
color="#2f3394"
}else{
  color="#00a699"
}











  const [ph, setph] = useState("");
  const [user, setuser] = useState("");
  const [otp, setotp] = useState("");
  const [change, setchnage] = useState(true);

  const [change2, setchange2] = useState(true);

  ///
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [email, setcheckemail] = useState("");
  const [pass, setcheckpss] = useState("");
  useEffect(() => {
    axios
      .get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
      .then((res) => setdata(res.data));
  }, []);


const onsubmit=async(e)=>{
let data={
email,pass
}


  e.preventDefault()
  if(email=="admin" && pass=="admin"){
     Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome Admin Login Success',
                showConfirmButton: false,
                timer: 2000
              })
navigate("/admin")
  }else {
    
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

  const onSingup = () => {
    onCatchVerify();
    setchange2(!change2);
    const appVerifier = window.recaptchaVerifier;

    const phoneformat = "+91" + ph;

    signInWithPhoneNumber(auth, phoneformat, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        toast.success("Otp Send Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const wrongalert = async () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong Otp",
    });
  };

  function onOtpVerify() {
    window.confirmationResult
      .confirm(otp)
      .then(async (result) => {
        setuser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        wrongalert();
      });
  }

  return (
    <Box>
    {windowDimension.winWidth>767?<Navbar/>:<Mobnav/>}
      <div className="text-center">
        {change ? (
          <Box pt={"5%"} w={"50%"} m="auto">
            <Center>
              <Button
                mt={"2%"}
                color="white"
                bg={color}
                onClick={() => setchnage(!change)}
              >
                {change ? "Sign in using Number" : "Sign in using Email"}
              </Button>
            </Center>

            <Text fontSize={"xl"} textAlign="left">
              My Account
            </Text>
            <Input
              mt={"3%"}
              placeholder="Email"
              value={email}
              onChange={(e) => setcheckemail(e.target.value)}
            />
            <Input
              mt={"3%"}
              placeholder="Password"
              value={pass}
              onChange={(e) => setcheckpss(e.target.value)}
            />
            <Button
              onClick={onsubmit}
              mt={"3%"}
              color="white"
              bg={color}
              w={"100%"}
            >
              Sign In
            </Button>
          </Box>
        ) : (
          <Box>
            <Toaster toastOptions={{ duration: 1000 }} />
            <Box id="recaptcha-container"> </Box>

            {change2 ? (
              <Box w={"50%"} margin="auto">
                {" "}
                <Input 
                  w={"100%"}
                  mt={"3%"}
                  type="number"
                  placeholder="Enter Mobile Number"
                  value={ph}
                  onChange={(e) => setph(e.target.value)}
                />
                <Button
                  color="white"
                  bg={color}
                  w={"100%"}
                  mt={"3%"}
                  onClick={onSingup}
                >
                  Send otp
                </Button>{" "}
              </Box>
            ) : (
              <Box style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
                <div
                  style={{ width: "100%", margin: "auto", marginLeft: "2%" }}
                >
                  <OtpInput
                    value={otp}
                    onChange={setotp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    color="#333"
                    inputStyles={{
                      border: "1px solid black",
                      width: "100%",
                      marginBottom: "3%",
                    }}
                    autofocus
                  ></OtpInput>
                </div>

                <Button
                  w={"100%"}
                  color="white"
                  bg={color}
                  onClick={onOtpVerify}
                >
                  Verify
                </Button>
              </Box>
            )}
          </Box>
        )}
        <Center>
          <Text fontSize={"14px"} m="auto" w={"50%"} mt={"2%"}>
            By signing into your account,you agree
          </Text>
        </Center>

        <Text fontSize={"14px"} m="auto" w={"50%"}>
          <span>to Belks's </span>
          <span style={{ color: color }}>Privacy Policy </span>
          <span> & </span>{" "}
          <span style={{ color: color }}> Terms of Use</span>
        </Text>
        <hr style={{ width: "50%", margin: "auto", marginTop: "15px" }} />
        <Link to="/signup">
          {" "}
          <Box mt={"2%"}>
            <Button
              bg={color}
              background={"white"}
              border={`1px solid ${color}`}
              w={"50%"}
              m="auto"
              color={color}
            >
              Create Account
            </Button>
          </Box>
        </Link>
      </div>
      <Footer/>
    </Box>
  );
};
