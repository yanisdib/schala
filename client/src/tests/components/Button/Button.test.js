import { shallow } from 'enzyme';
import Button from '../../../components/Button/Button';

describe('Button Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button>Button</Button>);
    });

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders with default props properly', () => {
        expect(wrapper.props().type).toEqual('primary');
    });
    it('renders with children text properly', () => {
        expect(wrapper.text()).toEqual('Button');
    });
});