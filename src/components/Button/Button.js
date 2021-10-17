import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    width: auto;
    padding: 10px 20px;
    background-color: ${props => props.type === 'primary' ? '#fda5dd' : 'transparent'};
    color: ${props => props.type === 'primary' ? '#ffffff' : '#000000'};
    border: ${props => props.type === 'primary' ? 'none' : '1px solid #000000'};
    border-radius: 40px;
    text-align: center;
    font-size: 0.95em;
`;

Button.propTypes = {
    type: PropTypes.string,
};

Button.defaultProps = {
    type: 'primary',
};

export default Button;