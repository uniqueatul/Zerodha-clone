

import React from "react";
function Navbar() {
    return ( <>
    
        <nav class="navbar navbar-expand-lg border-bottom  " style={{backgroundColor: "#fff"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="media/logo.svg" alt="LOGO" style={{width: "25%"}} /> 
        </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
        
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        
        
     
      <form class="d-flex" role="search">

       
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">

         <ul><li class="nav-item">
          <a class="nav-link"  href="#">Home</a>
        </li></ul>
        <li class="nav-item">
          <a class="nav-link" href="#">signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">product</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">pricing</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">support</a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
        

   
    </> );
}

export default Navbar;