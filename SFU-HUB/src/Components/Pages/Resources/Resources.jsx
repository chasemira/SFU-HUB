import React, { useState } from 'react';
import './resources.css';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // List of SFU resources including Student Learning Commons
  const resources = [
    { name: 'SFU Health & Counselling', link: 'https://www.sfu.ca/students/health.html', category: 'health' },
    { name: 'SFU Academic Advising', link: 'https://www.sfu.ca/students/academicadvising.html', category: 'academics' },
    { name: 'SFU Mental Health Support', link: 'https://www.sfu.ca/students/mentalhealth.html', category: 'mental-health' },
    { name: 'SFU Campus Security', link: 'https://www.sfu.ca/srs/security.html', category: 'safety' },
    { name: 'SFU Financial Aid and Awards', link: 'https://www.sfu.ca/students/financialaid.html', category: 'academics' },
    { name: 'SFU Recreation', link: 'https://www.sfu.ca/students/recreation.html', category: 'health' },
    { name: 'SFU Safety & Risk Services', link: 'https://www.sfu.ca/srs.html', category: 'safety' },
    // New Student Learning Commons resources
    { name: 'SFU Learning Commons - Proofreading Support', link: 'https://www.lib.sfu.ca/about/branches-depts/slc/writing/revising', category: 'academics' },
    { name: 'SFU Learning Commons - Time Management Support', link: 'https://www.lib.sfu.ca/about/branches-depts/slc/learning/time-management/fifteen-time-management-strategies', category: 'academics' },
    { name: 'SFU Library - Equipment Borrowing', link: 'https://www.lib.sfu.ca/borrow/equipment/list', category: 'academics' },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = category === 'all' || resource.category === category;
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <label><a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a></label>
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
