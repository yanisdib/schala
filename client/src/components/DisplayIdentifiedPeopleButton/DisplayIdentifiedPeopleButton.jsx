import PropTypes from 'prop-types';
import styled from 'styled-components';

import { User } from '@styled-icons/feather/User';


const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 32px;
    height: 32px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: white;
    background-color: #00000094;
    border-radius: 2rem;
    cursor: pointer;
`;

const UserIcon = styled(User)`
    height: 16px;
    stroke-width: 2px;
`;

function DisplayIdentifiedPeopleButton({ onClick }) {
    return (
        <Button onClick={onClick}>
            <UserIcon />
        </Button>
    );
}


DisplayIdentifiedPeopleButton.defaultProps = {
    onClick: () => { },
}

DisplayIdentifiedPeopleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}


export default DisplayIdentifiedPeopleButton;