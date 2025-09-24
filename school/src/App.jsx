
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Onlineadmission from './Onlineadmission';
import Profile from './Profile';
import Classes from './Classes';
import Team from './Team';
import Offlineadmission from './Offlineadmission';
import OnlineFee from './Onlinefee';
import OfflineFeePay from './Offlinefee';
import Visitstudent from './Visitstudent';
import Contact from './Contact';
function App() {
  

  return (
      <Router>
      <Navbar />
      <div className=" mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Onlineadmission" element={<Onlineadmission />} />
          <Route path="/Offlineadmission" element={<Offlineadmission />} />
             <Route path="/Visitstudent" element={<Visitstudent />} />
                <Route path="/Onlinefee" element={<OnlineFee />} />
                   <Route path="/Offlinefee" element={<OfflineFeePay/>} />
              <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
           <Route path="/Classes" element={<Classes />} />
              <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
