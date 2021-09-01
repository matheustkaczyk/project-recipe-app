import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import profileIcon from '../images/profileIcon.svg';

const Profile = () => {
  const emailStorage = JSON.parse(localStorage.getItem('user'));
  let getEmail = '';
  if (emailStorage) {
    getEmail = emailStorage.email;
  }
  const handleClick = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div>
      <header>
        <Link to="/perfil">
          <button type="button">
            <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <p data-testid="page-title">Perfil</p>
      </header>
      <label htmlFor="email-perfil">
        Email:
        <p id="email-perfil" data-testid="profile-email">{ getEmail }</p>
      </label>
      <Link to="/receitas-feitas">
        <button
          name="Receitas Feitas"
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          name="Receitas Favoritas"
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          name="Sair"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Sair
        </button>
      </Link>
      <FooterMenu />
    </div>
  );
};

export default Profile;
