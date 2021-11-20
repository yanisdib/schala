import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultPicture from '../../assets/images/blank_profile.jpg';


const UserPicture = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${props => props.picture});
    background-size: cover;
    background-position: center;
    background-color: white;
    border-radius: 1.5rem;
    margin-left: 10px;
`;


UserPicture.defaultProps = { picture: defaultPicture }

UserPicture.propTypes = { picture: PropTypes.string }


export default UserPicture;