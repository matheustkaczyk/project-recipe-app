import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import profileIcon from '../images/profileIcon.svg';
import FoodContext from '../context/FoodContext';
import IngredientCard from '../components/IngredientsCard';

const SearchFoodByIngredients = () => {
  const { ingredients } = useContext(FoodContext);
  const NUMBER_OF_CARDS = 12;

  return (
    <div>
      <header>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <p data-testid="page-title">Explorar Ingredientes</p>
      </header>
      { ingredients.slice(0, NUMBER_OF_CARDS).map((ingredient, index) => (
        <IngredientCard
          key={ index }
          ingredientImg={ ingredient.strIngredient }
          ingredientName={ ingredient.strIngredient }
          index={ index }
          path="themealdb"
        />
      ))}
      <FooterMenu />
    </div>
  );
};

export default SearchFoodByIngredients;
