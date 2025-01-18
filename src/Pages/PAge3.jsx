import React from 'react';
import img1 from '../assets/walpaper.jpeg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Page3 = () => {
    useGSAP(()=>{
      const t1=gsap.timeline(

      )
        t1.to('.page3 header h1',{
            y:100,
            duration:1,
            scrollTrigger:{
                trigger:'.page3',
                start:'top 2%',
                end:'top -5%',
                scrub:1,
                // markers:true,
                
                pin:true

            }
            
        }),
        t1.to('.page3 img',{
            scale:1.5,
            duration:1,
            scrollTrigger:{
                trigger:'.page3',
                start:'top -2%',
                end:'top -10%',
                scrub:true,
                // markers:true,
                
                // pin:true

            }
            
        })
    })
  return (
    <div className='page3' style={styles.page}>
      {/* Navigation Bar */}
     

      {/* Heading Section */}
      <header style={styles.header}>
        <h1 style={styles.heading}>
          Make it <span style={styles.emphasized}>Yours</span> and take it with you
        </h1>
      </header>

      {/* Image Section */}
      <div style={styles.imageContainer}>
        <img
          src={img1} // Replace with the actual image URL
          alt="Desert Arch"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '0 20px 20px 20px',
    height:'100vh',
    // border:'1px solid red'
  },
  
  header: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  emphasized: {
    color: '#ff4d4d',
    backgroundColor: '#fff1f1',
    padding: '0 10px',
    borderRadius: '10px',
  },
  imageContainer: {
    textAlign: 'center',
    width:'800px',
    margin:'auto',
    padding:'5%'
  },
  image: {
    width: '80%',
    // maxWidth: '800px',
    borderRadius: '20px',
  },
};

export default Page3;
