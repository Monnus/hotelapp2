import React,{useState} from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import app from "firebaseConfig";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"



const AdminsigninPage = () => {
const [adminset,getAdminSet]=useState("createAdmin");
const [email,getemail]=useState("");
const [password,getPassword]=useState("");

function handleResgisANDLogin(e){
const auth=getAuth(app);

  if(e.target.id==="adminEmail"){
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
      console.log(res,"created an account successfully");
      getemail("")
      getPassword("");
      getAdminSet("loginAdmin");
    }).catch((err)=>console.log(err))
  }else if(e.target.id==="password"){
signInWithEmailAndPassword(auth,email,password).then((res)=>{
  console.log(res,"logged in successfully");
  getemail("")
  getPassword("");
}).catch((err)=>console.log(err));
  }
}
  function handlelogin(){
if(adminset==="loginAdmin"){
return(
<> 
<Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
        <h2>Login admin</h2>
    <form>
<label htmlFor="adminEmail">Admin Email</label><br/>
<input id="adminEmail" type="text" placeholder="Admmin Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/>
<label htmlFor="password">Password</label><br/>
<input id="password"type="text" placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
<br/><br/>
<button placeholder="submit" style={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}} onClick={handleResgisANDLogin}>submit</button>
    </form>
    <p style={{fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(255,255,255,0.8)"}} onClick={getAdminSet((str)=>str="loginAdmin")}>
      Go to register
    </p>
      </Box>
</>
)
}
  }

  function handleAdmin(){
    if(adminset==="createAdmin"){
      return(
      <>
      <Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
              <h2>Register</h2>
          <form>
      <label htmlFor="adminEmail">Admin Email</label><br/>
      <input id="adminEmail" value={email} type="text" onChange={getemail} placeholder="Admmin Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
      <br/>
      <label htmlFor="password">Password</label><br/>
      <input id="password"type="text" value={password} onChange={getPassword} placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
      <br/><br/>
      <button placeholder="submit" style={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}} onClick={handleResgisANDLogin}>submit</button>
          </form>
          <p style={{fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(255,255,255,0.8)"}} onClick={getAdminSet((str)=>str="loginAdmin")}>
            Go to Login
          </p>
            </Box>
      
      </>
      );
  }
}
  return (
    <>
    <Box sx={{height:"400px",width:"500px",background:"#5DBBFF"}}>
            <h2>Register</h2>
        <form>
    <label htmlFor="adminEmail">Admin Email</label><br/>
    <input id="adminEmail" value={email} type="text" onChange={getemail} placeholder="Admmin Email" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
    <br/>
    <label htmlFor="password">Password</label><br/>
    <input id="password"type="text" value={password} onChange={getPassword} placeholder="password" style={{color:"gray",outline:"none",height:"50px",width:"200px"}}/>
    <br/><br/>
    <button placeholder="submit" style={{backgroundColor:"#D62A80" ,color:"white",width:"80px",height:"50px"}} onClick={handleResgisANDLogin}>submit</button>
        </form>
        <p style={{fontSize:"20px",fontWeight:"500",color:"white",background:"rgba(255,255,255,0.8)"}} onClick={getAdminSet((str)=>str="loginAdmin")}>
          Go to Login
        </p>
          </Box>
    
    </>
  );
};

export default AdminsigninPage;
