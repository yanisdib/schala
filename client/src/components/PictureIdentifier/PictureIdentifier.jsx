import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Bubble, Pointer, DisplayIdentifiedPeopleButton } from '..';


function PictureIdentifier({ image, items, identifiedPeople }) {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isBubbleDisplayed, setIsBubbleDisplayed] = useState(false);

    const displayIdentifiedPeople = () => setIsBubbleDisplayed(prevIsBubbleDiplayed => !prevIsBubbleDiplayed);

    return (
        <>            {
            // TODO:
            // - image alt should be filled depending on image content
            // (e.g. 'Published by @sydainb on {date}. May be picture of man named {identifier-data} near the sea from {image - source} wearing {brands - list}')
            // - image title should be filled with data related to outfit publication
            // (e.g. 'Outfit of Jennie from BlackPink')
            // - image should have srcset
        }
            <img
                src={image}
                alt={''}
                title={''}
                onLoad={() => setIsImageLoaded(true)}
            />
            <DisplayIdentifiedPeopleButton onClick={displayIdentifiedPeople} />
            {isImageLoaded &&
                items.map((item, i) => <Pointer key={`pointer-${i}`} coordinates={item.coordinates} />)}
            {isBubbleDisplayed &&
                identifiedPeople.map((person) => <Bubble key={person.username} coordinates={person.coordinates}>{person.username}</Bubble>)
            }
        </>
    );
}


PictureIdentifier.defaultProps = {
    image: 'https://pbs.twimg.com/media/EpjlsCFW8AMJtO1.jpg', // should be outfit.image
    items: [ // should be outfit.items[i].coordinates
        {
            coordinates: [20, 48],
        },
        {
            coordinates: [75, 55],
        },
        {
            coordinates: [46, 60],
        },
    ],
    identifiedPeople: [
        {
            username: 'benzema',
            url: '',
            coordinates: [35.4, 50.8],
        },
        {
            username: 'dior',
            url: '',
            coordinates: [28.4, 36.4],
        },
        {
            username: 'gucci',
            url: '',
            coordinates: [17, 50],
        },
    ],
}

PictureIdentifier.propTypes = {
    image: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    identifiedPeople: PropTypes.arrayOf(PropTypes.object),
}


export default PictureIdentifier;