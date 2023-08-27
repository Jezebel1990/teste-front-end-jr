
import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import CopyrightFooter from "./Components/CopyrightFooter";

function App() {

  return (
<div>
  <BrowserRouter>
  <Header />
  <Carousel />
  <Main />
  <Footer />
  <CopyrightFooter/>
  </BrowserRouter>
</div>
  );
  };
export default App;
