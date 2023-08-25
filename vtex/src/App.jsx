
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {

  return (
<div>
  <BrowserRouter>
  <Header />
  <Carousel />
  <Footer />
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </BrowserRouter>
</div>
  );
  };
export default App;
