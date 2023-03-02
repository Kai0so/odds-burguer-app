import React, { useState } from 'react';
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
    {
      src: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202180948_xNsc_d.jpg',
      name: 'Coringa',
      description: 'Delicioso blend vegetariano 150g, com molho especial de ervas.',
    },
  ];

  const [counter, setCounter] = useState({
    Valete: 0, Dama: 0, Rei: 0, Às: 0, Trinca: 0, Coringa: 0,
  });

  const changeOrderCounter = (type, event) => {
    const inputName = event.target.name;
    if (type === '+') {
      setCounter({ ...counter, [inputName]: counter[inputName] + 1 });
    }
    if (type === '-' && counter[inputName] !== 0) {
      setCounter({ ...counter, [inputName]: counter[inputName] - 1 });
    }
  };

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
          <div>
            <button type="button" name={card.name} disabled={counter[card.name] === 0} onClick={(event) => changeOrderCounter('-', event)}>-</button>
            <span>{counter[card.name]}</span>
            <button type="button" name={card.name} onClick={(event) => changeOrderCounter('+', event)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
