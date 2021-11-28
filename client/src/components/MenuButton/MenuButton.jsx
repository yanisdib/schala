import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPicture from './UserPicture';
import { Menu as Icon } from '@styled-icons/feather/Menu';


const Button = styled.div`
    width: 70px;    
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: end;
    text-align: center;
    background-color: #3e3e3e;
    color: white;
    padding: 6px 12px;
    border-radius: 1.5rem;
    float: right;
    cursor: pointer;
`;

const MenuIcon = styled(Icon)`
    height: 20px;
    color: white;
    stroke-width: 1.5px;
`;


function MenuButton({ userPicture, onClick }) {
    return (
        <Button onClick={onClick}>
            <MenuIcon />
            <UserPicture picture={userPicture} />
        </Button>
    );
}


MenuButton.defaultProps = { onClick: () => { } }

MenuButton.propTypes = { onClick: PropTypes.func.isRequired }


export default MenuButton;