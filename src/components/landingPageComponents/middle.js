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
import { parse } from 'postcss';
import { hotalData } from 'hotalData';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Middle({hotRoomsObj}) {
const theme=createTheme({
  palette:{
  bookingscolor:{
      main:"orange"
    }
  }
})
const {bestRoom:bestRooms}=hotalData;
console.log("best rooms",bestRooms);

  // console.log(hotRoomsObj);
const navigate=useNavigate();
function handleBookingsId(id){
 id_image=id;
 navigate("/Bookings")
}
  const bestSelling=bestRooms.map(data=>{
    return(
      <>
      <Card sx={{ maxWidth: 345 }} key={data.id} style={{margin:"10px",padding:"auto",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <CardMedia
        component="img"
        height="140"
        image={data.picture}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
     
      </CardContent>
      <CardActions>
       <ThemeProvider theme={theme}>
        <Button color="bookingscolor" variant="contained" 
        style={{fontWeight:"600"}} size="small" onClick={()=>handleBookingsId(data.id)}>Review</Button>
       </ThemeProvider>

      </CardActions>
    </Card>
      </>
    )
  })


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



{bestSelling}


</Box>

</Container>
<br></br>

<Container maxWidth="lg" sx={{width:"100%"}}>
<h2 style={{margin:"0 0 20px 50%",textAlign:"center",color:"white",width:"200px",height:"60px",background:"#048BCC",lineHeight:"60px"}}>Rooms</h2>
<Box sx={{maxHeight:"auto",width:"auto",boxShadow:" 0 0 10px #F5F5F5",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>


</Box>
</Container>
</section>

  </main>
  )
}
export let id_image="";