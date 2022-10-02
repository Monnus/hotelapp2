import React,{useEffect, useState,useContext } from "react"
import { Box, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { lightGreen } from '@mui/material/colors';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index";
import { borderRadius, style } from '@mui/system';
import { UserContext } from 'App';
import app from "firebaseConfig";
import {getStorage,ref,uploadBytesResumable} from "firebase/storage";
import { nanoid } from "nanoid";


const FabBtn=({color="#0065C4"})=>{
  const hotalData=useContext(UserContext);

  // console.log(getStorage(app));
  console.log(hotalData);

  function onSumbmitImage(e){
    console.log(e);
    e.preventDefault();
    if(!e.target[0].value) return alert("please fill in ID field");
    if(!e.target[1].value) return alert("please fill in Title feild");
    if(!e.target[2].value) return alert("You have not inserted an amount");
    if(!e.target[3].value) return alert("please give your room a description in discription field");
    if(!e.target[4].files[0].name) return alert("please upload a Image");

const newRoomObj={
id:nanoid(),
title:e.target[1].value,

picture:require(`../../pages/Images/rooms/${e.target[4].files[0].name}`),
state:false,
description:e.target[3].value,
"booked":false,
color:"orange",
isNew:true,
room_cost:{
    room:+e.target[2].value,
}
}
    hotalData.AdminaddRoom.push(newRoomObj);
  

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


      return(

        <Popup trigger={<button style={{position:"absolute",
        border:"2px solid rgba(0,0,0,0.2)",
        boxShadow:"2px 2px  10px lightgray",
        borderRadius:"100px",backgroundColor:color,height:"70px",
        top:"50vh",
        right:"80px",
         width:"70px"}}  on={['hover', 'focus']}><AddIcon fontSize="large"/></button>} position="left center">

  <div style={{height:"auto",width:"300px",backgroundColor:"rgba(0, 84, 119,0.8)",borderRadius:"5px", boxShadow:"5px -2px 10px lightgray"}}>
  <form onSubmit={onSumbmitImage}style={{height:"auto", width:"auto", padding:"5px",margin:"5px"}}>
            <label style={inputStyles.labels} htmlFor="id">ID</label>
            <br/>
            <input style={inputStyles.inputs}type="text" id="id" placeholder="Id for the room"/>
            <br/>
            <label  style={inputStyles.labels} htmlFor="name">Name of room</label>
            <br/>
            <input style={inputStyles.inputs} type="text" id="name" placeholder="Name of room" /> 
            <br/>
            <label  style={inputStyles.labels} htmlFor="PriceOfRooms">Price</label>
            <br/>
            <input style={inputStyles.inputs} type="number" id="PriceOfRooms" placeholder="numbr"/>
            <br/>
            <label  style={inputStyles.labels}  htmlFor="description">Insert description</label>
            <br/>
            <textarea placeholder="imput description" id="description"/>  
            <br/>
            <input  style={{color:"rgba(0, 84, 119,0)"}} type="file" />
            <br/>
        < button type="submit"  style={inputStyles.btn}>Submit</button>
        </form>           
        </div>
</Popup>
        )
}

export default FabBtn

const inputStyles={
  inputs:{
    width:"90%",
    height:"35px",
    color:"gray",
    borderRadius:"2px",
    borderColor:"lightgray",
  },
  labels:{
    fontSize:"20px",
    fontWeight:"500",
    color:"white",
    marginLeft:"10px",
  },
  btn:{
    backgroundColor:"lightgreen",
     height:"50px", 
     width:"100px",
     marginLeft:"70px",
     borderRadius:"4px",
     fontWeight:"400",
     boxShadow:"2px 2px 10px rgba(0, 84, 119,0.8)"
    }
  
  
}