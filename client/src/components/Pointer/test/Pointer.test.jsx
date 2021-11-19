import { shallow } from 'enzyme';

import { Pointer } from '../../../components';


describe('Pointer component', () => {
    let wrapper, onPointerClick;
    const { coordinates, onClick }  = Pointer.defaultProps;

    beforeEach(() => {
        onPointerClick = jest.fn(); // creates a spy
        wrapper = shallow(<Pointer onClick={onPointerClick} />)
    })

    it('renders correctly', () => expect(wrapper).toMatchSnapshot())

    it('has default props', () => {
        expect(coordinates).toEqual([]);
        expect(onClick).toBeDefined();
    })

    it('calls onClick event', () => {
        wrapper.simulate('click');
        expect(onPointerClick).toHaveBeenCalled();
    })
})