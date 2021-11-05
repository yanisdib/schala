import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tag = styled.div`
    min-width: 100px;
    width: fit-content;
    font-size: 1rem;
    text-align: center;
    padding: 10px 15px;
    background-color: ${props => props.variant === 'primary' ? '#ecf2ff' : '#fafafa'};
    color: ${props => props.variant === 'primary' ? '#0036ff' : '#000000'};
    border: 1px solid ${props => props.variant === 'primary' ? '#0036ff' : '#000000'};
    border-radius: 25px;
`;

Tag.defaultProps = {
    variant: 'primary',
}

Tag.propTypes = {
    variant: PropTypes.string.isRequired,
}

export default Tag;