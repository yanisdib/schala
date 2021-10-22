import React from 'react';
import PropTypes from 'prop-types';

function Header({ isLogged }) {
    return (
        <header>
            
        </header>
    );
}

Header.defaultProps = {
    isLogged: false
};

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired
};

export default Header;

