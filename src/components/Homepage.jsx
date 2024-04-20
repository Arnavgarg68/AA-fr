import React, { useEffect } from 'react'
// import trailvid from './558-137190717_small.mp4'
import nasya from './nasya.avif'
import janu from './janu-basti.jpg'
import abhyanga from './abhyanga.jpg'
import patrapindaswedana from './patra-pinda-swedana.jpg'
import katibasti from './kati-basti.jpg'
import swedanatherapy from './swedana-therapy.jpg'
import animabasti from './animabasti.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Homepage() {

    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div className='homepage-main-body'>
      <div className="homepage-main-inner-body">
        <div className="homepage-main-image" data-aos="zoom-in" data-aos-duration="1000">
            <div className="homepage-span-diver" >

            <span className='homepage-span' data-aos="zoom-in" data-aos-duration="2000" >
                Lets take a step forward towards a healthy lifestye!!
            </span>
            <span className='homepage-span' data-aos="zoom-in" data-aos-duration="2000">
                <span className='homepage-arrow' style={{fontWeight:"bold"}}>Scroll down to get started !!</span>
            </span >
            </div>
        </div>
        <div className="homepage-contentbox">
            <img src={nasya} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
            <h1>Nasya Therapy</h1>
                " Nasya is a therapeutic procedure in Ayurveda that involves the administration of herbal oils or powders into the nasal passages. It is considered one of the Panchakarma therapies, a set of detoxification and rejuvenation treatments aimed at balancing the body's doshas (energies) and promoting overall health."</div>
        </div>
        <div className="homepage-contentbox">
            <img src={janu} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Janu Basti Therapy</h1>
                "Janu Basti" is an Ayurvedic therapy specifically targeting knee health. It falls under the category of "Basti" therapies, which involve the application of medicated oils or herbal decoctions in a dough dam to a particular area of the body. This localized treatment is believed to be effective in managing various musculoskeletal issues, particularly those affecting the knees.</div>
        </div>
        <div className="homepage-contentbox">
            <img src={abhyanga} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Abhyanga Therapy</h1>
                "Abhyanga is a traditional Ayurvedic massage therapy that involves the application of warm oil to the entire body, followed by gentle, rhythmic massage. It is considered one of the most important self-care practices in Ayurveda and has been practiced for thousands of years for its numerous health benefits."</div>
        </div>
        <div className="homepage-contentbox">
            <img src={patrapindaswedana} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
            <h1>Patra pinda swedana</h1>
                
                "Patra Pinda Swedana, also known as PPS or Patra Potli, is an Ayurvedic therapy that involves the application of warm herbal poultices to the body. This therapy combines the benefits of heat therapy (swedana) with the therapeutic properties of medicinal herbs (patra) to promote relaxation, reduce pain, and detoxify the body."</div>
        </div>
        <div className="homepage-contentbox">
            <img src={katibasti} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Kati basti  therapy</h1>
                "Kati Basti is an Ayurvedic therapy that specifically targets the lower back region (kati) by applying warm medicated oil to the area and creating a reservoir using a dough ring or dam (basti). This localized treatment is particularly beneficial for addressing lower back pain, stiffness, and related musculoskeletal issues. "</div>
        </div>
        <div className="homepage-contentbox">
            <img src={swedanatherapy} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Swedana Therapy</h1>
                "Swedana is a traditional Ayurvedic therapy that involves the application of heat to the body to induce sweating and promote detoxification. It is considered one of the Panchakarma therapies, a set of detoxification and rejuvenation treatments aimed at balancing the body's doshas (energies) and promoting overall health."</div>
        </div>
        <div className="homepage-contentbox">
            <img src={animabasti} alt="ok" data-aos="zoom-in" data-aos-duration="2000"/>
            <div className="homepage-content-text" data-aos="zoom-in" data-aos-duration="2000">
                <h1>Enema (basti)  therapy</h1>
                "Enema Basti, also known simply as Basti or Vasti, is an Ayurvedic therapy that involves the administration of medicated oil or herbal decoctions into the rectum. It is considered one of the Panchakarma therapies, a set of detoxification and rejuvenation treatments aimed at balancing the body's doshas (energies) and promoting overall health. Enema Basti is primarily used for cleansing, detoxification, and nourishment of the lower gastrointestinal tract."</div>
        </div>
      </div>
    </div>
  )
}
