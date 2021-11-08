import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Bubble, Pointer, DisplayIdentifiedButton } from '..';


function PictureIdentifier({ image, items, identifiedPeople }) {

    const [isDisplayed, setIsDisplayed] = useState(false);

    const displayIdentifiedPeople = () => {
        setIsDisplayed(prevIsDiplayed => !prevIsDiplayed);
    };

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
            />
            <DisplayIdentifiedButton onClick={displayIdentifiedPeople} />
            {items.map((item, i) => <Pointer key={`pointer-${i}`} coordinates={item.coordinates} />)}
            {isDisplayed && identifiedPeople
                .map((person) => <Bubble key={person.username} coordinates={person.coordinates}>{person.username}</Bubble>)
            }
        </>
    );
}

PictureIdentifier.defaultProps = {
    image: 'https://wwd.com/wp-content/uploads/2021/09/Dior-s22-GG-13-1.jpg?w=1024', // should be outfit.image
    items: [ // should be outfit.items[i].coordinates
        {
            coordinates: [25, 50],
        },
        {
            coordinates: [75, 68],
        },
        {
            coordinates: [46, 50],
        },
    ],
    identifiedPeople: [
        {
            username: 'blackpink',
            url: '',
            coordinates: [35.4, 50.8],
        },
        {
            username: 'dior',
            url: '',
            coordinates: [28.4, 36.4],
        },
        {
            username: 'diorbeauty',
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