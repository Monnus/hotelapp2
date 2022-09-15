import { FormControl} from "@mui/material"
import React,{useEffect, useState,useContext } from "react"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import app from "firebaseConfig";
import {getStorage} from "firebase/storage";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "App";
import FabBtn from "components/fab/fab";
import TabsCreated from "components/Tabs/tabs";
import { Box } from "@mui/system";










const AdminPage=()=>{

    const hotalData=useContext(UserContext);

    console.log(getStorage(app));
// ========================firebase upload==========================






return (
<>

    <div style={{height:"280px",width:"100%",backgroundColor:"skyblue",display:"flex", position:"relative",
    justifyContent:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"20px"}}>
<nav style={{height:"100px"}}>
<ul style={{}}>
<li style={{display:"inline-block",alignContent:"center"}}>
  < OtherHousesIcon  fontSize="large"/>
  Home
</li>
<li style={{display:"inline-block"}}>
 <SupervisorAccountIcon fontSize="large"/> Admin 
</li>
<li style={{display:"inline-block"}}>
 <LibraryBooksIcon fontSize="LibraryBooksIcon"/> bookings
</li>
<li style={{display:"inline-block"}}>
  <LogoutIcon fontSize="large "/>logout
</li>
</ul>
</nav>
    </div>

{/* =========================Tabs========================================== */}
<div style={{display:"flex",flexDirection:"row",width:"100%",height:"auto",justifyContent:"space-around"}}>
  <TabsCreated/>   
  <Box sx={{position:"relative",top:"22px",width:"25%",height:"55vh",backgroundColor:"#F5f5f5" }}>
    <h1 style={{color:"white",marginTop:"10px",marginLeft:"50px",textAlign:"center", padding:"0 0",width:"70%",height:"40px",backgroundColor:"#048BCC",fontSize:"25px"}}>Bookings summery</h1>
  <h2 style={{color:"white",
  marginTop:"15px",
  textAlign:"center",
   padding:"0 0",width:"100%",height:"40px",
   backgroundColor:"lightgray",fontSize:"25px"}}>@Hotel Crown Plaza</h2>

<p style={{padding:"0 15px",margin:"10px 0"}}>2 bedroom Jungle theme        8days</p>
<p style={{padding:"0 15px",margin:"10px 0"}}>R1080 room/night</p>
<Box sx={{height:"200px",backgroundColor:"lightgray"}} pl={10} mb={10}>

<p>Gross X2 rooms</p>
<p>Extras</p>
<p>-bottle champian</p>
<p>-breakfast</p>
<p>-wifi</p>
<p>-Tv</p>


</Box>


<h3 style={{height:"100px",width:"100%",backgroundColor:"lightgray",textAlign:"center",fontSize:"20px"}}>Bookings Total                            R2080 </h3>

    </Box>     
</div>
<FabBtn/>


        </>
            )


}
export default  AdminPage;