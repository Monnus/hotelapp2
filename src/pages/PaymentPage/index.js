import React,{useEffect,useContext}from 'react'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../Images/Frame33_logo.png";
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import paymentImage from "../Images/paymentImage.svg";
import { id_image } from 'components/landingPageComponents/middle';
import { UserContext } from "App";

function  PaymentPage() {
    const hotelDate = useContext(UserContext)
  const auth=getAuth();

    const onSumbetPayment=(event)=>{
        event.preventDefault();
        let formInputsArr=Array.from(event.target);
        formInputsArr.pop();
      if(formInputsArr.some(input=>!input?.value))return alert("you have not Filled in all the fields");
        hotelDate.Users.forEach(element => {
            if(element.id===id_image){
                element.paid=true;
            }
        });
     
        console.log(hotelDate);
    }
  return (
    <div style={{height:"100vh"}} >
        
        <div style={{height:"140px",width:"100%",display:"flex",justifyContent:"space-between",height:"150px",width:"100%",alignItems:"center",marginBottom:"10px"}}>
        <div style={{height:"auto",width:"auto"}}><img src={logo} className="logo" alt=""/></div>
        <nav style={{height:"100px"}}> 
            <ul style={{}}>
                <li style={{display:"inline-block",color:"black",alignContent:"center"}}>
                <Link to="/"> < OtherHousesIcon  fontSize="large"/> Home </Link>
                </li>
         
                <li style={{display:"inline-block",color:"black"}}>
                <Link to="/Bookings"><LibraryBooksIcon fontSize="LibraryBooksIcon"/> bookings</Link>
                </li>
                <li style={{display:"inline-block",color:"black"}}>
                <Link to="/" onClick={signOut(auth)}> <LogoutIcon fontSize="large "/>logout</Link>
                </li>
            </ul>
        </nav>
{/* ===========================================display room interia picture=========================== */}
    </div>
<div style={{boxShadow:"2px 2px 20px #F5F5F5",padding:"3rem 0 0 0",width:"75%",height:"100%",backgroundImage:`url(${paymentImage})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",}}>
    <form  onSubmit={onSumbetPayment} style={{marginLeft:'10%',minWidth:"auto",maxWidth:"55rem",fontSize:"1rem",fontWeight:"600"}}>
        <div style={{display:"flex",flexDirection:"column",width:"25rem",float:"right",border:"1px solid lightblue",justifyContent:"center",padding:"1.5rem"}}>
            <label>Name of Card</label>
            <input type="text" placeholder='Name of Card' style={{height:"5rem",width:"20rem",fontSize:"1.5rem"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",width:"25rem",border:"1px solid lightblue",justifyContent:"center",padding:"1.5rem",}}>
        <label>Card Number</label>
            <input type="text" placeholder='Card Number' style={{height:"5rem",fontSize:"1.5rem",width:"20rem"}}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div  style={{display:"flex",flexDirection:"column",width:"25rem",border:"1px solid lightblue",justifyContent:"center",padding:"1.5rem",float:"right"}}>
        <label>Experation Date</label>
            <input type="date" placeholder='Card Number'  style={{height:"5rem",width:"20rem",fontSize:"1.5rem"}}/>
        </div>
        <div  style={{display:"flex",flexDirection:"column",width:"25rem",border:"1px solid lightblue",justifyContent:"center",padding:"1.5rem"}}>
        <label>CVV code</label>
            <input type="text" placeholder='CVV code E.g 721'  style={{height:"5rem",width:"20rem",fontSize:"1.5rem"}}/>
        </div>
        <br/>
<button type='submit'style={{backgroundColor:"#90EE90",width:"20rem",height:"5rem",color:"white",fontSize:"2rem",borderRadius:"0.5rem"}} >Pay now</button>
    </form>
</div>


    </div>
  )
}

export default PaymentPage;
