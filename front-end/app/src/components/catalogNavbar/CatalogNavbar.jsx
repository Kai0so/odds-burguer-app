import React from 'react';
import CatalogIcon from './CatalogIcon';
import CatalogSearchbar from './CatalogSearchbar';

function CatalogNavbar() {
  return (
    <div>
      <nav>
        <CatalogIcon />
        <CatalogSearchbar />
      </nav>
    </div>
  );
}
export default CatalogNavbar;
