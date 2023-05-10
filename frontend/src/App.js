import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Mobnav from "./components/Mobnav";
import Navbar from "./components/Navbar";
import MainRoute from "./pages/MainRoutes";
import { Box } from "@chakra-ui/react";

function App() {

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension])

  console.log(windowDimension.winWidth);


  return <Box bgColor={"white"}>
{/* {windowDimension.winWidth>767?<Navbar/>:<Mobnav/>} */}

  

<MainRoute />
  </Box>;
}

export default App;
