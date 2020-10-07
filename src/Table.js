import React from 'react';
import numeral from "numeral";
import './Table.css';

function Table({ countries}) {
    return (
        <div>
            <div className="table">
                {countries.map(({country, cases}) => (
                    <tr>
                        <td>{country}</td>
                        <td><strong>{numeral(cases).format()}</strong></td>
                    </tr>
                ))}
            </div>
        </div>
    )
}

export default Table
