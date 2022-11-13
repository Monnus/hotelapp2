import React,{useState} from "react";
import { Box } from "@mui/system";
import { Link, useNavigate, } from "react-router-dom";
import app from "firebaseConfig";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"; 
import logo from "../../pages/Images/Frame33_logo.png"; 

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
      getemail("");
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

<Box sx={{height:"400px",width:"500px",background:"#5DBBFF",boxShadow:"2px 2px 20px lightgray",borderRadius:"1rem"}}>
        <h2 style={{fontSize:"25px",fontWeight:"500",backgroundColor:"lightgray"}}>create admin</h2>
    <form>
<label htmlFor="adminEmail">Admin Email</label><br/>
<input id="adminEmail" onChange={event=>getemail(event.target.value)} type="text" placeholder="Admin Email"
 style={{color:"gray",outline:"none",height:"50px",width:"250px",borderRadius:"0.5em"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password"type="text" value={password} onChange={event=>getPassword(event.target.value)} placeholder="password"
 style={{color:"gray",outline:"none",height:"50px",width:"250px",borderRadius:"0.5em"}}/>
<br/><br/>
<Box placeholder="submit" id="adminEmail" type="button" component="button" 
 sx={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px",width:"250px",borderRadius:"0.5em"}} onClick={handleResgisANDLogin}>submit</Box>
    </form>
 <Box component="button" type="button" data-id="loginAdmin" sx={{padding:"5px",fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(0,0,0,0.8)",width:"250px",borderRadius:"0.5em"}} onClick={handleswitch}>
      Go to Login page</Box>
      </Box>
)
}else if(adminset==="loginAdmin"){
  return(
    <Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
        <h2 style={{fontSize:"25px",fontWeight:"500",backgroundColor:"lightgray",boxShadow:"2px 2px 20px lightgray"}}>Login admin</h2>
    <form>
<label htmlFor="Email">Email</label><br/>
<input id="Email" value={email} onChange={event=>getemail(event.target.value)} type="text" placeholder="Email"
 style={{color:"gray",outline:"none",height:"50px",width:"250px",borderRadius:"0.5em"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password" type="text" value={password} onChange={event=>getPassword(event.target.value)} placeholder="password"
 style={{color:"gray",outline:"none",height:"50px",width:"250px",borderRadius:"0.5em"}}/>
<br/><br/>
<Box component="button" type="button" placeholder="submit" id="password" 
sx={{backgroundColor:"#D62A80" ,color:"white",width:"250px",borderRadius:"0.5em",height:"50px"}} onClick={handleResgisANDLogin}>
  submit</Box>
    </form>
   <Box component="button" type="button" sx={{padding:"5px",fontSize:"20px",width:"250px",borderRadius:"0.5em",fontWeight:"500",color:"white",background:"rgba(0,0,0,0.8)"}} data-id="adminEmail" onClick={handleswitch}> 
      Go to register
    </Box>
      </Box>
    )

}
  }


  return (
    <>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",maxHeight:"100vh",textAlign:"center",width:"100%"}}>
      <div style={{display:"flex",justifyContent:"space-between",height:"150px",width:"100%",alignItems:"center"}}>
        <div style={{height:"100px",width:"auto"}}><img src={logo} className="logo" alt=""/></div>
      <nav style={{width:"400px",height:"100%"}}>
      <ul  style={{display:"flex"}}>
        <li style={{display:"inline-block",textDecoration:"none", color:"#D62A80",width:"150px",background:"#802AD6"}}><a href="/" style={{textDecoration:"none"}}>Home</a></li>
        <li style={{display:"inline-block",textDecoration:"none", color:"#D62A80",width:"150px",background:"#802AD6"}}><a href="/AdminsigninPage" style={{textDecoration:"none"}}>Login</a></li>
        </ul>
      </nav>
      </div>
{handlelogin()}
      </div>
</>
)

};

export default AdminsigninPage;



