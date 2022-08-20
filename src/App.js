import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import 'react-toastify/dist/ReactToastify.css';
import Services from './Components/Services/Services';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import RequireAuth from './Hooks/RequireAuth';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route> 
        <Route path="services/:servicesId" element={
        <RequireAuth>
          <ServicesDetails></ServicesDetails>
        </RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
