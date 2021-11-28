import PropTypes from 'prop-types';

import { RoundButton } from '../';


function OutfitSpotterBanner({ spotter }) {
    return (
        <div className="outfit-spotter-banner">
            <div className="user-picture-thumbnail">
                <img
                    src="https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/45ad353035234d9d4a1f25d8a9ae9e7f_1920_KR.jpg"
                    alt=""
                    title=""
                />
            </div>
            <div className="user-features">
                <RoundButton size={40} borderColor="#005aff"></RoundButton>
                <RoundButton size={40} borderColor="#005aff"></RoundButton>
            </div>
        </div>
    );
}


OutfitSpotterBanner.defaultProps = { spotter: {} }

OutfitSpotterBanner.propTypes = { spotter: PropTypes.object.isRequired }


export default OutfitSpotterBanner;

