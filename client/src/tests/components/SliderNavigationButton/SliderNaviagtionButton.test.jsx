import { shallow } from 'enzyme';

import { SliderNavigationButton } from '../../../components';


describe('SliderNavigationButton component', () => {
    let wrapper;
    const { size, isNext, onClick } = SliderNavigationButton.defaultProps;

    beforeEach(() => wrapper = shallow(<SliderNavigationButton />))

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())
    it('has default props', () => {
        expect(size).toEqual(30);
        expect(isNext).toBeTruthy();
        expect(onClick).toBeDefined();
    })
})