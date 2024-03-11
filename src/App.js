import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='text-white'>
        <Home/>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
