import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item
            name="Cereales con chocolate"
            description="Cereales rellenos de chocolate"
            quantity={2}
            category="Cereales"
            price={5}
          />
        </li>
        <li>
          <Item
            name="Hamburguesa con queso"
            description="Hamburguesa rica y saludable"
            quantity={1}
            category="Fast-food"
            price={15}
          />
        </li>
        <li>
          <Item
            name="Hamburguesa con bacon"
            description="Hamburguesa grasienta"
            quantity={1}
            category="Fast-food"
            price={9}
          />
        </li>
      </ul>
    );
  }
}

export default ItemList;
