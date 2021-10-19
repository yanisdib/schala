import { shallow } from 'enzyme';
import MenuButton from '../../../components/MenuButton/MenuButton';

describe('MenuButton Component', () => {
    let wrapper, onMenuButtonClick;
    beforeEach(() => {
        onMenuButtonClick = jest.fn(); // create a spy
        wrapper = shallow(<MenuButton onClick={onMenuButtonClick} />);
    });

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('calls anonymous function by default on click', () => {
        wrapper.simulate('click');
        expect(onMenuButtonClick).toHaveBeenCalled();
    });
});