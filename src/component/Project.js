import React from "react";

function Project(props){
    return(
<div className="container" >

{props.Card.map(function(el,i){ return (
<div className="project-card">
<img  className="image-card"src={el.img} alt="project" /> 
<p>{el.descript}</p> 
 <p> Github <a href={el.lien}> link</a> </p> 
</div>)})
}</div>)}
export default Project;
