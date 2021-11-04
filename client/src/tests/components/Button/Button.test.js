import { shallow } from 'enzyme';
import { Button } from '../../../components';

describe('Button Component', () => {
    let wrapper;
    let defaultProps = Button.defaultProps.variant;

    beforeEach(() => wrapper = shallow(<Button variant='primary'>Button</Button>));

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with default props properly', () => {
        expect(defaultProps).toEqual('primary');
    });

    it('renders with children text properly', () => {
        expect(wrapper.text()).toEqual('Button');
    });
});