import React, { useState } from 'react';
import './Dining.css';

function Dining() {
  const [selectedLocation, setSelectedLocation] = useState(null); // For toggling buttons
  const [selectedFilter, setSelectedFilter] = useState('All Locations'); // For dropdown filter

  const locationDetails = [
    { id: 'All Locations' },
    { id: 'Cornerstone', name: 'Starbucks Cornerstone', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'Cornerstone', name: 'Subway', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'Cornerstone', name: 'Tim Hortons Cornerstone', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'WMC', name: 'Tim Hortons WMC', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'WMC', name: 'Starbucks WMC', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'SUB', name: 'Grill Master', rating: '4/5', hours: 'Monday-Friday: 7:30am-7:30pm Saturday/Sunday: 8am-6pm Holiday Hours: 8am-5pm', menuLink: '#' },
    { id: 'Univercity' }
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
                </div>
              ))}
          </div>
        </div>
      </div>
  );
}

export default Dining;
