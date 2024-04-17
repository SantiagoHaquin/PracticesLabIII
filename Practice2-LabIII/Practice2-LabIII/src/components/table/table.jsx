const Table = ({ netIncomes }) => {
    const resultIncomes = netIncomes.reduce((count, accumulatedIncome) => {
      return count + accumulatedIncome.income;
    }, 0);
  
    const tableMapped = netIncomes.map((incomeData, index) => (
        <tr key={index}>
        <td>{incomeData.brand}</td>
        <td>{incomeData.income}</td>
        </tr>
        ));
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Marca:</th>
              <th>Ingreso Neto:</th>
            </tr>
          </thead>
          {tableMapped}
        </table>
        <p>Promedio de ingreso neto entre todas las marcas: ${resultIncomes / netIncomes.length}</p>
      </div>
    );
  };
  
  export default Table;