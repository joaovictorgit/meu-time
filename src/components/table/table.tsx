import "./table-style.css";

const Table = () => {
  // salvar os dados dos selects no localStorage
  const data = [{ id: 18, name: 8, age: 12 }];
  return (
    <div className="container-table">
      <label className="text-table">Informações do Time</label>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Total de Jogos</th>
              <th>Total de Vitórias</th>
              <th>Total de Derrotas</th>
              <th>Total de Empates</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
