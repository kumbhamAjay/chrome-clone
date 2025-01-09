import React from 'react'
import img from '../assets/extensions-ui.webp'
import i1 from '../assets/extensions-shop.png'
import i2 from '../assets/extensions-paint.png'
import i3 from '../assets/extensions-person.png'
import i4 from '../assets/extensions-icon.png'
import i5 from '../assets/extensions-video.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Experience = () => {
    useGSAP(()=>{
        gsap.from('.i1',{
            opacity:'0',
            left:'-100px',
            top:'15%',
            
            scrollTrigger:{
                trigger:'.experience',
                start:'top 75%',
                end:'top 5%',
                // markers:true,
                scrub:true,
            }


        }),
        gsap.from('.i2',{
            opacity:'0',
            right:'-120px',top:'20%',
            
            scrollTrigger:{
                trigger:'.experience',
                start:'top 85%',
                end:'top 5%',
                // markers:true,
                scrub:true,
            }


        }),
        gsap.from('.i3',{
            opacity:'0',
            right:'10%',bottom:'-20%',
            
            scrollTrigger:{
                trigger:'.experience',
                start:'top 85%',
                end:'top 5%',
                // markers:true,
                scrub:true,
            }


        }),
        gsap.from('.i4',{
            opacity:'0',
           right:'10%',top:'-20%',
            
            scrollTrigger:{
                trigger:'.experience',
                start:'top 85%',
                end:'top 5%',
                // markers:true,
                scrub:true,
            }


        }),
        gsap.from('.i5',{
            opacity:'0',
            left:'-20%',bottom:'-30%',
            
            scrollTrigger:{
                trigger:'.experience',
                start:'top 85%',
                end:'top 5%',
                // markers:true,
                scrub:true,
            }


        })

    })
  return (
    <>
    <div className='experience' style={styles.page}>
        <div style={styles.cont1}>
            <h1 style={{textAlign:'left',margin:'20% 20% 0 20%',fontSize:'45px'}}>Extend your<br/> experience</h1>
            <p style={{textAlign:'left',margin:'10px 20% 0 20%'}}>From shopping and entertainment to<br/> productivity, find extensions to improve your <br/>experience in the Chrome Web Store.</p>
        </div>
        <div style={styles.cont2}>
            <img  src={img} alt="" />
            <img className='i1' style={{position:'absolute',left:'30px',top:'20%'}} src={i1} alt="" />
            <img className='i2' style={{position:'absolute',right:'60px',top:'20%'}} src={i2} alt="" />
            <img className='i3' style={{position:'absolute',right:'20%',bottom:'20%'}} src={i3} alt="" />
            <img className='i4' style={{position:'absolute',right:'20%',top:'1%'}} src={i4} alt="" />
            <img className='i5' style={{position:'absolute',left:'20%',bottom:'20%'}} src={i5} alt="" />
        </div>
      
    </div>
    
    </>
  )
}

export default Experience
const styles={
    
    page:{
        marginTop:'20px',
        display:'flex',
        height:'90vh',
        width:'100%'


    },
    cont1:{
        // border:'1px solid',
        width:'40%',
        // display:'flex',
        flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center'


    },
    cont2:{
        // border:'1px solid red',
        width:'60%',
        position:'relative'

    }
}