import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.socialMedia}>
        <p style={styles.text}>Follow us</p>
        <div style={styles.icons}>
          <span ><FaYoutube size={30}/></span> {/* Replace with appropriate social media icons */}
          <span><FaXTwitter size={30} /></span>
          <span><FaFacebook size={30} /></span>
        </div>
      </div>
      <div style={styles.linksContainer}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Chrome Family</h4>
          <p style={styles.text}>Other Platforms</p>
          <p style={styles.text}>Chromebooks</p>
          <p style={styles.text}>Chromecast</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Enterprise</h4>
          <p style={styles.text}>Download Chrome Browser</p>
          <p style={styles.text}>Chrome Browser for Enterprise</p>
          <p style={styles.text}>Chrome Devices</p>
          <p style={styles.text}>ChromeOS</p>
          <p style={styles.text}>Google Cloud</p>
          <p style={styles.text}>Google Workspace</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Education</h4>
          <p style={styles.text}>Google Chrome Browser</p>
          <p style={styles.text}>Devices</p>
          <p style={styles.text}>Web Store</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Dev and Partners</h4>
          <p style={styles.text}>Chromium</p>
          <p style={styles.text}>ChromeOS</p>
          <p style={styles.text}>Chrome Web Store</p>
          <p style={styles.text}>Chrome Experiments</p>
          <p style={styles.text}>Chrome Beta</p>
          <p style={styles.text}>Chrome Dev</p>
          <p style={styles.text}>Chrome Canary</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Stay Connected</h4>
          <p style={styles.text}>Chrome Help</p>
          <p style={styles.text}>Update Chrome</p>
          <p style={styles.text}>Chrome Tips</p>
          <p style={styles.text}>Google Chrome Blog</p>
        </div>
      </div>
      <div style={styles.bottomLinks}>
        <p style={styles.text}>Google</p>
        <p style={styles.text}>Privacy and Terms</p>
        <p style={styles.text}>About Google</p>
        <p style={styles.text}>Google products</p>
        <p style={styles.text}>Help</p>
        <p style={styles.text}>English - India</p>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
  },
  socialMedia: {
    display: 'flex',
    width:"20%",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icons: {
    display: 'flex',
    gap: '20px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  column: {
    flex: 1,
    padding: '0 10px',
  },
  heading: {
    marginBottom: '10px', // Adjust the gap below headings
  },
  text: {
    margin: '20px 0', // Adjust the gap between paragraphs
  },
  bottomLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #ddd',
    paddingTop: '10px',
  },
};

export default Footer;
