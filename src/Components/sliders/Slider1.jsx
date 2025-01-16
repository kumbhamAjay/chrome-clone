import React from "react";
import slideImage1 from "../../assets/img1.webp";
import video from "../../assets/chrome-video.webm";
import "./Slider.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Slider1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slide-1",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".slide-1",
      {
         width : '90vw',
         y : -100,
         marginLeft : '5vw',
         x : '-15vw'
      },
      {
        y: 0,
        width : '60vw',
        height:"50vh",
        marginLeft : 0,
        x : 0
      },
      0
    );

    tl.to(
      "video",
    //   {
    //     top: "0%",
    //     right: "0%",
    //   },
      { width:"100%",
        top: "50%",
        right: "3rem",
        // marginRight:"100px"
      },
      0
    );
  });
  return (
    <div className="slide-1 slide">
      <div className="slide-content">
        <div className="slide-title">Prioritise performance</div>
        <div className="slide-text">
          Chrome is built for performance. Optimise your experience with
          features like Energy Saver and Memory Saver.
        </div>
      </div>
      <video className="video" style={{width:"100%",height:"100%",top:'0',objectFit:"fill",right:"0",left:"0",position:"absolute",border:'0px solid',backgroundColor:"white"}} autoPlay playsInline muted loop>
        <source src={video} />
      </video>
    </div>
  );
};

export default Slider1;