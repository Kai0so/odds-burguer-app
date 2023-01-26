import React from 'react';
import { CatalogNavbar, CatalogTemplate, FoodCard } from '../../components';

function Catalog() {
  const cardList = [
    'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181829_OF22_i.jpg',
    'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181835_6L2I_i.jpg',
    'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181836_2D00_i.jpg',
    'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202180948_c865_d.jpg',
    'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181837_6UX2_i.jpg',
  ];

  return (
    <div>
      <CatalogNavbar />
      <CatalogTemplate />
      <br />
      {cardList.map((card, index) => <FoodCard key={index} cardImage={card} />)}
    </div>
  );
}

export default Catalog;
