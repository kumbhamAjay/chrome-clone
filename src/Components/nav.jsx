import React from 'react'
import logo from '../assets/chrome-logo-m100.svg'
import '../App.css'

const Nav = () => {
  return (
    <div className='nav' style={styles.nav}>
        <div className='logo'>
            <div className='logo-container' style={styles.logoContainer}>
                <img src={logo} alt="" />
                <h1 style={{fontWeight:"100"}}>chrome</h1>
            </div>
        </div>
        <div className='tabs' style={styles.tabs}>
            <h4 style={{fontWeight:"100"}}>Home</h4>
            <h4 style={{fontWeight:"100"}}>The Browser by Google</h4>
            <h4 style={{fontWeight:"100"}}>Safety</h4>
            <h4 style={{fontWeight:"100"}}>Support</h4>

        </div>
        <div className='empty' style={styles.empty}></div>
      
    </div>
  )
}

export default Nav


const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily:"Roboto",
      alignItems: 'center',
      padding: '10px 20px',
      gap:"20px",
      backgroundColor: '#ffff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      width:"20%",
      gap:"10px"
    },
    logoImage: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
    tabs: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-around',
      width:"30%",
    
      height:"100%"

    },
    empty: {
      width: '50%', // Adjust the width as needed
    },
  };
