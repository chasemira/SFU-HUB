import React from "react";
import Calendar from "./calendar";
import './Home.css'; 

function Home() {
  return (
    <div>
      {/*home section*/}
      <section className='hero'>
        <h1>welcome to sfu hub</h1>
        <h1>testing </h1>
        <h1>this is where the hero section will be later</h1>
        <p>ur one stop hub for all things sfu</p>
      </section>

      
      {/*calendar section*/}
      <section className='calendar-section'>
        <Calendar />
      </section>
    </div>
  );
}

export default Home;
