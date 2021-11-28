import PropTypes from 'prop-types';
import styled from 'styled-components';


const DropdownList = styled.select`
    border-radius: 10px;
    padding: 10px;
    background-color: #e9e9e9;
    border-color: #adadad;
`;


DropdownList.defaultProps = {
    name: 'dropdown-list',
    Options: () => []
};

DropdownList.propTypes = {
    name: PropTypes.string.isRequired,
    Options: PropTypes.func
};


export default DropdownList;