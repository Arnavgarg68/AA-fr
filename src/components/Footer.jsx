import React from 'react'
import insta from './instagram-48.png'
import facebook from './facebook-48.png'
export default function Footer() {
  return (
    <div className='footer-main-body'>
      <div className="footer-inner-body">
      <div  className='footer-map'><iframe title='maps' className='footer-iframe' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Amulya%20Ayurved%20Meerut%20india+(Amulya%20Ayurved)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
      <div className="footer-text">
        <h2>Amulya Ayurved</h2>
        C-126/5 Devlok colony delhi road , Meerut <br/>Uttarpradesh ,India
        <br/>
        <br/>
        <hr />
        <br/>
        <h4>Contact us:</h4>
        <a href="tel:7417099103" style={{color:"white",marginTop:"15px"}}>+91-7417099103</a>
        <br/>
        <a href="tel:8755356180" style={{color:"white",marginTop:"15px"}}>+91-8755356180</a>
        <br />
        <br />
        <a href="https://www.instagram.com/amulya.ayurved?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
        <img src={insta} alt="" />
        </a>
        <a href="https://www.facebook.com/AmulyaAyurvedmeerut/" target="_blank" rel="noreferrer">
        <img src={facebook} alt="" />
        </a>
      </div>
      </div>
    </div>
  )
}
