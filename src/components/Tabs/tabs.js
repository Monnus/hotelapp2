
import Box from '@mui/material/Box';

import {Tabs} from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import { UserContext } from 'App';
import React,{useContext,useState,useEffect} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function TabsCreated({comboRoomNewandold,setSelectObjSummery}) {

  const hotelData=useContext(UserContext);

// const comboRoomNewandold=[...hotalData.AdminaddRoom,...hotalData.bestRoom];

console.log(comboRoomNewandold);
// console.log("hotal Data in tabs", hotelData);
    const TabOne=()=>{
      console.log( hotelData);
        return(
                <div style={tabsStyles.container}>
                     <h1>Hello world one</h1>
                </div>
        )
    };
    const noData=<h1 style={{fontSize:"60px",textAlign:"center",fontWeight:"800",color:"lightgray",backgroundColor:"rgba(255,255,255,0.5)"}}>No data available</h1>
    const TabTwo=()=>{
      return(
        <div style={tabsStyles.container}>
          <List sx={{position:"relative", width: '100%', maxWidth:"100%", bgcolor: 'gray' }}>
            {hotelData.AdminaddRoom==false&&hotelData.bestRoom==false?noData:comboRoomNewandold?comboRoomNewandold.map(data=>{
                  if(data.isNew){
                    return (
                      <>
                      <ListItem alignItems="flex-start" key={data.id} onClick={()=>setSelectObjSummery(data)}>
                        <ListItemAvatar>
                          <Avatar alt={data.title} src={data.picture} />
                        </ListItemAvatar>
                        
                        <ListItemText
                          primary={data.title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                              </Typography>
                              {"Cost:"+data.room_cost.room}
                            </React.Fragment>
                          }
                        />
                          <h2 style={{position:"absolute",right:"10px",top:"0px",textAlign:"center",fontSize:"30px",height:"60px",width:"90px",borderRadius:"100px",color:"white",fontWeight:"800",backgroundImage:"linear-gradient(to top, #4880EC, #019CAD)"}}>New</h2>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <br/>
                    </>
                    )
                  }
                  return(
                    <>
                    <ListItem alignItems="flex-start" key={data.id} onClick={()=>setSelectObjSummery(data)}>
                      <ListItemAvatar>
                        <Avatar alt={data.title} src={data.picture} />
                      </ListItemAvatar>
                      
                      <ListItemText
                        primary={data.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              
                            </Typography>
                            {"Cost:"+data.room_cost.room}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <br/>
                  </>
                  )
    }):noData}
    </List>
              </div>
      )
    };

    const TabThree=()=>{
      return(
        <div style={tabsStyles.container}>

                    <h1>Hello world Three</h1>

                </div>
      )
    }
    

    const tabs = [
        {
          label: 'Listings', // Tab Title - String
          Component: TabOne // Tab Body - JSX.Element
        },
        {
          label: 'Rooms Added',
          Component: TabTwo
        },
        {
          label: 'Users',
          Component: TabThree
        }
      ]

  
    return (
        <>
      <Tabs tabs={tabs} />
        </>

  )
}

export default TabsCreated


const tabsStyles={
  container:{width:"50vw",
  height:"50vh",
   backgroundColor:"lightgray",
   marginLeft:"20px",
   overflow: "auto",

}
}