import React from 'react'
import { Box } from '@mui/system'
import logo from "../../pages/Images/Frame33_logo.png"
import hotelImage from "../../pages/Images/Frame33_Rectangle2.jpg"
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import profileImage from "../../pages/Images/Frame33_Ellipse3.png"
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
export default function Header() {
  return (
  <>
    <Box sx={{width:"100%",height:"500px", backgroundColor:"#048BCC", margin:"0 0 70px 0"}}>
      <nav style={{background:"#5DBBFF",width:"100%"}}>
        <img src={logo} className="logo" alt=""/>
        <ul style={{float:"right",display:"inline-block"}}>
      <Link to="/"><HomeIcon sx={{ fontSize: 40 }} /> <li style={{display:"inline-block"}}>Home</li></Link>
       <Link to="/admin">  <AdminPanelSettingsRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>admin</li></Link>
         <Link to="/Bookings">  <BookRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"}}>Bookings</li></Link>
         <LogoutRoundedIcon sx={{fontSize:40}}/><li style={{display:"inline-block"  }}>logout</li>
        </ul>
      </nav>
      <div style={{backgroundImage:`url(${hotelImage})`,width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"80%",display:"flex",justifyContent:"center"}}>
      <h1 style={{color:"white"}}>Welcome to hotel plaza</h1><br></br>
      <p style={{color:"white"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.    </p>

      </div>
      <div className='' ><img src={profileImage} style={{borderRadius:"100px"}} className="profileIMGHomePage"/></div>
    </Box>

        </>
  )
}
