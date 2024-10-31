import React, { useState, useEffect } from 'react';
import './Transportation.css';
import { Link } from 'react-router-dom';
import parkingImage from './trans-pics/parking.jpg';
import campusImage from './trans-pics/campus.jpg';

const Transportation = () => {
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [busData, setBusData] = useState({});
  const [busStops, setBusStops] = useState({
    Burnaby: [
      { value: 'Burnaby1', label: 'SFU Transportation Centre @ Bay 1' },
      { value: 'Burnaby2', label: 'SFU Transportation Centre @ Bay 2' },
      { value: 'Burnaby3', label: 'SFU Bus Exchange' },
    ],
    Surrey: [
      { value: 'Surrey1', label: 'Surrey Central Station @ Bay 13' },
      { value: 'Surrey2', label: 'King George Station' },
    ],
    Vancouver: [
      { value: 'Vancouver1', label: 'Waterfront Station' },
      { value: 'Vancouver2', label: 'Granville Station' },
    ],
  });

  const apiURL = 'https://api.sfuhub.ca/transit?stopNumbers=59314%2C61036';

  useEffect(() => {
    const fetchBusData = async () => {
      const response = await fetch(apiURL);
      const data = await response.json();
      const formattedData = {};

      data.forEach(stop => {
        formattedData[stop.stopName] = stop.stops.map(bus => ({
          routeName: bus.routeName,
          routeCode: bus.routeCode,
          time: new Date(bus.time * 1000).toLocaleTimeString(),
        }));
      });

      setBusData(formattedData);
    };

    fetchBusData();
  }, []);

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
    setSelectedStop('');
  };

  const handleStopChange = (event) => {
    setSelectedStop(event.target.value);
  };

  return (
    <div className='transportation'>
      <h1 className='trans_header'>Transportation</h1>
      <section className="image-gridT">
        <div className="grid-itemT">
          <Link to={'/parking'}>
            <div className="image1" style={{ backgroundImage: `url(${parkingImage})` }}></div>
            <div className="image-textT">Parking</div>
          </Link>
        </div>
        <div className="grid-itemT">
          <Link to={'/route'}>
            <div className="image2" style={{ backgroundImage: `url(${campusImage})` }}></div>
            <div className="image-textT">Campus to Campus</div>
          </Link>
        </div>
      </section>

      <div className='trans_content'>
        <h2>Select SFU Campus</h2>
        <div className='campus_dropdown'>
          <select className="campus_selector" onChange={handleCampusChange}>
            <option value="">Select Campus</option>
            <option value="Burnaby">Burnaby</option>
            <option value="Surrey">Surrey</option>
            <option value="Vancouver">Vancouver</option>
          </select>
        </div>
      </div>
      <div className='select_stop'>
        <h2>Bus Stop</h2>
        <div className='stop_dropdown'>
          <select
            className="stop_selector"
            onChange={handleStopChange}
            disabled={!selectedCampus}
          >
            <option value="">Select Stop</option>
            {selectedCampus && busStops[selectedCampus].map((stop) => (
              <option key={stop.value} value={stop.label}>{stop.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='bus_info'>
        <h2>Bus Information</h2>
        <ul>
          {selectedStop && busData[selectedStop] && busData[selectedStop].map((bus, index) => (
            <li key={index} className='bus_item'>
              <div className='bus_code'>{bus.routeCode}</div>
              <div className='bus_details'>
                <div className='bus_route'>{bus.routeName}</div>
                <div className='bus_time'>{bus.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transportation;
