import { shallow } from 'enzyme';
import MenuButton from '../../../components/MenuButton/MenuButton';

describe('MenuButton Component', () => {
    let wrapper, onMenuButtonClick;
    let defaultProps = MenuButton.defaultProps.onClick;

    beforeEach(() => {
        onMenuButtonClick = jest.fn(); // create a spy
        wrapper = shallow(<MenuButton onClick={onMenuButtonClick} />);
    });

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('has default props defined', () => {
        expect(defaultProps).toBeDefined();
    })

    it('calls anonymous function by default on click', () => {
        wrapper.simulate('click');
        expect(onMenuButtonClick).toHaveBeenCalled();
    });
});