import React,{useContext} from "react";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { Column, Text, Row, Button } from "components";
import { fontSize } from "@mui/system";
import app from "firebaseConfig";
import "../../styles/register.css"
import { create } from "@mui/material/styles/createTransitions";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { UserContext } from "App";

const SigninPage = () => {
  const hotalData = useContext(UserContext);
  const navigate=useNavigate();
  
  // ==========================submit function==============================
  const handleSubmite=(e)=>{
    e.preventDefault();
    const auth=getAuth(app);
    const createArrayNodes=Array.from(e.target);
console.log(createArrayNodes);
createArrayNodes.forEach((inputs)=>{
  console.log(inputs.value);
})
// if(createArrayNodes.some((inputs)=>inputs.value==false))return alert("You have empty fileds, please fill in all");
const localUserCreated={
  Name:createArrayNodes[0].value,
  Surname:createArrayNodes[1].value,
  PhoneNumber:createArrayNodes[2].value,
  IDNumber:createArrayNodes[3].value,
  id:nanoid(),
  Email:createArrayNodes[4].value,
  Password:createArrayNodes[5].value,
  PhoneImage:createArrayNodes[6].files,
  AGE:createArrayNodes[7].value,
};
console.log(createArrayNodes[0].value,createArrayNodes[4].value);
createUserWithEmailAndPassword(auth,createArrayNodes[4].value,createArrayNodes[5].value).then((res)=>{
  console.log(res,"user created");
  
  const localStorage=window.localStorage;

  localStorage.setItem(`${localUserCreated.Name+localUserCreated.Surname}`,JSON.stringify(localUserCreated));
  hotalData.Users.push(localUserCreated);

  navigate("/signin");
}).catch((err)=>{
  console.log(err);
  return; 
});
}





  return (
    <div style={{width:"100%",height:"100vh"}}>
      <button style={{color:"#D62A80",position:"absolute",
      fontWeight:"500",top:"5vh",left:"60vw",
      zIndex:"2",fontSize:"30px",height:"100px",width:"200px",backgroundColor:"#351258"}}
       onClick={()=>navigate("/AdminsigninPage")}>Admin login</button>
    <h2>Welcomed to Crown Plaza Hotel  best hotel  booking made easy simple 
    </h2>
      <h3>with afordable price best accomadations available</h3>

      <div style={{position:"relative", marginBottom:"270px",
      display:"flex",flexDirection:"column",
      top:"10vh",left:"10vw",padding:"50px 0 ",width:"30rem",height:"50vh",backgroundColor:"#5DBBFF"}}>
        <form onSubmit={(e)=>handleSubmite(e)}>      
    <input  style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="Name" /> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="Surname"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="Number"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="ID Number"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="Email"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="text" placeholder="Password"/> 
   <div style={{display:"flex",}}>
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}} type="file" placeholder="Image"/> 
    <input style={{color:"gray",borderColor:"#048BCC",borderWidth:"5px", fontSize:"20px", width:"100%",borderRadius:"10px"}}  type="number" placeholder="AGE"/> 
   </div>
     <button style={{color:"white",position:"absolute",fontWeight:"500",top:"55vh",zIndex:"2",fontSize:"30px",height:"100px",width:"200px",backgroundColor:"#D62A80"}} >Submit</button>
        </form>


      </div>
<h2 style={{fontSize:"20px"}}>already have an account Signin <a href="/signin"  style={{color:"blue",}}>here</a></h2>
    </div>
    
  );
};

export default SigninPage;
