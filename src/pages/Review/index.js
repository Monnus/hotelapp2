import React,{useState,useEffect,useContext} from "react";

import { UserContext } from "App";
import { Column, Stack, Img, Row, Text, Button } from "components";
import { id_image } from "components/landingPageComponents/middle";


import { Link, useNavigate } from "react-router-dom";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { object } from "prop-types";
import { getAuth, signOut } from "firebase/auth";


//beginning of review page
const ReviewPage = () => {

const [addedOptions,setAddedOptions]=useState({
  number_of_adult:null,
  number_of_children:null,
  How_many_rooms:null,
  TV:false,
  Wifi:false,
  Breakfast:false,
  Dinner:false,
  Launch:false,
  roomSelected:false,
  WifiCost:300,
  TVCost:500,
  LaunchCost:500,
  DinnerCost:500,
  BreakfastCost:500,
  total(){
    let total=0;
    if(this.number_of_adult)total=total+(this.number_of_adult*500);
    if(this.number_of_children)total=total+(this.number_of_children*150);
    if(this.How_many_rooms)total=total+(this.How_many_rooms*3000);
    if(this.TV==true)total=total+this.TVCost;
    if(this.Wifi)total=total+this.WifiCost;
    if(this.Breakfast)total=total+this.BreakfastCost;
    if(this.Dinner)total=total+this.DinnerCost;
    if(this.Launch)total=total+this.LaunchCost;
    return total;
  }
})
  const [total,setTotal]=useState(null);
   const hotalData=useContext(UserContext);
   console.log("hotalData",hotalData);

   const auth=getAuth()
  const navigate=useNavigate();
  console.log("id_image",id_image);

const reviewPagehotalData=Object.keys(hotalData).flatMap(element => {
  console.log(element);
  return hotalData[element].filter(data=>data.id===id_image);
});
console.log(reviewPagehotalData);



function handleReviewDetials(id){
 
  setAddedOptions(item=>Object.assign(addedOptions,addedOptions[id]===false?addedOptions[id]=true:addedOptions[id]=false))
  // caputureReviewDetail[id]===false?caputureReviewDetail[id]=true:caputureReviewDetail[id]=false;
  setTotal(item=>(addedOptions.total())+reviewPagehotalData[0].room_cost.room);

  console.log(addedOptions);
 console.log(addedOptions.total());

}
function handleInputNumbers(id,value){

  setAddedOptions(item=>Object.assign(addedOptions,addedOptions[id]=+value||null));
  setTotal(item=>(addedOptions.total())+reviewPagehotalData[0].room_cost.room);

}
useEffect(() => {
  addedOptions.total();
  setTotal(item=>(addedOptions.total())+reviewPagehotalData[0].room_cost.room);
  return total;
})
 



function handleBookingsId(id){
  navigate("/Review")
 }

 console.log(addedOptions.total());
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center mx-[auto] 3xl:pb-[109px] lg:pb-[70px] xl:pb-[80px] pb-[91px] w-[100%]">
        {/* ==================================================header=============================================== */}
    <div style={{height:"280px",width:"100%",backgroundColor:"skyblue",display:"flex", position:"relative",
    justifyContent:"center",backgroundImage:`url(${reviewPagehotalData[0].picture})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",marginBottom:"20px"}}>
<nav style={{height:"100px"}}>
<ul style={{}}>
<li style={{display:"inline-block",alignContent:"center"}}>
 <Link to="/"> < OtherHousesIcon  fontSize="large"/></Link>
  Home
</li>
<li style={{display:"inline-block"}}>
 <Link to="/AdminsigninPage"><SupervisorAccountIcon fontSize="large"/> Admin</Link> 
</li>
<li style={{display:"inline-block"}}>
 <Link to="/Bookings"><LibraryBooksIcon fontSize="LibraryBooksIcon"/> bookings</Link>
</li>
<li style={{display:"inline-block",cursor:"pointer"}}>
 <Link to="/ "onClick={()=>signOut(auth)}> <LogoutIcon fontSize="large " />logout</Link>
</li>
</ul>
</nav>
{/* ===========================================display room interia picture=========================== */}
<div  style={{position:"absolute",height:"90px",width:"80%",backgroundColor:"black",top:"200px",overflowX:"auto"}}>
  <img src={reviewPagehotalData[0].picture} alt="" style={{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"100px",height:"100%",marginRight:"5px"}}/>
</div>
    </div>
        <Row className="justify-between mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[92%]">
          <Text style={{padding:"auto "}}className="bg-blue_300 font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] mt-[4px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
            About This room
          </Text>
          <Column className="bg-bluegray_100 p-[4px] w-[30%]">
            <Text className="font-normal leading-[normal] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[30%]">
             Per Adult cost:R500
              <br />
             Per Child cost:R150
             <br/>
             Per Extra room :R3000
            </Text>
          </Column>
        </Row>
        <Column className="w-[93%]">
         <div style={{width:"50%",height:"10rem",color:"black", padding:"10px",border:"2px dashed black",backgroundColor:"lightgray",borderRadius:"1rem"}}>
         {reviewPagehotalData[0].description}
         </div>
          <Row className="justify-evenly mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] w-[100%]">
            <Column className="lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:pr-[347px] xl:pr-[397px] pr-[447px] 3xl:pr-[536px] w-[73%]">
            <Text>max number 6</Text>
            <input type="number" placeholder=" Number of adults" id="number_of_adult" min='1' max="6" style={{marginBottom:"50px"}} onChange={(e)=>handleInputNumbers(e.target.id,e.target.value)}/>
            <Text>max number 6</Text>
          <input type="number" placeholder="Children" min="1" max="6" id="number_of_children" style={{marginBottom:"50px"}}  onChange={(e)=>handleInputNumbers(e.target.id,e.target.value)}/>
            <Text>max number 6</Text>
              
              <input type="number" placeholder="How many Rooms" id="How_many_rooms" min="1" max="6" onChange={(e)=>handleInputNumbers(e.target.id,e.target.value)}/>
            

            </Column>
             {/* ==============================================checkbox for input======================================================= */}
            <Column className="bg-bluegray_100 justify-end lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px] w-[27%]">

            
              
 <input type="checkbox" id="Wifi" name="Wifi" value="Wifi" onClick={(e)=>handleReviewDetials(e.target.value)} defaultChecked={addedOptions.Wifi===true?true:false }/>  <label htmlFor="Wifi" style={{fontSize:"20px"}}>Wifi:R300</label><br/>
<input type="checkbox" id="TV" name="TV" value="TV"  onClick={(e)=>handleReviewDetials(e.target.value)} defaultChecked={addedOptions.TV===true?true:false }/> <label htmlFor="TV" style={{fontSize:"20px"}}>TV:500</label><br/>
<input type="checkbox" id="Dinner" name="Dinner" value="Dinner"  onClick={(e)=>handleReviewDetials(e.target.value)} defaultChecked={addedOptions.Dinner===true?true:false }/><label htmlFor="Dinner" style={{fontSize:"20px"}}>Dinner:R500</label><br/>
<input type="checkbox" id="Breakfast" name="Breakfast" value="Breakfast"  onClick={(e)=>handleReviewDetials(e.target.value)} defaultChecked={addedOptions.Breakfast===true?true:false }/><label htmlFor="Breakfast" style={{fontSize:"20px"}}>Breakfast:R500</label><br/>
<input type="checkbox" id="Launch" name="Launch" value="Launch"  onClick={(e)=>handleReviewDetials(e.target.value)} defaultChecked={addedOptions.Launch===true?true:false }/><label htmlFor="Launch" style={{fontSize:"20px"}}>Launch:R500</label><br/>



            
            </Column>
              {/* ==============================================checkbox for input======================================================= */}
          </Row>
          <Row className="justify-between lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[97%]">
            <Button onClick={()=>{
            setAddedOptions(item=>Object.assign(addedOptions,addedOptions.roomSelected=true));
            caputureReviewDetail=addedOptions;
              navigate("/Bookings")}} className="bg-pink_400 font-normal lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] not-italic outline outline-[1px] outline-black_900_33 lg:py-[17px] xl:py-[20px] py-[23px] 3xl:py-[27px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[30%]">
              Book Now
            </Button>
            <p style={{height:"80px",width:"120px",border:"1px  solid black",alignItems:"center",padding:"30px 10px " , margin:"0 70px 0 0"} }>
            Total..{total}
            </p>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export let caputureReviewDetail;

export default ReviewPage;