import React from 'react';
import '../styles/MainPage.css';
import PropTypes from 'prop-types';
import SeachInput from '../components/UI/input/SeachInput';

const MainPage = () => {
  return (
    <div className="mainPage">
      <SeachInput />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
