import styled from 'styled-components';
import PropTypes from 'prop-types';


const Tag = styled.div`
    min-width: 100px;
    width: fit-content;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    padding: 9px 15px;
    background-color: ${props => props.variant === 'primary' ? '#eeeeee' : '#fafafa'};
    color: ${props => props.variant === 'primary' ? '#5c5c5c' : '#000000'};
    border: 1px solid ${props => props.variant === 'primary' ? '#d1d1d1' : '#000000'};
    border-radius: 25px;
    cursor: pointer;
`;

Tag.defaultProps = {
    variant: 'primary',
}

Tag.propTypes = {
    variant: PropTypes.string.isRequired,
}

export default Tag;