import { shallow } from 'enzyme';

import { Button } from '../..';


describe('Button Component', () => {
    let wrapper;
    const { variant } = Button.defaultProps;

    beforeEach(() => wrapper = shallow(<Button variant="primary">Button</Button>))

    it('renders properly', () => expect(wrapper).toMatchSnapshot())

    it('renders with default props properly', () => expect(variant).toEqual('primary'))

    it('renders with children text properly', () => expect(wrapper.text()).toEqual('Button'))
})