import PropTypes from 'prop-types';

import { Button, MenuButton } from '../';

import './styles.scss';


function Header({ isLogged }) {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo">
                    <h3>SCHALA PROJECT DEV.</h3>
                </div>
                {!isLogged && (
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


Header.defaultProps = { isLogged: false }

Header.propTypes = { isLogged: PropTypes.bool.isRequired }


export default Header;

