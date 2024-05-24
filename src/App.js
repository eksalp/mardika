import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
// import Contact from './routes/Contact';
import Tryout from "./routes/Tryout";
// import About from './routes/About';
import Blog from "./routes/Blog";
import Closed from "./routes/Closed";
// analytics.js
import ReactGA from "react-ga4";

ReactGA.initialize("G-EV4JLXVRKZ");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Program" element={<Tryout />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Closed" element={<Closed />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
