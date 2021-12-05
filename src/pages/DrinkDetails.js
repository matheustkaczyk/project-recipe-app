import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import DrinksContext from '../context/DrinksContext';
import fetchDrinkDetailsApi from '../services/fetchDrinkDetailsApi';
import FoodRecomendationCard from '../components/FoodRecomendationCard';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import FoodContext from '../context/FoodContext';
import getIngredients from '../util/getIngredients';
import getMeasure from '../util/getMeasures';
import getFavoriteDrink from '../util/getFavoriteDrink';
import onFavoriteDrink from '../util/onFavoriteDrink';
import Copy from '../components/Clipboard-Copy';
<<<<<<< HEAD
=======
import getFavorite from '../util/getFavorite';
>>>>>>> group-3-styles
import './details.css';

const DrinkDetails = () => {
  const history = useHistory();
  const { pathname } = history.location;
  const pathnameSeparate = pathname.split('/');
  const actualPath = pathnameSeparate[2];
  const url = window.location.href;

  const { drinkDetails, setDrinkDetails } = useContext(DrinksContext);
  const { foods } = useContext(FoodContext);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const RECOMENDATION_CARDS = 6;

  const copy = () => {
    Copy(url);
    setShowMsg(true);
  };

  useEffect(() => {
    fetchDrinkDetailsApi(actualPath).then((data) => setDrinkDetails(data.drinks));
  }, [actualPath, setDrinkDetails]);

  useEffect(() => {
<<<<<<< HEAD
=======
    getFavorite(drinkDetails, setFavorite);
>>>>>>> group-3-styles
    getFavoriteDrink(drinkDetails, setFavorite);
    getIngredients(drinkDetails, setIngredients);
    getMeasure(drinkDetails, setMeasures);
  }, [drinkDetails]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="drink-details-container">
      {
        drinkDetails.map(({
          strDrinkThumb,
          strDrink,
          strCategory,
          strInstructions,
          strAlcoholic,
          idDrink,
        }, i) => (
          <div key={ i }>
            <img
              key={ strDrinkThumb }
              src={ strDrinkThumb }
              alt="thumbnail"
              data-testid="recipe-photo"
              className="details-image"
            />
            <div className="details-buttons">
              <h1 key={ strDrink } data-testid="recipe-title">{strDrink}</h1>
              <div>
                <button
                  type="button"
                  data-testid="share-btn"
                  key={ shareIcon }
                  onClick={ () => copy() }
                >
                  <img src={ shareIcon } alt="share-icon" />
                </button>
                <button
                  type="button"
                  onClick={ () => onFavoriteDrink(drinkDetails, setFavorite, favorite) }
                  key={ blackHeartIcon }
                >
                  <img
                    data-testid="favorite-btn"
                    src={ (favorite) ? blackHeartIcon : whiteHeartIcon }
                    alt="favorite-icon"
                  />
                </button>
              </div>
            </div>
            { showMsg && <p>Link copiado!</p> }
            <h2 data-testid="recipe-category" key={ strAlcoholic }>{strAlcoholic}</h2>
            <h2 data-testid="recipe-category" key={ strCategory }>{strCategory}</h2>
            <h3>Ingredients</h3>
            <ul>
              {
                ingredients.map((ingredient) => ingredient.map((item, index) => (
                  <li
                    key={ item }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${item} - ${measures[0][index]}`}
                  </li>
                )))
              }
            </ul>
            <p data-testid="instructions" key={ strInstructions }>{strInstructions}</p>
            <Carousel
              responsive={ responsive }
              swipeable={ false }
              draggable={ false }
              showDots
              ssr
            >
              { foods.slice(0, RECOMENDATION_CARDS).map((recipe, index) => (
                <FoodRecomendationCard key={ index } recipe={ recipe } index={ index } />
              ))}
            </Carousel>
            <Link to={ `/bebidas/${idDrink}/in-progress` }>
              <button
                data-testid="start-recipe-btn"
                key={ i }
                type="button"
                className="start-recipe-btn"
              >
                Iniciar receita
              </button>
            </Link>
          </div>))
      }
    </div>
  );
};

export default DrinkDetails;
