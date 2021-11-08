import React from 'react';
import PropTypes from 'prop-types';

import { Tag, PictureIdentifier } from '../..';

import './styles.scss';


function OutfitPage() {
    const tags = ['Runway', 'Luxury', 'Haute-couture', "Spring"];

    return (
        <div className="outfit">
            <div className="container outfit-data">
                <div className="outfit-data-wrapper">
                    <div className="outfit-identifier">
                        <PictureIdentifier />
                    </div>
                    <div className="outfit-selected-item-data">
                        <div className="tags">
                            {tags.map((tag, i) => <Tag key={`tag-${i}`}>{tag}</Tag>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OutfitPage.defaultProps = {

}

OutfitPage.propTypes = {

}

export default OutfitPage;