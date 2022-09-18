import React, { useState } from 'react'
import { Box } from '@mui/system'
import logo from "../../pages/Images/Frame33_logo.png"
import hotelImage from "../../pages/Images/Frame33_Rectangle2.jpg"
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import profileImage from "../../pages/Images/Frame33_Ellipse3.png"
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { getAuth, signOut } from 'firebase/auth';

export default function Header() {
  const [active, setActive]=useState(false);
const auth=getAuth();
  const handleLogout=(e)=>{
 signOut(auth).then((res)=>{
  console.log(res,alert("You  have been logged out"))
 }).catch(err=>console.log(err));
  }
  return (

  <>
    <Box sx={{width:"100%",height:"500px", backgroundColor:"#048BCC", margin:"0 0 70px 0"}}>
      <nav style={{background:"#5DBBFF",width:"100%"}}>
        <img src={logo} className="logo" alt=""/>
        <ul style={{float:"right",display:"inline-block"}}>
      <Link to="/"><HomeIcon sx={{ fontSize: 40 }} /> <li style={{display:"inline-block"}}>Home</li></Link>

       <Link to="/admin">  <AdminPanelSettingsRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>admin</li></Link>
         <Link to="/Bookings">  <BookRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>Bookings</li></Link>
         <Link to="/register" onClick={(e)=>handleLogout(e)}><LogoutRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"  }}>logout</li></Link>
        </ul>
      </nav>
      <div style={{backgroundImage:`url(${hotelImage})`,width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"80%",display:"flex",justifyContent:"center"}}>
      <h1 style={{color:"white"}}>Welcome to hotel plaza</h1><br></br>
      <p style={{color:"white"}}>
        “Dear visiters, I welcome you to my hotel website and hope you'll find every thing you desire. Come have a pleasant experiance in ower hotel.
       I can ensure best hospitality from my staff at your ease and you would be showered with all the amenities you ask for.”.
       “Enjoy dear guest. ""   </p>

      </div>
      <div className='' ><img src={profileImage} style={{borderRadius:"100px"}} className="profileIMGHomePage"/></div>
    </Box>

        </>
  )
}
