import PropTypes from 'prop-types';
import styled from 'styled-components';


const Pointer = styled.div`
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 2rem;
        top: ${props => props.coordinates[0]}%;
        left: ${props => props.coordinates[1]}%;
        cursor: pointer;
`;


Pointer.defaultProps = {
    coordinates: [],
    onClick: () => { },
}

Pointer.propTypes = {
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClick: PropTypes.func.isRequired,
}


export default Pointer;