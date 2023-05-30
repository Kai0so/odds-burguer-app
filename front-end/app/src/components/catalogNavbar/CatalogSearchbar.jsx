import React from 'react';
import searchIcon from '../../assets/search.png';

function CatalogSearchbar() {
  return (
    <div className="catalog-searchbar-container">
      <div className="catalog-searchbar">
        <input type="text" placeholder="Busque seu lanche" />
        <img src={searchIcon} alt="Pesquisar" />
      </div>
    </div>
  );
}
export default CatalogSearchbar;
