import { shallow } from 'enzyme';

import { Footer } from '../../';


describe('Footer component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Footer />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})