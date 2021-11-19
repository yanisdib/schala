import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ChevronLeft } from '@styled-icons/feather/ChevronLeft';
import { ChevronRight } from '@styled-icons/feather/ChevronRight';


const NavigationButton = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: #272727;
    top: 0;
    bottom: 0;
    ${props => props.isNext ? 'right: 0;' : 'left: 0;'}
    margin: auto;
    border-radius: 1em;
    z-index: 999;
    cursor: pointer;

    svg{
        height: calc(${props => props.size}px*0.66);
        color: #ffffff;
    }
`;


function SliderNavigationButton({ size, isNext, onClick }) {
    return (
        <NavigationButton size={size} isNext={isNext} onClick={onClick}>
            {isNext ? <ChevronRight /> : <ChevronLeft />}
        </NavigationButton>
    );
}

SliderNavigationButton.defaultProps = {
    size: 30,
    isNext: true,
    onClick: () => { },
}

SliderNavigationButton.propTypes = {
    size: PropTypes.number,
    isNext: PropTypes.bool,
    onClick: PropTypes.func,
}

export default SliderNavigationButton;

