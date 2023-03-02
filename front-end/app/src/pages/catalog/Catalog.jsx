import React from 'react';
import {
  CatalogNavbar, CatalogTemplate, FoodCardImage, FoodCardDescription,
} from '../../components';

function Catalog() {
  const cardList = [
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181829_OF22_i.jpg',
      name: 'Valete',
      description: 'Delicioso hamburguer de carne bovina 120g, sem salada e com muito cheddar e bacon.',
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181835_6L2I_i.jpg',
      name: 'Dama',
      description: 'Delicioso hamburguer de frango com bacon 150g, com salada e onion rings super crocantes.',
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181836_2D00_i.jpg',
      name: 'Rei',
      description: 'Delicioso hamburguer de carne bovina 150g, com salada e onion rings super crocantes.',
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202180948_c865_d.jpg',
      name: 'Ás',
      description: 'Delicioso hamburguer duplo de carne bovina 150g, com salada e duplo bacon.',
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181837_6UX2_i.jpg',
      name: 'Trinca',
      description: 'Delicioso hamburguer triplo de carne bovina 100g, sem salada e triplo bacon.',
    },
  ];

  return (
    <div>
      <CatalogNavbar />
      <CatalogTemplate />
      <br />
      {cardList.map((card, index) => (
        <div>
          <FoodCardImage key={index} cardImage={card.src} />
          {' '}
          <FoodCardDescription
            key={index}
            cardName={card.name}
            cardDescription={card.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Catalog;
