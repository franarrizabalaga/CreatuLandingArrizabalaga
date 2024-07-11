
import react from 'react';

const itemlistcontainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Listado de productos...</p>
    </div>
  );
}

export default itemlistcontainer;
