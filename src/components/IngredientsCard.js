import React from 'react';
import PropTypes from 'prop-types';

const IngredientsCard = ({ index, ingredientImg, ingredientName, path }) => (
  <div
    className="recipe-card"
    data-testid={ `${index}-ingredient-card` }
  >
    <img
      src={ `https://www.${path}.com/images/ingredients/${ingredientImg}-Small.png` }
      alt="ingredient"
      data-testid={ `${index}-card-img` }
    />
    <p data-testid={ `${index}-card-name` }>{ ingredientName }</p>
  </div>
);

IngredientsCard.propTypes = {
  ingredientImg: PropTypes.string.isRequired,
  ingredientName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};

export default IngredientsCard;
