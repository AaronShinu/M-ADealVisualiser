import React from 'react';

const DealTable = ({ deals }) => {
  return (
    <div className="table-responsive mb-4">
      <table className="table table-striped table-bordered align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Acquirer</th>
            <th>Target</th>
            <th>Value ($M)</th>
            <th>Sector</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id}>
              <td>{new Date(deal.date).toLocaleDateString()}</td>
              <td>{deal.acquirer}</td>
              <td>{deal.target}</td>
              <td>${(deal.value / 1_000).toLocaleString()}</td>
              <td>{deal.sector}</td>
              <td>{deal.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealTable;
