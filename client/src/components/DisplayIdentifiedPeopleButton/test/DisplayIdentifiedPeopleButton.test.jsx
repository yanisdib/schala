import { shallow } from 'enzyme';

import { DisplayIdentifiedPeopleButton } from '../..';


describe('DisplayIdentifiedPeopleButton component', () => {
    let wrapper, onButtonClick;
    const { onClick } = DisplayIdentifiedPeopleButton.defaultProps;

    beforeEach(() => {
        onButtonClick = jest.fn();
        wrapper = shallow(<DisplayIdentifiedPeopleButton onClick={onButtonClick} />);
    })

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())

    it('has default props', () => expect(onClick).toBeDefined())

    it('calls onClick event', () => {
        wrapper.simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
    })
})