import React,{useState} from "react";
import { Box } from "@mui/system";
import { Link, useNavigate, } from "react-router-dom";
import app from "firebaseConfig";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"


const AdminsigninPage = () => {
  const navigate=useNavigate()
const [adminset,getAdminSet]=useState("adminEmail");
const [email,getemail]=useState("");
const [password,getPassword]=useState("");
console.log(email);


const handleswitch=(e)=>{
   getAdminSet(e.target.dataset.id);
  }

function handleResgisANDLogin(e){
  const auth=getAuth(app);
  if(e.target.id==="adminEmail"){
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
      console.log(res,"created an account successfully");
      getemail("")
      getPassword("");
      getAdminSet("loginAdmin");
    }).catch((err)=>{
      getemail("")
  getPassword("");
      console.err(err,alert(err))
  })
  }else if(e.target.id==="password"){
signInWithEmailAndPassword(auth,email,password).then((res)=>{
  console.log(res,"logged in successfully");
  getemail("")
  getPassword("");
navigate("/AdminPage");
}).catch((err)=>{
  getemail("")
  getPassword("");
  alert(`error with email ${err.message}`);
});
  }
}
  function handlelogin(){
    console.log(adminset)
if(adminset==="adminEmail"){
return(

<Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
        <h2 style={{fontSize:"25px",fontWeight:"500",backgroundColor:"lightgray"}}>create admin</h2>
    <form>
<label htmlFor="adminEmail">Admin Email</label><br/>
<input id="adminEmail" onChange={event=>getemail(event.target.value)} type="text" placeholder="Admin Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password"type="text" value={password} onChange={event=>getPassword(event.target.value)} placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/><br/>
<Box placeholder="submit" id="adminEmail" type="button" component="button" 
 sx={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}} onClick={handleResgisANDLogin}>submit</Box>
    </form>
 <Box component="button" type="button" data-id="loginAdmin" sx={{fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(0,0,0,0.8)"}} onClick={handleswitch}>
      Go to Login page</Box>
      </Box>
)
}else if(adminset==="loginAdmin"){
  return(
    <Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
        <h2 style={{fontSize:"25px",fontWeight:"500",backgroundColor:"lightgray"}}>Login admin</h2>
    <form>
<label htmlFor="Email">Email</label><br/>
<input id="Email" value={email} onChange={event=>getemail(event.target.value)} type="text" placeholder="Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password" type="text" value={password} onChange={event=>getPassword(event.target.value)} placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/><br/>
<Box component="button" type="button" placeholder="submit" id="password" 
sx={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}} onClick={handleResgisANDLogin}>
  submit</Box>
    </form>
   <Box component="button" type="button" sx={{fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(0,0,0,0.8)"}} data-id="adminEmail" onClick={handleswitch}> 
      Go to register
    </Box>
      </Box>
    )

}
  }


  return (
    <>
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
{handlelogin()}
      </div>
</>
)

};

export default AdminsigninPage;



// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkNmJjOWRhMWFmMjM2ZjhlYTU2YTVkNjIyMzQwMWZmNGUwODdmMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaG90ZWxhcHAtZGV2LWUxMTc1IiwiYXVkIjoiaG90ZWxhcHAtZGV2LWUxMTc1IiwiYXV0aF90aW1lIjoxNjYyNzk2MzY5LCJ1c2VyX2lkIjoiRzk4am5vTkRvb2NSczVqb29RNG9zeWZkbDJnMiIsInN1YiI6Ikc5OGpub05Eb29jUnM1am9vUTRvc3lmZGwyZzIiLCJpYXQiOjE2NjI3OTYzNjksImV4cCI6MTY2Mjc5OTk2OSwiZW1haWwiOiJtYXgyM3ZlbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWF4MjN2ZWxAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.POvI3t-RZhHhjqq-clR6umIu0y6s12uYlvQJAxNnbTgSWqunRdhkhr0sqsPzcJ0hbjHv6NcT-z1qmDr3GQlBZ6DiZYj8H-CoAU0ZfZrmh0722EoZ7wv3q8yLhH5FMCzzsoRCqkNJrrBrGt_lqxm3Cu8JsFhUmhU7kI9sn1SiX25vUjM-LrvBqYBkfK-h46GAZNOXCKbnwTl-xtwDxUaXFRz5yy6n7LSLbaTmavPa_RyrD_StsdsOvCvg0-Q4ZtxVO03lYnpkoN8wfgnyIjYbda2tvji8KekUdrPVEy0w_d4BpQVSwR2w1NkAYTAr7SrzdBMZ_jR4_mOzbTVuGzNCzg"