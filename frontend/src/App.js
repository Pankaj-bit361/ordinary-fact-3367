<<<<<<< HEAD
import { Container, useColorModeValue } from "@chakra-ui/react";
import MainRoute from "./Routes/MainRoute";
// import Footer from "./0603/Components/Footer/Footer";
// import Navbar from "./0603/Components/NavBar";
// import "./1265/src/App.css"
function App() {
  return (
    <Container
      background={useColorModeValue("root.black", "#f3f3f3")}
      color={useColorModeValue("root.white", "root.black")}
      maxW={"container.2xl"}
      p='0'
    >
      {/* // navbar */}
      {/* <Navbar/> */}
      <MainRoute />
      {/* // footer */}
      {/* <Footer/> */}
    </Container>
  );
=======
import "./App.css";
import MainRoute from "./pages/MainRoutes";

function App() {
  return <MainRoute />;
>>>>>>> ddb717bd960300ecb58c97656a5b041d70a23062
}
export default App;
