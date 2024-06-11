import logo from './logo.svg';
import './App.css';
import { ReactDOM } from "react-dom/client"
import NavBar from "./component/navbar/navbar"
import Dashboard from "./component/dashboard/dashboard"
import Footer from "./component/footer/footer"
import ShowOffer from './component/showoffer/showoffer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className='flex flex-col items-center justify-between bg-red-100'
        style={{
          "background": "url('./background.png')",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover"
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/showoffer" element={<ShowOffer/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



