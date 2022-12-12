import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SpaIcon from "@mui/icons-material/Spa";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import DiamondIcon from "@mui/icons-material/Diamond";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { parse } from "postcss";
import { hotalData } from "hotalData";
import { useSpring, animated } from '@react-spring/web'
// import { useInView } from "react-intersection-observer";
import { InView } from 'react-intersection-observer';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "App";
import "./landingpage.css";
export default function Middle({ hotRoomsObj }) {
  const theme = createTheme({
    palette: {
      bookingscolor: {
        main: "orange",
      },
    },
  });
 
    const springs = useSpring({
      from: {
        opacity: 0,
        y:"10%",
        transition:"0"
      },
      to: { 
        opacity: 1,
        y:"0",
     transition:"2s ease-in-out"
    },
    });


  const hotalData = useContext(UserContext);
const containeRooms=document.querySelector(".container-for-rooms");



  console.log("container-room ",containeRooms);
  const navigate = useNavigate();
  function handleBookingsId(id) {
    navigate("/review", {
      state: {
        getID: id,
      },
    });
  }

  const newRoom = hotalData.NewRooms.map((data) => {
    return (
      <>
        <Card
          sx={{ maxWidth: 345, minWidth: 345 }}
          key={data.id}
          style={{
            position: "relative",
            margin: "10px",
            padding: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <h2
            style={{
              position: "absolute",
              right: "10px",
              top: "0px",
              textAlign: "center",
              fontSize: "30px",
              height: "60px",
              width: "90px",
              borderRadius: "100px",
              color: "white",
              fontWeight: "800",
              backgroundImage: "linear-gradient(to top, #4880EC, #019CAD)",
              
            }}
          >
            New
          </h2>

          <CardMedia component="img" height="140" image={data.picture} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button
                color="bookingscolor"
                variant="contained"
                style={{ fontWeight: "600" }}
                size="small"
                onClick={() => handleBookingsId(data.id)}
              >
                Review
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </>
    );
  });
  const bestSelling = hotalData.bestRoom.map((data) => {
    return (
      <>
        <Card
          sx={{ maxWidth: 345 }}
          key={data.id}
          style={{
            position: "relative",
            margin: "10px",
            padding: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={data.picture}
            alt="Room Images"
          />
          {/*    
    <Box
     component="div"
      sx={{ height:"150px",backgroundImage:`url(${data.picture})`,width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}
    > */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button
                color="bookingscolor"
                variant="contained"
                style={{ fontWeight: "600" }}
                size="small"
                onClick={() => handleBookingsId(data.id)}
              >
                Review
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </>
    );
  });

  return (
    <main>
      <section>
        <Box
          sx={{
            flexGrow: 2,
            maxWidth: "95%",
            marginLeft: "2.5%",
            background: "#048BCC",
            color: "white",
            fontWeight: "500",
            padding: "0.5rem",
            fontSize: "1.1rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <div style={{ textAlign: "center" }}>
                <SpaIcon
                  sx={{
                    fontSize: "5rem",
                    color: "black",
                    border: "2px solid white",
                    borderRadius: "100%",
                    width: "6rem",
                    height: "6rem",
                  }}
                />
                <p>
                  Ower spa is located where mineral-rich spring water (and
                  sometimes seawater) is used to give medicinal baths. we have
                  Spa towns or spa resorts (including hot springs resorts) which
                  typically offer various health treatments, which are also
                  known as balneotherapy. The belief in the curative powers of
                  mineral waters goes back to prehistoric times. Such practices
                  have been popular worldwide, interested ,the why don't you
                  join us!{" "}
                </p>
              </div>
            </Grid>

            <Grid item lg={4} className="spacialsBox">
              <div style={{ textAlign: "center" }}>
                <MapsHomeWorkIcon
                  sx={{
                    fontSize: "5rem",
                    color: "black",
                    border: "2px solid white",
                    borderRadius: "100%",
                    width: "6rem",
                    height: "6rem",
                  }}
                />
                <p>
                  Establishment's that provides paid lodging on a short-term
                  basis. Facilities provided inside a hotel room may range from
                  a modest-quality mattress in a small room to large suites with
                  bigger, higher-quality beds, a dresser, a refrigerator and
                  other kitchen facilities, upholstered chairs, a flat screen
                  television, and en-suite bathrooms. Small, lower-priced hotels
                  may offer only the most basic guest services and facilities.
                  Larger, higher-priced hotels may provide additional guest
                  facilities such as a swimming pool, business centre (with
                  computers, printers, and other office equipment), childcare,
                  conference and event facilities, tennis or basketball courts,
                </p>
              </div>
            </Grid>

            <Grid item lg={4}>
              <div style={{ textAlign: "center" }}>
                <DiamondIcon
                  sx={{
                    fontSize: "5rem",
                    color: "black",
                    border: "2px solid white",
                    borderRadius: "100%",
                    width: "6rem",
                    height: "6rem",
                  }}
                />
                <p>
                  Feeling as if you want to stay in some Historics classical
                  hotels,viste or even stay in ower referebrisher hotels that
                  have maintained their authenticity, sense of place, and
                  architectural integrity, come and be part of the culture.
                  participate in new experinces, partake in people, in nature.
                  feel the times{" "}
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section>
        <Container maxWidth="lg" sx={{ margin: "0 200px 0 0" }}>
          <h3
            style={{
              margin: "0 0 20px 50%",
              textAlign: "center",
              color: "white",
              width: "200px",
              height: "60px",
              background: "#048BCC",
              borderRadius: "0.1rem",
              lineHeight: "60px",
            }}
          >
            Best selling rooms
          </h3>
          {/* className="container-for-rooms" */}
          <InView>
{({inView,ref,entry})=>{
  console.log("it is in view",inView);
  
    return(
      <animated.div  ref={ref}
      style={{   
        background:" #5DBBFF",
        display: "flex",
        justifyContent:"space-around",
        height: "auto",
        flexWrap: "wrap",
        ...springs,}}
        >
        {newRoom}
      </animated.div>
 )
  
}}
          </InView>
        </Container>
        <br></br>

        <Container maxWidth="lg" sx={{ width: "100%" }}>
          <h3
            style={{
              margin: "0 0 20px 50%",
              textAlign: "center",
              color: "white",
              width: "200px",
              height: "60px",
              background: "#048BCC",
              lineHeight: "60px",
            }}
          >
            Rooms
          </h3>
          <Box
            sx={{
              maxHeight: "auto",
              width: "auto",
              boxShadow: " 0 0 10px #F5F5F5",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {bestSelling}
          </Box>
        </Container>
      </section>
    </main>
  );
}
