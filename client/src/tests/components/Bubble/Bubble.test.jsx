import { shallow } from 'enzyme';

import { Bubble } from '../../../components';

describe('Bubble component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Bubble />))

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})