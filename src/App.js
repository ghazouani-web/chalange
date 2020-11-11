import React from "react";
import NavBar from "./component/NavBar";
import Profil from "./component/Profile";
import Project from "./component/Project";
import Footer from "./component/Footer";



import './App.css';



const Card =[
  
  {
    img:"iot.jpg",
    descript:"Definition of the complete IoT architecture.Know the specificities of IoT networks. Identification of the different communication protocols.",
    lien:"#"
  },
  {
    img:"stm32.png",
    descript:"Remote control via a web page.Addition of a USB camera to the robot for surveillance and video streaming for facial recognition.",
    lien:"#"
  },
  {
    img:"raspberrypi.jpg",
    descript:"Definition of the STM32 architecture Modules handling: GPIO, EXTI, ADC, DAC  Handling of TIM control modules",
    lien:"#"
  },
  {
    img:"devweb.png",
    descript:"this training is focused on two parts: Front-end: Html,Css,JavaScript,React&Redux Back-end: Node.JS,MongoDB,ExpressJS,Git",
    lien:"#"
  }

];





const NavList =[
              {link:"About",
                href:"#about"
              },
              {
                  link:"projet",
                href:"#project"
              },
              {
                link:"contact",
                href:"#contact"
              }
            ];

function App() {
  return (
    <div className="App">
      <NavBar navLinks={NavList}/>
      <Profil name=" ghazouani chayma"/>
      <Project  Card={Card}/>
      <Footer copyright="ghazouani"  Year="1993"/>
    </div>
  );
}

export default App;
