import React from "react";
import {FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
     <div class="content has-text-centered">
    <p>
      <strong>Portfolio</strong> by Emma Cunningham 
      <a href="https://github.com/empc313" target="blank">
<FaGithub/>
      </a>
      <a href="https://www.linkedin.com/in/emma-cunningham-951b12152/" target="blank">
       <FaLinkedin/>
        </a>
        <a href="https://stackoverflow.com/users/21638753/emma" target="blank">
       <FaStackOverflow/>
        </a>

        
    </p>
   
  </div>
    </footer>
  )
}