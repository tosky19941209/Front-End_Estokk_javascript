import logo from './logo.svg';
import './App.css';
import NavBar from "./component/navbar/navbar"
import Dashboard from "./component/dashboard/dashboard"
import Footer from "./component/footer/footer"
function App() {
  return (
      <div className='flex min-h-screen flex-col items-center justify-between'>
        <NavBar />
        <Dashboard />
        <Footer />
      </div>
  );
}

export default App;
