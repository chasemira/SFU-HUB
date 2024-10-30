import React, { useState, useEffect } from 'react';
import './resources.css';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('https://api.sfuhub.ca/resources');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Resources:', data); 
        setResources(data); 
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error); 
        setError(error);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = category === 'all' || resource.category === category;
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log('Filtered Resources:', filteredResources); 

  if (loading) return <p>Loading resources...</p>;
  if (error) return <p>Error fetching resources: {error.message}</p>;

  return (
    <div className="resources__container">
      <h1 className="resources__header">SFU Resources</h1>

      <h2 htmlFor="searchBar">Search Resources:</h2>
      <input
        type="text"
        id="searchBar"
        className="resources__search-bar"
        placeholder="Search resources..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 htmlFor="categoryFilter">Select Category:</h2>
      <select
        id="categoryFilter"
        className="resources__category-filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="health">Health</option>
        <option value="academics">Academics</option>
        <option value="mental-health">Mental Health</option>
        <option value="safety">Safety</option>
      </select>

      <ul className="resources__list">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <li key={resource.name} className="resources__item" data-category={resource.category}>
              <label>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </label>
            </li>
          ))
        ) : (
          <li className="resources__no-results">No resources found for "{searchTerm}". Try searching with a different keyword.</li>
        )}
      </ul>
    </div>
  );
};

export default Resources;
