import React from 'react';
import PropTypes from 'prop-types';

import {
    PictureIdentifier,
    SpotterLastOutfitsGrid,
    OutfitTags,
    OutfitItemData,
    OutfitSpotterBanner,
    OutfitItemAvailabilities,
    OutfitSocialFeatures
} from '../../components';

import './styles.scss';


function Outfit({ outfit }) {
    return (
        <div className="outfit">
            <div className="container outfit-data">
                <div className="outfit-data-wrapper">
                    <div className="outfit-identifier">
                        <PictureIdentifier />
                    </div>
                    <div className="outfit-selected-item-data">
                        <OutfitTags />
                        <OutfitItemData>
                            <OutfitSocialFeatures />
                        </OutfitItemData>
                        <OutfitItemAvailabilities />
                    </div>
                </div>
                <OutfitSpotterBanner />
                <div className="spotter-outfits-preview">
                    <SpotterLastOutfitsGrid />
                </div>
            </div>
        </div>
    );
}


Outfit.defaultProps = {}

Outfit.propTypes = { outfits: PropTypes.arrayOf(PropTypes.object).isRequired }


export default Outfit;