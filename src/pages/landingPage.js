import React,{useState,useEffect} from 'react'
import "../styles/landingpage.css"
import Header from "../components/landingPageComponents/header"
import Middle from "../components/landingPageComponents/middle"
import Footer from "../components/landingPageComponents/footer"

import {hotRoomsObj} from "../media"


export default function LandingPage() {
  const [id,setId]=useState(null);
  console.log(id);
useEffect(()=>{
  console.log(id);
},[id])
  return (
    <div  className='Page'>
        <Header/>
          <Middle hotRoomsObj={hotRoomsObj} setId={setId}/>
            <Footer/>
        </div>
  )
}
