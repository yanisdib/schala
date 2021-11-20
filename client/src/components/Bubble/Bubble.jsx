import PropTypes from 'prop-types';
import styled from "styled-components";


const Bubble = styled.div`    
    display: flex;
    position: absolute;
    top: ${props => props.coordinates[0]}%;
    left: ${props => props.coordinates[1] - 7}%;
    width: auto;
    height: 30px;    
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    background: #000000d3;
    border-radius: .4em;
    padding: 8px;
    cursor: pointer;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 0.313em solid transparent;
        border-bottom-color: #000000d3;
        border-top: 0;
        margin-left: -0.312em;
        margin-top: -0.312em;
    }
    
    a{
        color: #ffffff;
        font-weight: 400;
    }
`;


Bubble.defaultProps = { coordinates: [] }

Bubble.propTypes = { coordinates: PropTypes.arrayOf(Number).isRequired, }


export default Bubble;