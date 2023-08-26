
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import CopyrightFooter from "./Components/CopyrightFooter";

function App() {

  return (
<div>
  <BrowserRouter>
  <Header />
  <Carousel />
 <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  <Footer />
  <CopyrightFooter/>
  </BrowserRouter>
</div>
  );
  };
export default App;
