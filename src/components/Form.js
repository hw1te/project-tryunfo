import React, { Component } from 'react';

class Form extends Component {
  render() {

    return (
    <div>
      <label>name</label>
      <input type="text" data-testid="name-input" name="name"></input>
      <label>Descrição</label>
      <textarea datat-testid="description-input"></textarea>
      <label>Attr 1</label>
      <input type="number" data-testid="attr1-input"></input>
      <label>Attr 2</label>
      <input type="number" data-testid="attr2-input"></input>
      <label>Attr 3</label>
      <input type="number" data-testid="attr3-input"></input>
      <label>Imagem</label>
      <input type="text" data-testid="image-input"></input>
      <label>Raridade</label>
      <select placeholder='Selecione a raridade da carta'>
        <opt>normal</opt>
        <opt>raro</opt>
        <opt>muito</opt>
      </select>
    </div>
    );
  }
}

export default Form;
