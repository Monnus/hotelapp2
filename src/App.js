import LandingPage from './pages/landingPage';
import {Routes, Route} from "react-router-dom"
import SigninPage from "./pages/Signin/index"
import LoginuserPage from "./pages/Loginuser/index";
import AdminsigninPage from "./pages/Adminsignin/index";
import ReviewPage from "./pages/Review/index";
import BookingspagePage from "./pages/Bookingspage/index";
function App() {
  return (
    <div className="App">
<Routes>
  
<Route path="/landingPage" element={<LandingPage/>}/>  
<Route path="/register" element={<SigninPage/>}/>
<Route path="/signin" element={<LoginuserPage/>}/>
<Route path="/" element={<AdminsigninPage/>} />
<Route path='/review' element={<ReviewPage/>} />
<Route path='/Bookings' element={<BookingspagePage/>}  />
</Routes>
    </div>
  );
}
 export default App;