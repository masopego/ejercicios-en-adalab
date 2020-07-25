import React from 'react';
import CityImage from './CityImage';

const images = {
  Praga: 'https://www.viajarpraga.com/img/guia-viaje-praga.jpg',
  Boston:
    'https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555942283/production/city/hero_image_14_1555942283.jpg',
};

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.image = null;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let city = ev.target.value;
    if (images[city]) {
      this.image = images[city];
    } else {
      this.image = null;
    }
    this.forceUpdate();
  }

  getImage() {
    if (!this.image) {
      return null;
    }

    return <CityImage image={this.image} />;
  }

  render() {
    return (
      <>
        <select onChange={this.handleChange}>
          <option>Buenos Aires</option>
          <option>Sydney</option>
          <option>Praga</option>
          <option>Boston</option>
          <option>Tokio</option>
        </select>
        {this.getImage()}
      </>
    );
  }
}

export default Destiny;
