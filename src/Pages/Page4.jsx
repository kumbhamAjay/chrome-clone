import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Nav from "../Components/nav";
import logo from "../assets/chrome-logo-m100.svg";
import video from "../assets/chrome-video.webm";
import { useGSAP } from "@gsap/react";
import { MdOutlineFileDownload } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);
const Page4 = () => {
  const text = ["fast", "safe", "yours"];
  const color = ["green", "blue", "red"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useGSAP(() => {
    gsap.to(".video video", {
     
      x: "-20%",
      y: "50%",

      duration: 0.5,
      scrollTrigger: {
        trigger: ".video",
        overflow: "hidden",

        markers: true,
        start: "top 10%",
        end: "top -20%",
        scrub: 1,
        // pin: true,
      },
    });
    gsap.fromTo(".video", {
     
        scale:1.3,
  
        // duration: 0.5,
        
      },{
        scale:0.6,
        scrollTrigger: {
            trigger: ".video ",
            overflow: "hidden",
    
            markers: true,
            start: "top 10%",
            end: "top -20%",
            scrub: 1,
            pin: true,
          },

      });
      gsap.to(".video", {
        scale:'1.3',
        scrollTrigger: {
          trigger: ".video",
          start: "top 75%",
          end: "top 50%",
          markers:'true',
          scrub:1,
          pin:true
        },
      });
      gsap.from(".heading h1", {
        // y:'100px',
        
        duration:2
,        scrollTrigger: {
          trigger: ".video",
          start: "top 75%",
          end: "top 10%",
          markers:'true',
          scrub:1,
        //   pin:true
        },
      });
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
          zIndex: "-1",
        }}
      >
        <h1
          style={{ position: "absolute",left:'35%',top:'-100px' }}
        >
          The fast way to do things online
        </h1>
      </div>
      <div className="video" style={styles.video}>
        <div style={{position:'absolute',left:'10%',right:'10%',top:'5%',display:'flex'}}>
            <h1>Prioritise performance</h1>
            <p>Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.</p>
        </div>
        <video
          autoPlay
          muted
          loop
          style={{ height: "100%", margin: "auto", width: "80%" }}
        >
          <source src={video} />
        </video>
      </div>
    </div>
  );
};

export default Page4;

const styles = {
  page1: {
    // height: '80vh',
    // border: '1px solid',
  },
  video: {
    height:"400px",
    // width: "600px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    overflow: "hidden",
    position:'relative',
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
    backgroundColor:"white"
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
