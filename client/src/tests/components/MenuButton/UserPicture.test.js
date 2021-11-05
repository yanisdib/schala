import { mount } from 'enzyme';
import UserPicture from '../../../components/MenuButton/UserPicture';

describe('UserPicture component', () => {
    let wrapper;
    let defaultProps = UserPicture.defaultProps.picture;

    beforeEach(() => wrapper = mount(<UserPicture />));

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('renders with default picture props', () => {
        expect(defaultProps).toEqual('blank_profile.jpg');
    })
})