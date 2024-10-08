import React from "react";
import Calendar from "./calendar";
import './Home.css'; 

function Home() {
  return (
    <div>
      {/*home section*/}
      <section className='hero'>
        <h1>SFU HUB</h1>
      </section>

      
      {/*calendar section*/}
      <section className='calendar-section'>
        <Calendar />
      </section>
    </div>
  );
}

export default Home;