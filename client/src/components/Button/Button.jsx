import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
    width: auto;
    padding: 10px 20px;
    background-color: ${props => props.variant === 'primary' ? '#000000' : 'transparent'};
    color: ${props => props.variant === 'primary' ? '#ffffff' : '#000000'};
    border: ${props => props.variant === 'primary' ? 'none' : '1px solid #000000'};
    border-radius: 40px;
    text-align: center;
    font-size: 0.95em;
    cursor: pointer;
`;


Button.propTypes = { variant: PropTypes.string.isRequired }

Button.defaultProps = { variant: 'primary' }


export default Button;