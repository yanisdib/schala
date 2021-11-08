import PropTypes from 'prop-types';
import styled from 'styled-components';

import { User } from '@styled-icons/feather/User';


const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 37px;
    height: 37px;
    position: absolute;
    bottom: 20px;
    right: 25px;
    color: white;
    background-color: #00000094;
    border-radius: 2rem;
    cursor: pointer;
`;

const Icon = styled(User)`
    height: 19px;
    stroke-width: 2px;
`;

function DisplayIdentifiedButton({ onClick }) {
    return <Button onClick={onClick}><Icon /></Button>;
}


DisplayIdentifiedButton.defaultProps = {
    onClick: () => { },
}

DisplayIdentifiedButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}


export default DisplayIdentifiedButton;