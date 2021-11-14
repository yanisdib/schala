import PropTypes from 'prop-types';

import { MenuButton } from '../';
import HeaderAuthButton from './HeaderAuthButton/HeaderAuthButton';

import './styles.scss';

function Header({ isLogged }) {
    if (!isLogged) {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="logo"></div>
                    <div className="signup-button">
                        <HeaderAuthButton>Signup</HeaderAuthButton>
                    </div>
                    <div className="signin-button">
                        <HeaderAuthButton variant="login">Login</HeaderAuthButton>
                    </div>
                    <div className="header-menu-button">
                        <MenuButton />
                    </div>
                </div>
            </header>
        );
    }
}

Header.defaultProps = {
    isLogged: false,
}

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
}

export default Header;

