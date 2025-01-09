import React from "react";
import bg from "../assets/ai_desktop.webp";
import { GiApc, GiLightningSpanner } from "react-icons/gi";
import { SiGooglecloudspanner } from "react-icons/si";
import img from "../assets/search-front_desktop.webp";
import im1 from "../assets/mail.png";
import im2 from "../assets/file.png";
import im3 from "../assets/drive.png";
const GoogleAi = () => {
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginBottom: "30px", fontSize: "55px" }}
      >
        The browser &nbsp;
        <span
          style={{
            backgroundColor: "#dec9a0",
            color: "#e09909",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <SiGooglecloudspanner size={40} /> built
        </span>
        <br />
        by Google
      </h1>
      <div style={styles.card}>
        <h1>
          Access AI
          <br /> superpowers while you browse.
        </h1>
        <p style={{ margin: "0 50px", lineHeight: "40px" }}>
          Google is integrating artificial intelligence to make our products
          more useful. We use AI for features like Search, Google Translate, and
          more, and we’re innovating new technologies responsibly.
        </p>
      </div>
      <div style={styles.page2}>
        <div
          style={styles.cont1}
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector("img").style.transform =
              "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector("img").style.transform = "scale(1)")
          }
        >
          <p style={{ margin: "20px 0 0 50px" }}>GOOGLE SEARCH</p>
          <h1 style={{ margin: "20px 0 0 50px" }}>
            The search bar you love, built right in.
          </h1>
          <br />
          <br />
          <br />
          <div>
            <img src={img} alt="" style={styles.img} />
          </div>
        </div>

        <div
          style={styles.cont2}
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector("#im2").style.transform =
              "scale(1.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector("#im2").style.transform = "scale(1)")
          }
        >
          <p style={{ margin: "20px 0 0 50px" }}>GOOGLE WORKSPACE</p>
          <h1 style={{ margin: "20px 0 0 50px" }}>
            Get things done, with or without Wi-Fi.
          </h1>
          <div
            style={{
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img style={{ width: "20%" }} src={im1} alt="" />
            <img
              id="im2"
              style={{ width: "20%", transition: "transform 0.3s ease" }}
              src={im2}
              alt=""
            />
            <img style={{ width: "20%" }} src={im3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAi;
const styles = {
  page2: {
    display: "flex",
    // padding: "50px",
    width: "80%",
    height: "500px",
    borderRadius: "20px",

    backgroundColor: "white",
    // border: "1px solid",
    margin: "50px auto",
    gap: "10%",
  },
  cont1: {
    position: "relative",
    width: "45%",
    overflow: "hidden", // Ensures the image doesn't overflow the div

    backgroundColor: "#dec9a0",
    borderRadius: "30px",
  },
  img: {
    width: "100%",
    transition: "transform 0.3s ease", // Smooth transition for the image
  },
  imgHover: {
    transform: "scale(1.05)", // Slightly increases the image size on hover
  },
  cont2: {
    width: "45%",
    // border: "1px solid red",
    height: "100%",
    borderRadius: "30px",
    boxShadow:'0 0 10px grey'
  },
  card: {
    display: "flex",
    padding: "50px",
    width: "80%",
    height: "500px",
    borderRadius: "20px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // Optional: ensures the image covers the entire area
    backgroundPosition: "center",
    backgroundColor: "#dec9a0",
    // border: "1px solid",
    margin: "auto",
  },
};
