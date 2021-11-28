import styled from 'styled-components';


const ImagesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
    flex: 1;
    justify-items: center;

    img{
        width: 180px;
        height: 180px;
        border-radius: 10px;
        object-fit: cover;

        &:hover{
            opacity: 0.75;
            transition: opacity 500ms ease-in-out;
        }
    }
`;


export default ImagesGrid;