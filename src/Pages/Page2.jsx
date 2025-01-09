
import React from 'react';
import bgImg from '../assets/google-safety.webp'
import pass from '../assets/passwords-fill-2.webp'
import { AiOutlineSecurityScan } from 'react-icons/ai';
const Page2 = () => {
  return (
    <div style={styles.page}>

      <header style={styles.header}>
       
        <h1 style={styles.mainTitle}>Stay <span style={{backgroundColor:'#b0c4e8',padding:'10px',borderRadius:'30px',color:'#3f6dbf'}}><AiOutlineSecurityScan size={35}/>safe</span><br /> while you browse</h1>
      </header>


      <div style={styles.mainContent}>

        <div style={styles.sectionLeft1}>
          <h3 style={styles.sectionTitle}>Password Manager</h3>
          <h2 style={styles.sectionMainText}>Use strong passwords on every site.</h2>
          <img
            src={pass} // Replace with actual image URL
            alt="Password manager example"
            style={styles.image}
          />
           <button style={styles.btn}>Ajay.k</button><br /><br />
           <button style={styles.btn}>*******</button>

        </div>


        <div style={styles.sectionRight}>
          <h3 style={styles.sectionTitle}>Safety Check</h3>
          <h2 style={styles.sectionMainText}>
            Check your safety level in real time with just one click.
          </h2>
        </div>
      </div>

      
      <div style={styles.additionalContent}>
    
        <div style={styles.sectionLeft}>
          <h3 style={styles.sectionTitle}>Enhanced Safe Browsing</h3>
          <h2 style={styles.sectionMainText1}>
            Browse with the<br/> confidence that<br/> your information is secure.
          </h2>
         
        </div>

       
        <div style={styles.sectionRight1}>
          <h3 style={styles.sectionTitle}>Privacy Guide</h3>
          <h2 style={styles.sectionMainText}>
            Keep your privacy under control with easy-to-use settings.
          </h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  btn:{
    width:"400px",
    height:"80px",
    borderRadius:'5px',
    border:'none',
    margin:'0 100px'

  },

  page: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    marginBottom: '40px',
  },
  
  textGroup: {
    display: 'flex',
    gap: '10px',
  },
  
  
  mainTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight:'80px'
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
  },
  additionalContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  sectionLeft1: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px',
    borderRadius: '20px',
    width: '40%',
    height:'500px',
    overflow:'hidden',
    textAlign: 'left',
    position:"relative"
  },
  sectionLeft: {
    backgroundColor: '#E8F0FE',
    color: 'black',
    fontWeight:'bold',
    fontSize:'100px',
    lineHeight:'100px',
    padding: '20px',
    borderRadius: '20px',
    width: '40%',
    height:'500px',
    textAlign: 'left',
  },
  sectionRight: {
    backgroundColor: '#E8F0FE',
    padding: '20px',
    borderRadius: '20px',
    width: '40%',
    height:'500px',
    textAlign: 'left',
  },
  sectionRight1: {
    color:'white',
    fontWeight:'500',

    backgroundColor: 'blue',
    backgroundImage: `url(${bgImg})`,
    padding: '20px',
    borderRadius: '20px',
    width: '40%',
    height:'500px',
    textAlign: 'left',
  },
  sectionTitle: {
    margin:'20px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  sectionMainText: {
    margin:'20px 40px',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionMainText1: {
    margin:'20px 40px',
    fontSize: '38px',
    lineHeight:'50px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  image: {
    position:'absolute',
    top:'25%',
    left:'10%',
    // width: '400px',
    borderRadius: '10px',
  },
};

export default Page2;
