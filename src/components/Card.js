import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section>
        <div>
          <span data-testid="name-card">{ cardName }</span>
          <span data-testid="description-card">{ cardDescription }</span>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <div>
            <span data-testid="rare-card">{ cardRare }</span>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
            { cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
