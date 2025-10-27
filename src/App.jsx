import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import PropertyDetails from "./pages/PropertyDetails";
import "./App.css";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";
import About from "./pages/About"
import Blog from "./pages/Blog";
import Contact from "./pages/contact"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/PropertiesDetails/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About/>} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
  
    </>
  );
}

export default App;
