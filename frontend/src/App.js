import "./App.css";
import Footer from "./components/Footer";
import Mobnav from "./components/Mobnav";
import Navbar from "./components/Navbar";
import MainRoute from "./pages/MainRoutes";

function App() {
  return <div>
  <Navbar/>
{/* <Mobnav/> */}
<MainRoute />
<Footer/>
  </div>;
}

export default App;
