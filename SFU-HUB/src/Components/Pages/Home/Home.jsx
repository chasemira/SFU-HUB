import React from "react";
import Calendar from "./calendar";
import './Home.css';

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
            <div className="image-placeholder">Image 1</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page2">
            <div className="image-placeholder">Image 2</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page3">
            <div className="image-placeholder">Image 3</div>
          </a>
        </div>
        <div className="grid-item">
          <a href="#page4">
            <div className="image-placeholder">Image 4</div>
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
