import React,{useState,useEffect,useContext} from "react";
import { nanoid } from "nanoid";
import { id_image } from "components/landingPageComponents/middle";
import { List, Row, Column, Text, Input, Img, Line } from "components";
import { caputureReviewDetail } from "pages/Review";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { UserContext } from "App";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";



const BookingspagePage = () => {
  const navigator=useNavigate();
  const hotalData=useContext(UserContext);
const auth=getAuth();
  const bookingsArr= new Set([]);
  let renderArr=[];
  // bookingsArr.clear()

  console.log("hotalData",hotalData); 

  if(caputureReviewDetail.roomSelected){
   const newObj= Object.keys(hotalData).flatMap(name=>{
      // console.log("hotalData",hotalData[name]);
return hotalData[name].filter(item=>{
  if(item.id===id_image){
    return item;
  }else{
    return }
  })

})

bookingsArr.add({objID:nanoid(),id_image,...caputureReviewDetail,...newObj[0]})
; 
}     

  console.log("caputureReviewDetail",caputureReviewDetail)

  console.log("bookings",bookingsArr)

bookingsArr.forEach(value=>{
  if(value){
    renderArr.push(value)
    }
    return 
    }) 

const handleBtn=(e)=>{
  if(e.target.id=="delete"){
    renderArr.forEach((data,i,arr)=>{
      if(data.data.id===e.target.dataset.id){
      console.log(data,i);
      renderArr.splice(1)
      
      alert("bookings removed");
    }
  })
  }else if(e.target.id==="booking"){
    for(let i=0;i<renderArr.length;i++){
      if(renderArr[i].id===e.target.dataset.id){
        renderArr[i].booked=true;
      console.log("e.target.dataset.id",e.target.dataset.id,"renderArr[i].id",renderArr[i].id,"renderArr[i]",renderArr[i]);
      hotalData.Users.push(renderArr[i]);
      }
    }
  navigator("/payments")
  }
// console.log(e.target.dataset.id);
}
    console.log("renderArr",renderArr)

const renderUserarr=hotalData.Users.map(obj=>{
  if(obj.paid===true){

    return(
      <>
    <Row className="bg-white_A700 items-center lg:my-[19px] xl:my-[21px] my-[24.5px] 
    2xl:my-[24px] 3xl:my-[29px] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]" key={obj.objID}>
    <Box
   sx={{
    display:"flex",
    flexDirection:"column",
    width: "100%",
    marginRight:"100px",
    justifyContent:"space-around",
    height: "100%",
   
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}
>
<div style={{
fontWeight:"500",width:"70%",height:"50px", borderRadius:"10px",background:"lightgray",alignContent:"center"}}><h3>@Hotal {obj.title}</h3></div>

<div style={{fontSize:"30px",fontWeight:"500",width:"70%",height:"50px",borderRadius:"10px",background:"lightgray"}}>Room cost {obj.room_cost.room}</div>
<div  style={{fontSize:"15px",fontWeight:"500",width:"70%",height:"50px",borderRadius:"10px",background:"lightgray"}}>
Room type:<br></br>
Room :X_</div>

<div  style={{fontSize:"15px",fontWeight:"500",width:"70%",height:"70px",borderRadius:"10px",background:"lightgray"}}>
stay:3 days, adults:{2 || obj.number_of_adult}
<br></br>
hospitalization: luxery: children: {0 && obj.number_of_children}
</div>
    </Box>
      <Column className="items-center w-[29%]">
      <Box
  sx={{
    width: 300,
    height: "100%",
    backgroundColor: 'lightgray ',
    marginBottom:"5px",
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}>
    </Box>
        <Img
          src={obj.picture}
          className="lg:h-[181px] xl:h-[207px] h-[232px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]"
          alt="previewImg"
        />
    <div style={{display:"flex",height:"auto",width:"100%",justifyContent:"space-between"}}>
      <h2 style={{color:obj.color,fontWeight:"bold",backgroundColor:"blue",boxShadow:"2px 2px 20px lightgray",padding:"5px",margin:"2px"}}>Booked & Paid</h2>
    </div>

      </Column>
    </Row>
    </>
  )
}else{
  return;
}
})



    const renderJsx=renderArr.map(dataArr=>{
      return(
        <>
        <Row className="bg-white_A700 items-center lg:my-[19px] xl:my-[21px] my-[24.5px] 
        2xl:my-[24px] 3xl:my-[29px] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]" key={dataArr.objID}>
        <Box
       sx={{
        display:"flex",
        flexDirection:"column",
        width: "100%",
        marginRight:"100px",
        justifyContent:"space-around",
        height: "100%",
       
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
<div style={{
fontWeight:"500",width:"70%",height:"50px", borderRadius:"10px",background:"lightgray",alignContent:"center"}}><h3>@Hotal {dataArr.title}</h3></div>

<div style={{fontSize:"30px",fontWeight:"500",width:"70%",height:"50px",borderRadius:"10px",background:"lightgray"}}>Room cost {dataArr.room_cost.room}</div>
<div  style={{fontSize:"15px",fontWeight:"500",width:"70%",height:"50px",borderRadius:"10px",background:"lightgray"}}>
  Room type:<br></br>
Room :X_</div>

<div  style={{fontSize:"15px",fontWeight:"500",width:"70%",height:"70px",borderRadius:"10px",background:"lightgray"}}>
stay:3 days, adults:{2 || dataArr.number_of_adult}
<br></br>
hospitalization: luxery: children: {0 && dataArr.number_of_children}
</div>
        </Box>
          <Column className="items-center w-[29%]">
          <Box
      sx={{
        width: 300,
        height: "100%",
        backgroundColor: 'lightgray ',
        marginBottom:"5px",
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
            <Img
              src={dataArr.picture}
              className="lg:h-[181px] xl:h-[207px] h-[232px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]"
              alt="previewImg"
            />
        </Box>
        <div style={{display:"flex",height:"auto",width:"100%",justifyContent:"space-between"}}>
     <Button id="delete" data-id={dataArr.id} 
      color="error" size="large" variant="contained" startIcon={<DeleteIcon/>} onClick={handleBtn}>Delete</Button>
    <Button id="booking" data-id={dataArr.id} size="large" variant="contained" endIcon={<SendIcon />} onClick={handleBtn}>Accept</Button>
        </div>

          </Column>
        </Row>
        </>
      )
    })

  // bookingsArr.map((value)=>console.log("jcnccc",value));

  return (
    <>
        <div style={{height:"180px",width:"100%",backgroundColor:"skyblue",display:"flex", position:"relative",
    justifyContent:"center",marginBottom:"20px"}}>
<nav style={{height:"100px"}}>
<ul style={{}}>
<li style={{display:"inline-block",alignContent:"center"}}>
 <Link to="/"> < OtherHousesIcon  fontSize="large"/> Home </Link>

</li>
<li style={{display:"inline-block"}}>
 <Link to="/AdminsigninPage"><SupervisorAccountIcon fontSize="large"/> Admin</Link> 
</li>
<li style={{display:"inline-block"}}>
 <Link to="/Bookings"><LibraryBooksIcon fontSize="LibraryBooksIcon"/> bookings</Link>
</li>
<li style={{display:"inline-block"}}>
 <Link to="/" onClick={signOut(auth)}> <LogoutIcon fontSize="large "/>logout</Link>
</li>
</ul>
</nav>
{/* ===========================================display room interia picture=========================== */}

    </div>
      <List
        className="bg-bluegray_100 font-inter gap-[0] min-h-[auto] mx-[auto] lg:py-[22px] xl:py-[25px] py-[29px] 3xl:py-[34px] w-[100%]"
        orientation="vertical" 
      >
{renderJsx}
<br/>
{renderUserarr}
      </List>
    </>
  );
};

export default BookingspagePage;
