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
export const Login = () => {
  const [ph, setph] = useState("");
  const [user, setuser] = useState("");
  const [otp, setotp] = useState("");
  const [change, setchnage] = useState(true);

  const [change2, setchange2] = useState(true);

  ///
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [checkemail, setcheckemail] = useState("");
  const [checkpss, setcheckpss] = useState("");
  useEffect(() => {
    axios
      .get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
      .then((res) => setdata(res.data));
  }, []);

  const onsubmit = async () => {
    data.map((item) => {
      if (checkemail === "admin123@gmail.com" && checkpss === "admin") {
        navigate("/Admin");
      } else if (item.Email === checkemail && item.Password === checkpss) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };
  console.log(data);
  // const clicked=()=>{
  //   navigate("/admin")
  // }
  /////

  function onCatchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSingup();
          },
          "expired-callback": () => {},
        },
        auth
      );
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
    <>
      <div className="text-center">
        {change ? (
          <Box pt={"5%"} w={"50%"} m="auto">
            <Center>
              <Button
                mt={"2%"}
                color="white"
                bg={"#2e3192"}
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
              value={checkemail}
              onChange={(e) => setcheckemail(e.target.value)}
            />
            <Input
              mt={"3%"}
              placeholder="Password"
              value={checkpss}
              onChange={(e) => setcheckpss(e.target.value)}
            />
            <Button
              onClick={onsubmit}
              mt={"3%"}
              color="white"
              bg={"#2e3192"}
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
                  bg={"#2e3192"}
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
                  bg={"#2e3192"}
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
          <span style={{ color: "#2e3192" }}>Privacy Policy </span>
          <span> & </span>{" "}
          <span style={{ color: "#2e3192" }}> Terms of Use</span>
        </Text>
        <hr style={{ width: "50%", margin: "auto", marginTop: "15px" }} />
        <Link to="/signup">
          {" "}
          <Box mt={"2%"}>
            <Button
              bg={"#721f1f"}
              background={"white"}
              border={"1px solid #2e3192"}
              w={"50%"}
              m="auto"
              color={"#2e3192"}
            >
              Create Account
            </Button>
          </Box>
        </Link>
      </div>
    </>
  );
};
