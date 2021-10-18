import { mount } from 'enzyme';
import UserPicture from '../../../components/MenuButton/UserPicture';

describe('UserPicture component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<UserPicture picture='blank_profile.jpg' />); 
        console.log(wrapper.props());
    });

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with default picture props', () => {
        expect(wrapper.props().picture).toEqual('blank_profile.jpg');
    });
});