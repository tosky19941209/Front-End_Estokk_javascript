import logo from './logo.svg';
import './App.css';
import NavBar from "./component/navbar/navbar"
import Dashboard from "./component/dashboard/dashboard"
import Footer from "./component/footer/footer"
function App() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-red-100' 
      style={{
        "background":"url('./background.png')",
        "backgroundRepeat":"no-repeat",
        "backgroundSize":"cover"
      }}
    >
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
