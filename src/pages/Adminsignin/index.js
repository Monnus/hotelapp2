import React from "react";

import { Stack, Img, Column, Text, Button, Row } from "components";
import { Box } from "@mui/system";

const AdminsigninPage = () => {
  return (
    
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",background:"gray",maxHeight:"100vh",textAlign:"center",width:"100%"}}>
      <div style={{display:"flex",justifyContent:"space-between",height:"150px",width:"100%",alignItems:"center"}}>
        <div style={{height:"100px",width:"auto"}}>LOGO</div>
      <nav style={{width:"400px",height:"100%"}}>
      <ul  style={{display:"flex"}}>
        <li style={{display:"inline-block",textDecoration:"none", color:"#D62A80",width:"150px",background:"#802AD6"}}>Regestration</li>
        <li style={{display:"inline-block",textDecoration:"none", color:"#D62A80",width:"150px",background:"#802AD6"}}>Login</li>
        </ul>
      </nav>
      </div>
      
      <Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
        <h2>Register</h2>
    <form>
<label htmlFor="adminEmail">Admin Email</label><br/>
<input id="adminEmail" type="text" placeholder="Admmin Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password"type="text" placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/><br/>
<button placeholder="submit" style={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}}>submit</button>
    </form>
      </Box>
      </div>
      
  );
};

export default AdminsigninPage;
