import { shallow } from 'enzyme';

import MenuButton from '../../../components/MenuButton/MenuButton';


describe('MenuButton Component', () => {
    let wrapper, onMenuButtonClick;
    const defaultProps = MenuButton.defaultProps;

    beforeEach(() => {
        onMenuButtonClick = jest.fn(); // creates a spy
        wrapper = shallow(<MenuButton onClick={onMenuButtonClick} />);
    })

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('has default props defined', () => {
        expect(defaultProps.onClick).toBeDefined();
    })

    it('calls anonymous function by default on click', () => {
        wrapper.simulate('click');
        expect(onMenuButtonClick).toHaveBeenCalled();
    })
})