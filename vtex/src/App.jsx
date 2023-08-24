
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Carousel from "./Components/Carousel";

function App() {

  return (
<div>
  <BrowserRouter>
  <Header />
  <Carousel />
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </BrowserRouter>
</div>
  );
  };
export default App;
