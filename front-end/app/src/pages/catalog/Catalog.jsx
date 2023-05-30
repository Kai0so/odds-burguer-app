import React, { useState } from 'react';
import {
  CatalogNavbar, CatalogTemplate, FoodCard, CatalogSearchbar, FoodModal,
} from '../../components';
import CatalogTotalValue from '../../components/catalogTotalValue/CatalogTotalValue';

function Catalog() {
  const cardList = [
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181829_OF22_i.jpg',
      name: 'Valete',
      description: 'Delicioso hamburguer de carne bovina 120g, sem salada e com muito cheddar e bacon.',
      price: 29.99,
      id: 1,
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181835_6L2I_i.jpg',
      name: 'Dama',
      description: 'Delicioso hamburguer de frango com bacon 150g, com salada e onion rings super crocantes.',
      price: 34.99,
      id: 2,
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181836_2D00_i.jpg',
      name: 'Rei',
      description: 'Delicioso hamburguer de carne bovina 150g, com salada e onion rings super crocantes.',
      price: 34.99,
      id: 3,
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202180948_c865_d.jpg',
      name: 'Ás',
      description: 'Delicioso hamburguer duplo de carne bovina 150g, com salada e duplo bacon.',
      price: 39.99,
      id: 4,
    },
    {
      src: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202181837_6UX2_i.jpg',
      name: 'Trinca',
      description: 'Delicioso hamburguer triplo de carne bovina 100g, sem salada e triplo bacon.',
      price: 44.99,
      id: 5,
    },
    {
      src: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202202180948_xNsc_d.jpg',
      name: 'Coringa',
      description: 'Delicioso blend vegetariano 150g, com molho especial de ervas.',
      price: 34.99,
      id: 6,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/burger-com-batatas-fritas-icon-ilustracao-conceito-de-icone-de-fast-food-isolado-estilo-cartoon-plana_138676-1342.jpg?w=2000',
      name: 'Flush Bacon',
      description: 'Delicioso blend de carne bovina 75g, com bacon e cheddar, acompanha fritas 70g.',
      price: 24.99,
      id: 7,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/burger-com-batatas-fritas-icon-ilustracao-conceito-de-icone-de-fast-food-isolado-estilo-cartoon-plana_138676-1342.jpg?w=2000',
      name: 'Flush Chicken',
      description: 'Delicioso blend de frango com bacon 75g e cheddar, acompanha fritas 70g.',
      price: 24.99,
      id: 8,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/burger-com-batatas-fritas-icon-ilustracao-conceito-de-icone-de-fast-food-isolado-estilo-cartoon-plana_138676-1342.jpg?w=2000',
      name: 'Flush Salada',
      description: 'Delicioso blend de carne bovina 75g, com cheddar e salada, acompanha fritas 70g.',
      price: 24.99,
      id: 9,
    },
  ];

  const comboCardList = [
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Valete',
      description: 'Burguer Valete + Fritas + Refri.',
      price: 39.99,
      id: 10,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Dama',
      description: 'Burguer Dama + Fritas + Refri.',
      price: 44.99,
      id: 11,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Rei',
      description: 'Burguer Rei + Fritas + Refri.',
      price: 44.99,
      id: 12,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Ás',
      description: 'Burguer Ás + Fritas + Refri.',
      price: 49.99,
      id: 13,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Trinca',
      description: 'Burguer Trinca + Fritas + Refri.',
      price: 54.99,
      id: 14,
    },
    {
      src: 'https://img.freepik.com/vetores-premium/menu-de-refeicao-infantil-saborosa-burger-burger-de-queijo-com-batatas-fritas-e-refrigerante_138676-116.jpg?w=2000',
      name: 'Combo Coringa',
      description: 'Burguer Coringa + Fritas + Refri.',
      price: 44.99,
      id: 15,
    },
  ];

  const snackCardList = [
    {
      src: 'https://imgs.ponto.com.br/14930641/1xg.jpg',
      name: 'Porção de Fritas Pequena',
      description: 'Fritas crocantes 100g.',
      price: 8.99,
      id: 16,
    },
    {
      src: 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/259e9eb1-0e9e-48e8-81ec-527a409ed699/5822b377-9147-4db3-89bd-9c9a71cadb38.jpg',
      name: 'Porção de Fritas Grande',
      description: 'Fritas crocantes 400g.',
      price: 19.99,
      id: 17,
    },
    {
      src: 'https://receitinhas.com.br/wp-content/uploads/2017/06/Batatosa-scaled.jpg',
      name: 'Porção de Fritas com Cheddar e Bacon',
      description: 'Fritas crocantes 400g com cheddar especial da casa e bacon.',
      price: 21.99,
      id: 18,
    },
    {
      src: 'https://i.pinimg.com/originals/7c/c2/6e/7cc26eb07602d75b616c038b011d34b0.gif',
      name: 'Porção de Onion Rings',
      description: '10 unidades de onions sequinhas e crocantes.',
      price: 14.99,
      id: 19,
    },
  ];

  const sauceCardList = [
    {
      src: 'https://cdn0.tudoreceitas.com/pt/posts/6/1/5/maionese_de_bacon_para_hamburguer_10516_paso_7_600.jpg',
      name: 'Baconnaise',
      description: 'Maionese de bacon da casa 30ml.',
      price: 3.99,
      id: 20,
    },
    {
      src: 'https://www.receiteria.com.br/wp-content/uploads/maionese-caseira-01.jpg',
      name: 'Maionese da Casa',
      description: 'Maionese especial com milho.',
      price: 2.99,
      id: 21,
    },
    {
      src: 'https://cdn.viptable.com.br/uploads/foods/karo-s-burger/molhos-02e0e0b0-7bce-4880-901e-cf51d7321bb9/copia-de-molho-chilli-pepper/medium_copia-de-molho-chilli-pepper_picture.jpg',
      name: 'Cheddar Cremoso',
      description: 'Molho de cheddar cremoso especial da casa.',
      price: 3.99,
      id: 22,
    },
    {
      src: 'https://img.cybercook.com.br/receitas/602/molho-barbecue-original.jpeg',
      name: 'Barbecue',
      description: 'Molho barbecue tradicional.',
      price: 2.99,
      id: 23,
    },
  ];

  const drinkCardList = [
    {
      src: 'https://samsclub.vtexassets.com/arquivos/ids/157254-800-450?v=637432117269130000&width=800&height=450&aspect=true',
      name: 'Coca-Cola',
      description: 'Lata de 350ml.',
      price: 6.49,
      id: 24,
    },
    {
      src: 'https://prezunic.vtexassets.com/arquivos/ids/162941/63ac392720a0ed320dd3683a.png?v=638078280127100000',
      name: 'Guaraná Antarctica',
      description: 'Lata de 350ml.',
      price: 6.49,
      id: 25,
    },
  ];

  const dessertCardList = [
    {
      src: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/d4e6e76d-0f50-4730-adde-6d27d5caee3a/202209042217_OsOW_d.jpg',
      name: 'Hambúrguer Doce',
      description: 'Pão selado no açúcar recheado com um saboroso blend de Ninho e Nutella.',
      price: 18.99,
      id: 26,
    },
    {
      src: 'https://www.confeiteiradesucesso.com/wp-content/uploads/2017/10/pastelninhonutella.jpg',
      name: 'Pastelzinho de Ninho com Nutella',
      description: 'Delicioso doce de ninho recheado com nutella.',
      price: 14.99,
      id: 27,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setShowModal(true);
    setSelectedCard(card);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedCard({});
  };

  return (
    <div className="catalog-container">
      <CatalogNavbar />
      <CatalogTemplate />
      <CatalogSearchbar />
      <h1>Burguers</h1>
      <div className="catalog-card-container">
        {cardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <br />
      <h1>Combos</h1>
      <div className="catalog-card-container">
        {comboCardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <br />
      <h1>Porções</h1>
      <div className="catalog-card-container">
        {snackCardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <br />
      <h1>Molhos</h1>
      <div className="catalog-card-container">
        {sauceCardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <br />
      <h1>Bebidas</h1>
      <div className="catalog-card-container">
        {drinkCardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <br />
      <h1>Sobremesas</h1>
      <div className="catalog-card-container">
        {dessertCardList.map((card) => (
          <div
            tabIndex={0}
            role="button"
            className="catalog-card"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card)}
          >
            <FoodCard
              key={card.id}
              card={card}
            />
          </div>
        ))}
      </div>
      <CatalogTotalValue />
      {showModal && (
        <div className="backdrop">
          <FoodModal
            food={selectedCard}
            onClose={handleModalClose}
          />
        </div>
      )}
    </div>
  );
}

export default Catalog;
