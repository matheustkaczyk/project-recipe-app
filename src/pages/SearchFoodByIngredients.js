import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import profileIcon from '../images/profileIcon.svg';
import FoodContext from '../context/FoodContext';
import IngredientCard from '../components/IngredientsCard';
import './searchByIngredients.css';

const SearchFoodByIngredients = () => {
  const { ingredients } = useContext(FoodContext);
  const NUMBER_OF_CARDS = 12;

  return (
<<<<<<< HEAD
    <div>
      <header>
=======
    <div className="ingredients-cotainer">
      <header className="header">
>>>>>>> group-3-styles
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <p data-testid="page-title">Explorar Ingredientes</p>
      </header>
<<<<<<< HEAD
      { ingredients.slice(0, NUMBER_OF_CARDS).map((ingredient, index) => (
        <IngredientCard
          key={ index }
          ingredientImg={ ingredient.strIngredient }
          ingredientName={ ingredient.strIngredient }
          index={ index }
          path="themealdb"
        />
      ))}
=======
      <div className="recipe-container">
        { ingredients.slice(0, NUMBER_OF_CARDS).map((ingredient, index) => (
          <IngredientCard
            key={ index }
            ingredientImg={ ingredient.strIngredient }
            ingredientName={ ingredient.strIngredient }
            index={ index }
            path="themealdb"
          />
        ))}
      </div>
>>>>>>> group-3-styles
      <FooterMenu />
    </div>
  );
};

export default SearchFoodByIngredients;
