import { shallow } from 'enzyme';

import { Tag } from '../../../components';


describe('Tag Component', () => {
    let wrapper;
    const { variant } = Tag.defaultProps;

    beforeEach(() => wrapper = shallow(<Tag>Hello</Tag>))

    it('renders properly', () => expect(wrapper).toMatchSnapshot())

    it('renders with children text properly', () => expect(wrapper.text()).toEqual('Hello'))

    it('has a defaultProps', () => expect(variant).toEqual('primary'))
})