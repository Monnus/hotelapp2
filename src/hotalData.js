import "hotalData";
import { nanoid } from "nanoid";
export let hotalData={
"bestRoom":[
    {
        "id":nanoid(),
        title:"browny cake",
        "picture":require('./assets/hotelmages/rooms/hotroom1.jpg'),
        "state":false,
        description:"on bedroom with a king sized bed 2 king sized arm chaires tables to host guest of 5 people the theme of the romm miky white with brown cotted curtuns,TV and wifi included",
        "booked":false,
        color:"orange",
        room_cost:{
            room:5000
        }
        
    },
    {
        "id":nanoid(),
        title:"Two bedroom plus white snowy",
        "picture":require('./assets/hotelmages/rooms/hotroom2.jpg'),
        "state":false,
        description:`A two bedroom with TV and Wifi two restroom comes with a dinning room , person table and belcony `,
        "booked":false,
        color:"orange",
        room_cost:{
            room:4000,
        }
    },
    {
        "id":nanoid(),
        title:"first class Glowxxx",
        "picture":require('./assets/hotelmages/rooms/hotroom3.jpg'),
        "state":false,
        description:" first class laxuery comes with TV and wifi with 10 chair table with sun roof  in door jacuzzy",
        "booked":false,
        color:"orange",
        room_cost:{
            room:10000
        } 
    },
    {
        "id":nanoid(),
        title:"Open ended skyblue",
        "picture":require('./assets/hotelmages/rooms/hotroom4.jpg'),
        "state":false, 
        description:"belcony door view indoor jacuzzy 10 chair table Tv and wifi included",
        "booked":false,
        color:"orange",
        room_cost:{
            room:15000
        }
    },
    {
        "id":nanoid(),
        title:"2 bedroom red beary",
        "picture":require('./assets/hotelmages/rooms/hotroom5.jpg'),
        "state":false,
        description:"2 bed room  TV and wifi belcony 1 restroom ",      
        "booked":false,
        color:"orange",
        room_cost:{
            room:3000
        }
    }
  
],
"AdminaddRoom":[

],


}