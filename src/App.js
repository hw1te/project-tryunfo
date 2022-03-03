import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

/* Para fazer o código consultei os repositórios: https://github.com/tryber/sd-019-b-project-tryunfo/pull/81
https://github.com/tryber/sd-019-b-project-tryunfo/pull/127
https://github.com/tryber/sd-019-b-project-tryunfo/pull/105
https://github.com/tryber/sd-019-b-project-tryunfo/pull/9
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, checked, type, value } = target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;
      const max = 90;
      const min = 0;
      const maxSum = 210;
      this.setState({
        isSaveButtonDisabled: !((cardName
          && cardDescription
          && cardImage
          && Number(cardAttr1) >= min
          && Number(cardAttr1) <= max
          && Number(cardAttr2) >= min
          && Number(cardAttr2) <= max
          && Number(cardAttr3) >= min
          && Number(cardAttr3) <= max
          && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum)),
      });
    });
  }

  onSaveButtonClick() {
    const {
      savedCards,
    } = this.state;
    this.setState((previousState) => ({
      savedCards: [...savedCards, previousState],
    }), () => this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      hasTrunfo: previous.savedCards.some((card) => card.cardTrunfo),
    })));
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        { savedCards.map((card, index) => (
          <Card
            key={ index }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
        )) }
      </div>
    );
  }
}

export default App;
