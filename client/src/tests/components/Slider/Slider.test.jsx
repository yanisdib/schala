import { shallow } from 'enzyme';

import { Slider } from '../../../components';


describe('Slider component', () => {
    let wrapper;
    const { translateValue } = Slider.defaultProps;

    beforeEach(() => wrapper = shallow(<Slider></Slider>))

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())
    it('has default props', () => expect(translateValue).toEqual(0))
})