import PropTypes from 'prop-types';
import { OutfitItemAvailabilitiesList } from '..';


function OutfitItemAvailabilities({ stores }) {
    return (
        <div className="outfit-item-availabilities">
            <div className="outfit-item-availabilities-wrapper">
                <caption>This item could also be found here:</caption>
                <OutfitItemAvailabilitiesList stores={stores} />
            </div>
        </div>
    );
}


OutfitItemAvailabilities.defaultProps = { stores: [{}] }

OutfitItemAvailabilities.propTypes = { stores: PropTypes.arrayOf(PropTypes.object).isRequired }


export default OutfitItemAvailabilities;

