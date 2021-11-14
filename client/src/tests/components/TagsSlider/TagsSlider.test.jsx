import { shallow } from 'enzyme';

import { TagsSlider } from '../../../components';


describe('TagsSlider component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<TagsSlider></TagsSlider>))

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())
})