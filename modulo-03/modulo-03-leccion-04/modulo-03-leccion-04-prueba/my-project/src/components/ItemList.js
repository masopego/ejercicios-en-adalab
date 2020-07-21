import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    const arrayOfItems = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5,
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15,
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5,
      },
    ];

    arrayOfItems.filter((element) => element.price < 10);

    /* const items = [<h1>hola</h1>, <h2>que tal</h2>];

    for (let index = 0; index < arrayOfItems.length; index++) {
      const element = arrayOfItems[index];
      items.push(
        <li>
          <Item name={element.name} description={element.description}></Item>
        </li>
      );
    }*/

    return (
      <ul className="item-list">
        {arrayOfItems.map((element) => (
          <li>
            <Item name={element.name} description={element.description}></Item>
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
