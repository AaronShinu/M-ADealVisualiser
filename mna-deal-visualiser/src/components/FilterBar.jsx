import React from 'react';

const FilterBar = ({ selectedSector, setSelectedSector, selectedRegion, setSelectedRegion}) => {
  const sectors = ['All', 'Technology', 'Energy', 'Consumer Goods', 'Healthcare', 'Finance', 'Industrials'];
  const regions = ['All', 'North America', 'Europe', 'Asia'];

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
      <div className="d-flex align-items-center gap-2">
        <label className="fw-semibold">Sector:</label>
        <select
          className="form-select"
          style={{ width: '200px' }}
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>{sector}</option>
          ))}
        </select>
      </div>

      <div className="d-flex align-items-center gap-2">
        <label className="fw-semibold">Region:</label>
        <select
          className="form-select"
          style={{ width: '200px' }}
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
