
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './Layout/header/Header.jsx'
import About from "./page/about/About.jsx";
import Blog from "./page/blog/Blog.jsx";
import Contact from "./page/contact/Contact.jsx";
import Home from "./page/home/Home.jsx";
import Portfolio from "./page/portfolio/Portfolio.jsx";
import Pricing from "./page/pricing/Pricing.jsx";
import Services from "./page/services/Services.jsx";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/portfolio' element={<Portfolio/>}/>
      <Route exact path='/pricing' element={<Pricing/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
