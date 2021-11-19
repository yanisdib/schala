import styled from 'styled-components';


const RoundButton = styled.button`
    width: ${props => props.size ? props.size : 35}px;
    height: ${props => props.size ? props.size : 35}px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: solid 1px ${props => props.borderColor ? props.borderColor : '#000000'};
    border-radius: ${props => props.size ? props.size : 20}px;
    margin: 10px 4px !important;
    cursor: pointer;

    svg{
        height: ${props => props.size ? `calc(${props.size}px - ${props.size / 2})` : '20px'};
        stroke-width: 2px;
    }
`;


export default RoundButton;