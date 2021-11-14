import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderAuthButton = styled.button`
    width: 140px;
    height: 40px;
    background-color: ${props => props.variant === 'login' ? '#fda5dd' : 'transparent'};
    padding: 6px 20px;
    color: ${props => props.variant === 'login' ? '#ffffff' : '#000000'};
    text-align: center;
    font-size: 0.95em;
    border: ${props => props.variant === 'login' ? 'none' : '1px solid #000000'};
    border-radius: 40px;
    cursor: pointer;
`;

HeaderAuthButton.propTypes = {
    variant: PropTypes.string,
}

HeaderAuthButton.defaultProps = {
    variant: 'default',
}

export default HeaderAuthButton;

