import { shallow } from 'enzyme';

import { Header } from '../../../components';


describe('Header component', () => {
    let wrapper;
    let defaultProps = Header.defaultProps.isLogged;

    beforeEach(() => wrapper = shallow(<Header />));

    it('renders properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders properly with props as true', () => {
        wrapper = shallow(<Header isLogged={true} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders properly with default props', () => {
        expect(defaultProps).toBeFalsy();
    });
})