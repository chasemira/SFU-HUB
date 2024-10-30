// import React, { useState, useEffect } from 'react';
// import './Transportation.css';

// function Transportation() {
//   const [campusData, setCampusData] = useState([]);
//   const [stopData, setStopData] = useState([]);
//   const [busData, setBusData] = useState([]);
//   const [selectedCampus, setSelectedCampus] = useState('');
//   const [selectedStop, setSelectedStop] = useState('');

//   // Fetch campus data on component mount
//   useEffect(() => {
//     fetch('https://api.sfuhub.ca/transit')
//       .then(response => response.json())
//       .then(data => setCampusData(data))
//       .catch(error => console.error('Error fetching campus data:', error));
//   }, []);

//   const handleCampusChange = (event) => {
//     setSelectedCampus(event.target.value);
//     setSelectedStop(''); // Reset selected stop

//     // Fetch stops for selected campus
//     fetch(`/api/campuses/${event.target.value}/stops`)
//       .then(response => response.json())
//       .then(data => setStopData(data))
//       .catch(error => console.error('Error fetching stop data:', error));
//   };

//   const handleStopChange = (event) => {
//     setSelectedStop(event.target.value);

//     // Fetch buses for selected stop
//     fetch(`/api/stops/${event.target.value}/buses`)
//       .then(response => response.json())
//       .then(data => setBusData(data))
//       .catch(error => console.error('Error fetching bus data:', error));
//   };

//   return (
//     <div className='transportation'>
//       <h1 className='trans_header'>Transportation</h1>
//       <div className='trans_content'>
//         <h2>Select SFU Campus</h2>
//         <div className='campus_dropdown'>
//           <select className="campus_selector" onChange={handleCampusChange}>
//             <option value="">Select Campus</option>
//             {campusData.map((campus) => (
//               <option key={campus.id} value={campus.id}>{campus.name}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className='select_stop'>
//         <h2>Bus Stop</h2>
//         <div className='stop_dropdown'>
//           <select
//             className="stop_selector"
//             onChange={handleStopChange}
//             disabled={!selectedCampus}
//           >
//             <option value="">Select Stop</option>
//             {selectedCampus && stopData.map((stop) => (
//               <option key={stop.stopNumber} value={stop.stopNumber}>{stop.stopName}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className='bus_info'>
//         <h2>Bus Information</h2>
//         <ul>
//           {selectedStop && busData.map((bus, index) => (
//             <li key={index}>
//               <strong>Route:</strong> {bus.routeName} (<strong>{bus.routeCode}</strong>) - <strong>Time:</strong> {new Date(bus.time * 1000).toLocaleTimeString()}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Transportation;

import React, { useState } from 'react';
import './Transportation.css';
import parkingImage from './trans-pics/parking.jpg';
import campusImage from './trans-pics/campus.jpg';

const busStopsData = {
  Burnaby: [
    { value: 'Burnaby1', label: 'SFU Transportation Centre @ Bay 1' },
    { value: 'Burnaby2', label: 'SFU Transportation Centre @ Bay 2' },
    { value: 'Burnaby3', label: 'SFU Bus Exchange' },
  ],
  Surrey: [
    { value: 'Surrey1', label: 'Surrey Central' },
    { value: 'Surrey2', label: 'King George Station' },
  ],
  Vancouver: [
    { value: 'Vancouver1', label: 'Waterfront Station' },
    { value: 'Vancouver2', label: 'Granville Station' },
  ],
};

const busData = {
  Burnaby1: [
    { routeName: 'Burquitlam Station/SFU', routeCode: '143', time: '10:00 AM' },
    { routeName: 'SFU/Metrotown Station', routeCode: '144', time: '10:15 AM' },
  ],
  Burnaby2: [
    { routeName: 'Hastings St', routeCode: 'R5', time: '10:30 AM' },
    { routeName: 'SFU/Production Station', routeCode: '145', time: '10:45 AM' },
  ],
  // Add more stops data as needed
};

function Transportation() {
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedStop, setSelectedStop] = useState('');

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
    setSelectedStop(''); // Reset selected stop
  };

  const handleStopChange = (event) => {
    setSelectedStop(event.target.value);
  };

  return (
    <div className='transportation'>
      <h1 className='trans_header'>Transportation</h1>

    <section className="image-grid">
      <div className="grid-item">
        <div className="image1" style={{ backgroundImage: `url(${parkingImage})` }}></div>
        <div className="image-text">Parking</div>
      </div>
      <div className="grid-item">
        <div className="image2" style={{ backgroundImage: `url(${campusImage})` }}></div>
        <div className="image-text">Campus to Campus</div>
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
            {selectedCampus && busStopsData[selectedCampus].map((stop) => (
              <option key={stop.value} value={stop.value}>{stop.label}</option>
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
}

export default Transportation;
