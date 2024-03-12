
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Services from './components/Services'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Routes>
    <Route  path="/" element={ <> <Navbar/><Home/><Footer/></>} />
    <Route  path="/services" element={ <> <Navbar/><Services/><Footer/></>} />

    </Routes>
    </BrowserRouter>
}

export default App;
