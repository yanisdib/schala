import { shallow } from 'enzyme';

import { PictureIdentifier } from '../../../components';


suscribe('PictureIdentifier component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<PictureIdentifier />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})