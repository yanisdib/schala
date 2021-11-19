import { shallow } from 'enzyme';

import RoundButton from '../RoundButton';


describe('RoundButton component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<RoundButton>Hello</RoundButton>))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())

    it('should receive children', () => expect(wrapper.text()).toEqual('Hello'))
})