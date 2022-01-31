import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header(props) {
  const { title, haveSearch, get } = props;

  const { enableSearch, setEnableSearch } = useContext(RecipeContext);

  return (
    <div>
      <header>
        <Link to="/profile">
          <img src={ Profile } alt="profile" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {
          haveSearch
          && (
            <button type="button" onClick={ () => setEnableSearch(!enableSearch) }>
              <img src={ Search } alt="search" data-testid="search-top-btn" />
            </button>
          )
        }
        { enableSearch && <SearchBar get={ get } /> }
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  haveSearch: PropTypes.bool.isRequired,
  get: PropTypes.string.isRequired,
};

export default Header;
