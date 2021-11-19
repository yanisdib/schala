import { shallow } from 'enzyme';

import UserPicture from '../../../components/MenuButton/UserPicture';


describe('UserPicture component', () => {
    let wrapper;
    const { picture } = UserPicture.defaultProps;

    beforeEach(() => wrapper = shallow(<UserPicture />))

    it('renders properly', () => expect(wrapper).toMatchSnapshot())

    it('renders with default picture props', () => expect(picture).toEqual('blank_profile.jpg'))
})