import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import qr from "../assets/qr-take-it-with-you.webp";
const Questions = () => {
  const [open, setOpen] = useState({});

  const handler = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "How do I install Chrome?",
      answer:
        "To install Chrome, simply download the installation file, then look for it in your downloads folder. Open the file and follow the instructions. Once Chrome is installed, you can delete the install file. Learn more about downloading Chrome here.",
    },
    {
      question: "Does Chrome work on my operating system?",
      answer:
        "To update Chrome, click on the three dots at the top-right corner of the browser, go to 'Help' > 'About Google Chrome'. Chrome will automatically check for updates and install them if available.",
    },
    {
      question: "How do I make Chrome my default browser?",
      answer:
        "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here.",
    },
    {
      question: "What are Chrome's safety settings?",
      answer:
        "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here.",
    },
  ];

  return (
    <div style={styles.page}>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "38px",
          color: "black",
          textAlign: "center",
        }}
      >
        Frequently Asked Questions
      </h1>
      {faqData.map((item, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                margin: "40px 0",
                fontWeight: "semi-bold",
                fontSize: "24px",
              }}
            >
              {item.question}
            </h1>
            <h1
              onClick={() => handler(index)}
              style={{
                transform: `rotate(${open[index] ? "-45deg" : "0deg"})`,
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            >
              +
            </h1>
          </div>
          <div
            style={{
              maxHeight: open[index] ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
              margin: open[index] ? "10px 0" : "0",
            }}
          >
            <p style={{ margin: "10px 0", color: "black" }}>{item.answer}</p>
          </div>
          <hr />
        </div>
      ))}
      <div style={styles.card}>
        <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
          Take your browser
          <br /> with you
        </h1>
        <br />
        <br />

        <p style={{ color: "white", textAlign: "center" }}>
          Download Chrome on your mobile device or tablet and sign into your{" "}
          <br />
          account for the same browser experience, everywhere.
        </p>
        <button
          style={{
            height: "60px",
            border: "none",
            borderRadius: "30px",
            fontSize: "20px",
            margin: "10px",
            padding: "10px",
          }}
        >
          {" "}
          <MdOutlineFileDownload />
          Download Chrome
        </button>
        <div style={{position:'absolute',backgroundColor:'white',width:"100px",display:'grid',justifyContent:'center',alignItems:'center',padding:'20px',borderRadius:'10px 10px 0 0',bottom:'0',right:'20px'}}>
        <img src={qr} alt=""  />
        <p style={{margin:'0 10px',fontSize:'15px'}}>Get chrome for your phone</p>
            
        

        </div>
      </div>
    </div>
  );
};

export default Questions;

const styles = {
  page: {
    // height: "80vh",
    width: "70%",
    margin: "0 15%",
    paddingTop: "50px",
    color: "blue",
  },
  card: {
    backgroundColor: "#268fd1",
    height: "500px",
    borderRadius: "10px",
    margin: "50px 0 10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
};
