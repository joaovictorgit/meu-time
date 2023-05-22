import "./grid-item-style.css";

const GridItem = ({ arrayAux }: any) => {
  return (
    <div className="grid">
      <label className="text-grid">Jogadores</label>
      <div className="container-grid">
        {arrayAux.slice(0, 12).map((item: any, index: number) => (
          <div className="grid-menu-item" key={index}>
            <img
              src={item.photo}
              alt={item.id}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <div className="container-item-texts">
              <label className="text-item">{item.firstname}</label>
              <label className="text-item1">{item.age} anos</label>
              <label className="text-item1">{item.nationality}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
/*
 <img
              src={item.league.logo}
              alt={item.league.id}
              style={{ width: 50, height: 50 }}
            />
            {index <= 8 ? item.league.name : null}
*/

export default GridItem;
