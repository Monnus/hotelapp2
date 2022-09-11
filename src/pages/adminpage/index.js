import { FormControl} from "@mui/material"
import React,{useEffect, useState,useContext } from "react"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import app from "firebaseConfig";
import {getStorage,ref,uploadBytesResumable} from "firebase/storage";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "App";

const AdminPage=()=>{

    const hotalData=useContext(UserContext);

    console.log(getStorage(app));
// ========================firebase upload==========================




function onSumbmitImage(e){
    e.preventDefault();
    if(!e.target[0].value) return alert("please fill in ID field");
    if(!e.target[1].value) return alert("please fill in Title feild");
    if(!e.target[2].value) return alert("You have not inserted an amount");
    if(!e.target[3].value) return alert("please give your room a description in discription field");
    if(!e.target[4].files[0].name) return alert("please upload a Image");

const newRoomObj={
id:e.target[0].value,
title:e.target[1].value,
picture:e.target[4].files[0].name,
state:false,
description:e.target[3].value,
"booked":false,
color:"orange",
room_cost:{
    room:+e.target[2].value,
}
}
    hotalData.bestRoom.push(newRoomObj)
  

            const metadata = {
        contentType: e.target[4].files[0].type
      };
    const storage= getStorage(app);
    const storageRef=ref(storage,`rooms/${e.target[4].files[0].name}`);
  
    uploadBytesResumable(storageRef,e.target.files[0],metadata).then(res=>{
    console.log(res,"file uploaded");
   }).catch(err=>console.error(err))
  
    return alert("room successfully created")
}

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



            <div style={{height:"100vh",width:"100%"}}>

        <form onSubmit={onSumbmitImage}>
            <label htmlFor="id">id</label>
            <br/>
            <input type="text" id="id" placeholder="Id for the room"/>
            <br/>
            <label htmlFor="name">Name of room</label>
            <br/>
            <input type="text" id="name" placeholder="Name of room" /> 
            <br/>
            <label htmlFor="PriceOfRooms">Price</label>
            <br/>
            <input type="number" id="PriceOfRooms" placeholder="numbr"/>
            <br/>
            <label htmlFor="description">insert description</label>
            <br/>
            <textarea placeholder="imput description" id="description"/>  
            <br/>
            <input type="file" />
            <br/>
  < button type="submit"  style={{backgroundColor:"lightgreen", height:"50px", width:"100px"}}>Submit</button>
        </form>
            
        </div>

        </>
            )


}
export default  AdminPage;