import React from "react";






       function  NavBar(props) {
           
  return (

    <React.Fragment>
    
      
      <header id ="entete">
              <nav id="menu">
                 <ul id="main">
                   {props.navLinks.map((el,i) => { return( <li key={i}> 
                   <a href={el.href}> {el.link} </a>
                    </li> )
                  } ) }
                 </ul>
               </nav>
       </header>

    
    </React.Fragment>
  );
}

export default NavBar;