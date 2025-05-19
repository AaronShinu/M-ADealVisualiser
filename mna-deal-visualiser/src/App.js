import React, { useState } from 'react';
import deals from './data/deals.json';
import DealTable from './components/DealTable.jsx';
import DealChart from './components/DealChart.jsx';
import FilterBar from './components/FilterBar.jsx';
import ExportCSV from './components/ExportCSV.jsx';
import "./App.css";

function App() {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredDeals = deals.filter((deal) => {
  const sectorMatch = selectedSector === 'All' || deal.sector === selectedSector;
  const regionMatch = selectedRegion === 'All' || deal.region === selectedRegion;
  return sectorMatch && regionMatch;
  });

  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">M&A Deal Visualiser</h2>
      <div className="d-flex justify-content-center mb-3">
        <FilterBar selectedSector={selectedSector} setSelectedSector={setSelectedSector} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
      </div>

      <ExportCSV  data={filteredDeals} />
      
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <DealTable deals={filteredDeals} />
        </div>
    </div>

      <div className="mt-4">
        <DealChart deals={filteredDeals} />
      </div>
    </div>
  );
}


export default App;
