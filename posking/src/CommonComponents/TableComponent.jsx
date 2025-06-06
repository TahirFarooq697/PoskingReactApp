
import React from 'react';

export const TableComponent = ({ columns, data, ref}) => {
  return (
    <table className='mt-4 w-full border-t-1 border-table' ref={ref}>
      <thead className="border-b-2 border-table">
        <tr className='text-secondry'>
          {columns.map((col, idx) => (
            <th key={idx} className="py-3 px-7 text-left font-medium text-sm">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='p-2 border-b-1 border-table text-secondry'>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="py-3 px-7 text-left">
                {col.key === 'status' ? (
                  <span className="bg-green-100 px-2 py-1 rounded">{row[col.key]}</span>
                ) : (
                  row[col.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}


