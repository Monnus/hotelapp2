import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system'
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


export default function Middle({hotRoomsObj, getId}) {
const [id,setId]=useState("")
useEffect(()=>{
  getId(id);
},[id])
  // console.log(hotRoomsObj);
const navigate=useNavigate();

  function handlesreviewclick(e){
    console.log(e.target.parentElement.parentElement.id);
    const id= e.target.parentElement.parentElement.id;
setId((prev)=>id);
navigate("/Review");
  }



  return (
  <main>
<section>

<Box sx={{flexGrow:1, background:"#5DBBFF",color:"white",fontSize:"20px"}}>
<Grid container spacing={2} >
        <Grid item lg={4}>
<div>
    <h3 className='useCenter'>whats new</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.</p>
</div>

  </Grid>

    <Grid item lg={4} className="spacialsBox">
    <div>
    <h3 className='useCenter'>Special deals</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.    
    </p>
</div>

 
  </Grid>


<Grid item lg={4}>
    <div>
    <h3 className='useCenter'>spacial events</h3>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus ante, tempus eu sollicitudin vel,
         iaculis quis nunc. Curabitur a ultricies tortor, in accumsan dolor.
          Etiam sed metus pulvinar, vestibulum arcu eu, finibus tellus.
           Cras laoreet, massa a cursus egestas, erat est aliquam quam, vitae commodo justo libero nec turpis. 
           Ut vel arcu massa. Proin rhoncus sagittis efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
           Etiam in risus quis sem pharetra gravida.    </p>
 </div>
</Grid>

        </Grid>

</Box>

</section>

<section>

<Container maxWidth="lg" sx={{margin:"0 200px 0 0"}}>
  <h3  style={{margin:"0 0 20px 50%",textAlign:"center",color:"white",width:"200px",height:"60px",background:"#048BCC",lineHeight:"60px"}}>Best selling rooms</h3>
<Box  sx={{background:"#5DBBFF",display:"flex",justifyContent:"space-around",height:"auto", flexWrap:"wrap"}}>
{hotRoomsObj.map((obj)=>{
  return( 
  <>
    <Card sx={{ maxWidth: 445,maxHeight:325,"&:hover":{opacity:0.9},}} key={`${obj.roomID}` }  id={obj.roomID}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={obj.hotRoomImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.roomName}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary" className="ReviewBtn" onClick={handlesreviewclick}>
          Review
        </Button>
      </CardActions>
    </Card>
  
  </>
  
    )
})}



</Box>

</Container>
<br></br>

<Container maxWidth="lg" sx={{width:"100%"}}>
<h2 style={{margin:"0 0 20px 50%",textAlign:"center",color:"white",width:"200px",height:"60px",background:"#048BCC",lineHeight:"60px"}}>Rooms</h2>
<Box sx={{maxHeight:"auto",width:"auto",boxShadow:" 0 0 10px #F5F5F5",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

{hotRoomsObj.map((obj)=>{
  return( 
  <>
    <Card sx={{ maxWidth: 445,maxHeight:325,"&:hover":{opacity:0.9},}} key={obj.roomName}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={obj.hotRoomImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.roomName}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          Review
        </Button>
      </CardActions>
    </Card>
  
  </>
  
    )
})}

</Box>
</Container>
</section>

  </main>
  )
}
