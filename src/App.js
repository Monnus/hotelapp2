import LandingPage from './pages/landingPage';
import {Routes, Route} from "react-router-dom"
import SigninPage from "./pages/Signin/index"
import LoginuserPage from "./pages/Loginuser/index";
import AdminsigninPage from "./pages/Adminsignin/index";
import ReviewPage from "./pages/Review/index";
import BookingspagePage from "./pages/Bookingspage/index";
import AdminPage from 'pages/adminpage';
import {createContext } from 'react';
import { hotalData } from 'hotalData';
 const UserContext= createContext();
function App() {
  return (
    <div className="App">
    <UserContext.Provider value={hotalData}>
<Routes>
<Route path="/" element={<LandingPage/>}/>  
<Route path="/register" element={<SigninPage/>}/>
<Route path="/signin" element={<LoginuserPage/>}/>
<Route path="/AdminsigninPage" element={<AdminsigninPage/>} />
<Route path='/review' element={<ReviewPage/>} />
<Route path='/Bookings' element={<BookingspagePage/>}  />
<Route path="/AdnimPage" element={<AdminPage/>} />
</Routes>
      </UserContext.Provider>
    </div>
  );
}
 
 export default App;
 export {
UserContext
 };