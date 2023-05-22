import "./grid-item-style.css";

const GridItem = ({ arrayAux }: any) => {
  /*const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    <Modal isOpen={isOpen} closeModal={closeModal} />
  };*/
  return (
    <div className="grid">
      <label className="text-grid">Jogadores</label>
      <div className="container-grid">
        {arrayAux.slice(0, 8).map((item: any, index: number) => (
          <div className="grid-menu-item" key={index}>
            {item}
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
