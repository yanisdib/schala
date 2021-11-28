import PropTypes from 'prop-types';

import { Button, MenuButton } from '../';

import './styles.scss';


function Header({ isAuthenticated }) {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <h3>SCHALA PROJECT DEV.</h3>
                </div>
                {!isAuthenticated && (
                    <>
                        <div className="signup-button">
                            <Button>Signup</Button>
                        </div>
                        <div className="signin-button">
                            <Button>Login</Button>
                        </div>
                    </>
                )}
                <div className="header-menu-button">
                    <MenuButton />
                </div>
            </div>
        </header>
    );
}


Header.defaultProps = { isAuthenticated: false }

Header.propTypes = { isAuthenticated: PropTypes.bool.isRequired }


export default Header;

