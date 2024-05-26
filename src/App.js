import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Login from './components/Login';
import Footer from './components/Footer';
import ContactInfo from './components/signUpComponent/ContactInfo';
import Membership from './components/signUpComponent/Membership';
import AddDriver from './components/signUpComponent/AddDriver';
import Payment from './components/signUpComponent/Payment';
import Account from './components/AccountComponents/Account';

import NewOrderState from './context/newOrder/NewOrderState';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <NewOrderState>
        <Router>
          <div className='roboto-condensed-font'>
            <Navbar />
            <div className='roboto-condensed-font'>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/frequentlyAskedQuestions" element={<FAQ />} />
                <Route exact path="/testimonials" element={<Testimonials />} />
                <Route exact path="/signup" element={<ContactInfo />} />
                <Route exact path="/membership" element={<Membership />} />
                <Route exact path="/addDriver" element={<AddDriver />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/account/*" element={<Account />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </NewOrderState>
    </>
  );
}

export default App;
