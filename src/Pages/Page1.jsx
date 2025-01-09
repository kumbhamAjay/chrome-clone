import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "../Components/nav";
import logo from "../assets/chrome-logo-m100.svg";
import video1 from "../assets/chrome-video.webm";
import { useGSAP } from "@gsap/react";
import { MdOutlineFileDownload, MdSpeed } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);
const Page1 = () => {
  const text = ["fast", "safe", "yours"];
  const color = ["green", "blue", "red"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  let t1=gsap.timeline()
  useGSAP(() => {
    gsap.to('.video',{
        scaleX:1.3,
        
        duration:1,
        scrollTrigger:{
            trigger:'.video',
            pin:true,
            start:'top 75%',
            end:'top 55%',
            scrub:2,
            // markers:true
        }
    }),
    gsap.fromTo('.heading h1',{
      opacity:'0'
    },
      {
      top:'',
      opacity:'1',
      scrollTrigger:{
        trigger:'.video',
        pin:true,
        start:'top 75%',
        end:'top 55%',
        scrub:1,
        // markers:true
    }

    }),
    gsap.to('video',{
      // height:'400px',
      marginTop:'100px',
      x:"-10%",
      y:"30%",
     
      margin:'auto',
      scrollTrigger:{
        trigger:'.cont',
        pin:true,
        start:'top 10%',
        end:'top -10%',
        // markers:true,
        scrub:2
      }

    }),
    gsap.to('.video',{
      height:'400px',
      border:'1px solid grey',
      scrollTrigger:{
        trigger:'.cont',
        // pin:true,
        start:'top 20%',
        end:'top -15%',
        // markers:true,
        scrub:2
      }

    })
    
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();

      // Animate the current text up
      tl.to(".animated-text", {
        y: "-10px",
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Change the text and color after the animation completes
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
        },
      });

      // Animate the new text coming from the bottom
      tl.fromTo(
        ".animated-text",
        { y: "10%", opacity: 0 },
        { y: "-10%", opacity: 1, duration: 0.5 }
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div style={styles.page1}>
      <Nav />
      <div style={styles.content}>
        <img src={logo} alt="" />
        <p style={{ fontSize: "80px" }}>
          The Browser
          <br /> built to be{" "}
          <span
            className="animated-text"
            style={{
              height: "50px",
              color: `${color[currentTextIndex]}`,
              backgroundColor: `${color[currentTextIndex]}33`, // Low intensity background
              borderRadius: "40px",
              padding: "10px",
              //   display: 'inline-block',
              overflow: "hidden",
              position: "relative",
              border: "1px solid",
              fontSize: "50px",
              //   lineHeight: '200px', // Align the text vertically
            }}
          >
            {text[currentTextIndex]}
          </span>
        </p>
        <button
          style={{
            height: "60px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "50px",
            fontSize: "20px",
            padding: "2px 50px ",
            marginTop: "20px",
          }}
        >
          <MdOutlineFileDownload />
          Download chrome
        </button>
        <br />

        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <span htmlFor="">
            Help make Google Chrome better by automatically sending usage
            statistics and crash
            <br /> reports to Google.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Learn more
            </a>
          </span>
          <br />
        </div>
        <p style={{ marginTop: "30px", fontSize: "15px" }}>
          By downloading Chrome, you agree to the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Google Terms of Service
          </a>{" "}
          and
          <br />
          <a href="" style={{ textDecoration: "none" }}>
            Chrome and ChromeOS Additional Terms of Service
          </a>{" "}
        </p>
      </div>
      <div className="heading"
        style={{
          position: "relative",
          top: "100px",
          width: "100%",
        //   border: "2px solid",
          zIndex: "21",
        }}
      >
        <h1
          style={{ position: "absolute",left:'25%',top:'100px',fontSize:'54px',fontWeight:'bold' }}
        >
          The <span style={{backgroundColor:'#82c493',borderRadius:'30px',padding:'10px',color:'green'}}><MdSpeed size={45} />fast</span> way to do things online
        </h1>
      </div>
      <div className="cont" style={{width:"100%",height:"100vh",}}>
      
      <div className="video" style={styles.video}>
        <div style={{position:'absolute',left:'10%',right:'10%',top:'5%',display:'flex'}}>
            <h1>Prioritise performance</h1>
            <p>Chrome is built for performance. Optimise your experience    &nbsp; with features like Energy Saver and Memory Saver.</p>
        </div>
        <video
          autoPlay
          muted
        
          loop
          style={{height:'100%',borderRadius:'20px' }}
        >
          <source src={video1} />
        </video>
      </div>
      </div>
    </div>
  );
};

export default Page1;

const styles = {
  page1: {
    // height: '80vh',
    // border: '1px solid',
  },
  video: {
    height:"400px",
    width: "800px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    overflow: "hidden",
    position:'relative',
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    backgroundColor:"white",
    borderRadius:'20px'
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    width: "800px",
    // border:"1px solid"
  },
};
