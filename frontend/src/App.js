import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Mobnav from "./components/Mobnav";
import Navbar from "./components/Navbar";
import MainRoute from "./pages/MainRoutes";

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


  return <div>
{/* {windowDimension.winWidth>767?<Navbar/>:<Mobnav/>} */}

  

<MainRoute />
  </div>;
}

export default App;
