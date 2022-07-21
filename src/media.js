import hotroom1 from "./pages/Images/rooms/hotroom1.jpg"
import hotroom2 from "./pages/Images/rooms/hotroom2.jpg"
import hotroom3 from "./pages/Images/rooms/hotroom3.jpg"
import hotroom4 from "./pages/Images/rooms/hotroom4.jpg"
import hotroom5 from "./pages/Images/rooms/hotroom5.jpg"
const createId=()=>{
const objLetter={
    0:"A",
    1:"B",
    2:"C",
    3:"D",
    4:"E",
    5:"F",
    6:"G",
    7:"H",
    8:"I",
    9:"J",
    10:"K",
    11:"L",
    12:"M",
    13:"N",
    14:"O",
    15:"P",
    16:"Q",
    17:"R",
    18:"S",
    19:"T",
    20:"U",
    21:"V",
    22:"X",
    23:"Y",
    24:'Z'
  }
  const randomness=Math.floor(Math.random() *25)
  return ()=>{

return`${objLetter[0]}.${randomness}.${objLetter[randomness]}`
  }
}
  const hotRoomsObj=[
    {
    hotRoomImg:hotroom1,
    roomName:"Earth",
    discription:"",
    active:true,
    altText:"",
    statemessage(){
      return "Please sign in to review"
    },
    roomID:createId()()
    }
    ,{
      hotRoomImg:hotroom2,
      roomName:"Mars",
      discription:"",
      active:true,
      altText:"",
      statemessage(){
        return "Please sign in to review"
      },
      roomID:createId()()
      
    },
    {
      hotRoomImg:hotroom3,
      roomName:"Jupiter",
      discription:"",
      active:true,
      altText:"",
      statemessage(){
        return "Please sign in to review"
      },
      roomID:createId()()

    },
    {
      hotRoomImg:hotroom4,
      roomName:"Pluto",
      discription:"",
      active:true,
      altText:"",
      statemessage(){
        return "Please sign in to review"
      },
      roomID:createId()()
      },
      {
        hotRoomImg:hotroom5,
        roomName:"Venus",
        discription:"",
        active:true,
        altText:"",
        statemessage(){
          return "Please sign in to review"
        },
        roomID:createId()()
        }
  ]

  export {
    hotRoomsObj
  }