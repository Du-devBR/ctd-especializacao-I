import React from 'react';
import PropTypes from "prop-types"

export const Cards = ( props) => {

  const {name, age, city} = props
  return (
    <div>
      <p>Nome : {name}</p>
      <p>Idade: {age}</p>
      <p>Cidade: {city}</p>
    </div>
  );

};

Cards.prototype ={
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}
