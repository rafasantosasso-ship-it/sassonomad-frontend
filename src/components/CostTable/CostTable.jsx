import './CostTable.css';

function CostTable({ columns, rows, totalRow }) {
  return (
    <table className="sn-cost-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={`${row[0]}-${index}`}>{cell}</td>
            ))}
          </tr>
        ))}
        {totalRow && (
          <tr className="sn-cost-table__total">
            {totalRow.map((cell, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={`total-${index}`}>{cell}</td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CostTable;
