import PropTypes from 'prop-types';
import styled from 'styled-components';


const Slider = styled.div`
    display: inherit;
    position: relative;
    width: inherit;
    height: 100%;
    position: relative;
    transform: translateX(-${props => props.translateValue}px);
    transition: transform ease-in-out 0.6s;
    transition-timing-function: cubic-bezier(0.15, 0, 0, 1);
    will-change: transform;

    > div {
        margin: 0px 5px;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`;

Slider.defaultProps = { translateValue: 0 }

Slider.propTypes = { translateValue: PropTypes.number.isRequired }

export default Slider;