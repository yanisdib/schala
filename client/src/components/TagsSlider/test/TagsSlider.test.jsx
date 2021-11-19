import { shallow } from 'enzyme';

import { TagsSlider } from '../..';


describe('TagsSlider component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<TagsSlider></TagsSlider>))

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())
})