import React from 'react';
import MenuIcon from './MenuIcon';
import CatalogIcon from './CatalogIcon'
import ProfileIcon from './ProfileIcon'

function CatalogNavbar() {
  return (
    <div>
      <nav>
        <MenuIcon />
        <CatalogIcon />
        <ProfileIcon />
      </nav>
    </div>
  );
}
export default CatalogNavbar;
