import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, OutfitItemAvailabilities } from '../';

import { MapPin } from '@styled-icons/feather';


const SmallMapPin = styled(MapPin)`
    height: 14px;
    stroke-width: 2px;
    margin-right: 3px;
`;


function OutfitItemData({ item, geolocation, children }) {
    const { brand, label, stores } = item;

    return (
        <div className="outfit-item-data">
            <p className="geolocation">
                <SmallMapPin /> {geolocation}
            </p>
            <h1 className="title">{brand}</h1>
            <p className="subtitle">{label}</p>
            <p className="price">{stores[0].price}€</p>
            <div className="outfit-social-features">
                <Button onClick={() => window.open(stores[0].uri, '_blank')}>
                    Visit the store
                </Button>
                {children}
            </div>
        </div>
    );
}


OutfitItemData.defaultProps = {
    item: {
        brand: 'GUCCI',
        label: 'Linen pants embroided with flowers',
        stores: [{ name: 'Gucci Store', price: 490, uri: 'https://www.google.com' }]
    },
    geolocation: 'Los Angeles International Airport'
}

OutfitItemData.propTypes = {
    item: PropTypes.object.isRequired,
    geolocation: PropTypes.string
}


export default OutfitItemData;

