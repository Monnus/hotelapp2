import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
// ==================signin===============================

const LoginuserPage = () => {
  const [email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const navigate=useNavigate();
const handleSubmit=()=>{
  const auth=getAuth();

signInWithEmailAndPassword(auth,email,Password).then(res=>{
  console.log(res,"you have successfully signed in");
  setPassword("");
  setEmail("");
  navigate("/")
}).catch((err)=>{
  setPassword("");
  setEmail("");
  console.log(err)
})
}

  return (
<div style={{width:"100%",height:"100vh"}}>
<div style={{width:"40rem",display:"flex",height:"40rem",backgroundColor:"#5DBBFF"}}>
  {/* Logo goes here*/}
  <div style={{width:"30%",height:"100%"}}>

  </div>
  <div style={{position:"relative",display:"flex",flexDirection:"column",width:"70%",height:"100%"}}> 
  <button style={{color:"#D62A80",alignSelf:"flex-end",marginBottom:"100px",
      fontWeight:"500",top:"5vh",left:"60vw",
      zIndex:"2",fontSize:"30px",height:"100px",width:"200px",backgroundColor:"#351258"}}
       onClick={()=>navigate("/AdminsigninPage")}>Admin login</button>
  <form>
  <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} 
  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}}
    value={Password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password"/> 
    <button
     style={{position:"absolute",
     bottom:"5px",left:"0",color:"white",fontWeight:"500",top:"55vh",zIndex:"2",
     fontSize:"30px",height:"100px",width:"200px",backgroundColor:"#D62A80"}} onClick={handleSubmit} >Submit</button>

  </form>
  </div>
</div>
<h2 style={{fontSize:"20px"}}>Don't have an account register <a href="/register"  style={{color:"blue",}}>here</a></h2>

</div>
  );
};

export default LoginuserPage;
