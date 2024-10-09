import React from "react";
import Calendar from "./calendar";
import './Home.css';
import blogImage from './home-pics/blog.jpg';
import diningImage from './home-pics/dining.jpg';
import resourcesImage from './home-pics/resources.jpg';
import transportationImage from './home-pics/transportation.jpg';

function Home() {
  return (
    <div>
      {/* hero section */}
      <section className="hero">
        <div className="hero-image"></div> {/* Image container */}
        <div className="hero-text">
          <h1>SFU HUB</h1>
          <p>Your central hub for all things SFU</p>
        </div>
      </section>
      
      {/* image grid */}
      <section className="image-grid">
        <div className="grid-item">
          <a href="#page1">
          <div className="image1" style={{ backgroundImage: `url(${diningImage})` }}></div>
          <div className="image-text">DINING</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page2">
          <div className="image2" style={{ backgroundImage: `url(${resourcesImage})` }}></div>
          <div className="image-text">RESOURCES</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page3">
          <div className="image3" style={{ backgroundImage: `url(${transportationImage})` }}></div>
          <div className="image-text">TRANSPORTATION</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page4">
          <div className="image4" style={{ backgroundImage: `url(${blogImage})` }}></div>
          <div className="image-text">BLOGS</div>
          </a>
        </div>
      </section>
      
      {/*calendar section*/}
      <section className='calendar-section'>
        <Calendar />
      </section>
    </div>
  );
}

export default Home;
