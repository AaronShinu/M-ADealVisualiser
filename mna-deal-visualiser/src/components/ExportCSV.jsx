import React from 'react';
import { CSVLink } from 'react-csv';

const ExportCSV = ({ data, }) => {
    const headers = [
        {label : "Date", key : "date"},
        {label : "Acquirer", key : "acquirer"},
        {label : "Target", key : "target"},
        {label : "Value $(M)", key : "value"},
        {label : "Sector", key : "sector"},
        {label : "Region", key : "region"}
    ];

    return (
        <div className="text-end mb-3">
            <CSVLink
                data = {data}
                headers = {headers}
                filename='M&A_data.csv'
                className="btn btn-outline-primary"
            >
            </CSVLink>
        </div>
    );
};

export default ExportCSV;