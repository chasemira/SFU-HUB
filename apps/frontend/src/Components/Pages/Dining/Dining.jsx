import React, { useState } from 'react';
import './Dining.css';
import dining from './dining-pics/dining.png';
import starbucksCornerstore from './dining-pics/starbucksCornerstore.jpg';
import subway from './dining-pics/subway.jpg';
import timHortons from './dining-pics/timHortons.jpg';
import starbucksWMC from './dining-pics/starbucksWMC.jpg';
import renCafe from './dining-pics/renCafe.jpg';
import mack from './dining-pics/mack.jpg';
import timCorner from './dining-pics/timCorner.jpg';
import jugo from './dining-pics/jugo.jpg';
import blenz from './dining-pics/blenz.jpg';


function Dining() {
  const [selectedLocation, setSelectedLocation] = useState(null); // For toggling buttons
  const [selectedFilter, setSelectedFilter] = useState('All Locations'); // For dropdown filter

  const locationDetails = [
    { id: 'All Locations' },
    { id: 'Univercity', name: 'Dining Commons', rating: '4/5', hours: 'Fall/Spring: Open 24/7 Summer: 7:00am-10:00pm Daily', menuLink: '#', imageSrc: dining },
    { id: 'Cornerstone', name: 'Starbucks Cornerstone', rating: '4/5', hours: 'Monday-Friday: 7:00am-7:30pm Weekends: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#', imageSrc: starbucksCornerstore},
    { id: 'WMC', name: 'Starbucks WMC', rating: '4/5', hours: 'Monday-Friday: 7:00am-7:30pm Weekends: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#', imageSrc: starbucksWMC},
    { id: 'AQ', name: 'Renaissance Coffee', rating: '4/5', hours: 'Monday-Friday: 6:00am-8:30pm Weekends/Holidays: Closed', menuLink: '#', imageSrc: renCafe},
    { id: 'AQ', name: 'Mackenzie Cafe', rating: '4/5', hours: 'Monday-Thursday: 8:00am-5:30pm Friday: 8-4pm Weekends/Holidays: Closed', menuLink: '#', imageSrc: mack },
    { id: 'Cornerstone', name: 'Tim Hortons Cornerstone', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Weekends: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#', imageSrc: timCorner },
    { id: 'WMC', name: 'Tim Hortons WMC', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:00pm Friday: 7:30am-5:30pm Weekends/Holidays: Cosed', menuLink: '#', imageSrc: timHortons },
    { id: 'AQ', name: 'Jugo Juice', rating: '4/5', hours: 'Monday-Thursday: 7:30am-7:00pm Friday: 7:30am-5:30pm Weekends/Holidays: Closed', menuLink: '#', imageSrc: jugo },
    { id: 'SUB', name: 'Blenz', rating: '4/5', hours: 'Monday-Friday: 7:30am-8:00pm Weekends: 10:00am-4:30pm Holiday Hours: 8am-5pm', menuLink: '#', imageSrc: blenz },
  ];

  // Handle click to toggle details visibility
  const handleLocationClick = (locationName) => {
    setSelectedLocation(selectedLocation === locationName ? null : locationName); // Toggle logic
  };

  // Handle dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedFilter(event.target.value);
    setSelectedLocation(null); // Reset selected location when dropdown changes
  };

  // Filter locations based on selected dropdown value
  const filteredLocations = locationDetails.filter((location) =>
    selectedFilter === 'All Locations' || location.id === selectedFilter
  );

  return (
    <div className="dining">
      <h1 className="dining_header">Dining Options</h1>

      <div className="dining_content">
      {/* Dropdown to filter locations */}
      <h2>Select a Dining Option: </h2>
      <div className="top-panel">
        <select className="location_selector" onChange={handleDropdownChange}>
          <option value="All Locations">All Locations</option>
          <option value="Cornerstone">Cornerstone</option>
          <option value="WMC">WMC</option>
          <option value="SUB">SUB</option>
          <option value="Univercity">Univercity</option>
          <option value="AQ">AQ</option>
        </select>
      </div>
      </div>
      
        <div className="dining_main">
          <div className="left-panel">
            {filteredLocations.map((location, index) => (
              location.name && (
                <button
                  key={index}
                  className={`location-btn ${selectedLocation === location.name ? 'active' : ''}`}
                  onClick={() => handleLocationClick(location.name)}
                >
                  <label>{location.name}</label>
                </button>
              )
            ))}
          </div>

          <div className={`right-panel ${selectedLocation ? 'active' : ''}`}>
            {selectedLocation && filteredLocations
              .filter((location) => location.name === selectedLocation)
              .map((location, index) => (
                <div key={index} className="location_details">
                  <h3>{location.name}</h3>
                  <p>Rating: {location.rating}</p>
                  <p>Hours of Operation: {location.hours}</p>
                  <p>
                    Menu Link: <a href={location.menuLink}>View Menu</a>
                  </p>
                  {location.imageSrc && (
                  <div
                    className="location_image"
                    style={{ backgroundImage: `url(${location.imageSrc})` }}
                  />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
  );
}

export default Dining;
