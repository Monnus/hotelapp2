import React from 'react'
import {Box} from "@mui/material"
import footerBg from "../../pages/Images/Frame33_Vector31.png"
import Gmail from "../../pages/Images/links/gmail.png";
import  Email from "../../pages/Images/links/email.png";
import facebook from "../../pages/Images/links/facebook.png";
import twitter from "../../pages/Images/links/twitter.png";

export default function Footer() {
  return (
    
    <Box component="footer" 
    sx={{backgroundImage:`url(${footerBg})`,color:"white"}}>

<div>
    <h3>About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra egestas lorem, 
        in dapibus enim rutrum nec. Nunc sagittis vulputate tincidunt. Praesent enim justo,
         mattis sed consectetur eu, cursus vitae lectus. Nullam eget orci nunc. Duis augue nunc, 
         sodales nec lacus eu, blandit tristique lacus. Vestibulum eu turpis orci. Nulla facilisi.
          Fusce et justo pellentesque, laoreet enim sit amet, dapibus quam. Aliquam egestas commodo gravida.</p>
</div>

<div>
<ul>
    <li><img src={facebook}/></li>
    <li><img src={Gmail}/></li>
    <li><img src={Email}/></li>
    <li><img src={twitter}/></li>
  
</ul>

</div>
    </Box>
      
  )
}
