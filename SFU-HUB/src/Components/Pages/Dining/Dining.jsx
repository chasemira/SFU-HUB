import React, { useState } from 'react';

function Dining() {
  const [selectedLocation, setSelectedLocation] = useState('Cornerstone');

  const locations = ['Cornerstone', 'WMC', 'Univercity'];

  const locationDetails = {
    Cornerstone: { rating: '3.5/5', hours: '8 AM - 9 PM', menuLink: '#' },
    WMC: { rating: '4.0/5', hours: '9 AM - 8 PM', menuLink: '#' },
    'Lower Bus Loop': { rating: '3.8/5', hours: '7 AM - 10 PM', menuLink: '#' },
  };

  // const handleLocationChange = (event) => {
  //   setSelectedLocation(event.target.value);
  // };

  return (
    <div className='dining'>
      <h1 className='dining_header'>Dining Options</h1>

      <div className='dining_content'>
          <h2>Select a Location</h2>
          <select
        id="location_selector"
        className="location_selector"
        value={location}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Locations</option>
        <option value="cornerstone">Cornerstone</option>
        <option value="WMC">WMC</option>
        <option value="AQ">AQ</option>
      </select>

          {/* <select  value={selectedLocation} onChange={handleLocationChange}>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select> */}

        <div className='location_details'>
          <h3>{selectedLocation}</h3>
          <p>Rating: {locationDetails[selectedLocation].rating}</p>
          <p>Hours of Operation: {locationDetails[selectedLocation].hours}</p>
          <p>
            Menu Link: <a href={locationDetails[selectedLocation].menuLink}>View Menu</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dining;
