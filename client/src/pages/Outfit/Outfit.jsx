import React from 'react';
import PropTypes from 'prop-types';

import { Tag, TagsSlider, PictureIdentifier, Button } from '../../components';
import { MapPin, Heart, MoreHorizontal, Bell, BellOff } from '@styled-icons/feather';

import './styles.scss';
import styled from 'styled-components';
import RoundButton from '../../components/RoundButton/RoundButton';


const SmallMapPin = styled(MapPin)`
    height: 14px;
    stroke-width: 2px;
    margin-right: 3px;
`;

const SmallHeart = styled(Heart)`
    height: 14px;
    margin-right: 3px;
`;

const SmallMoreHorizontal = styled(MoreHorizontal)`
    height: 14px;
    margin-right: 3px;
`;

const SmallBell = styled(Bell)`
    height: 14px;
    margin-right: 3px;
`;

const SmallBellOff = styled(Bell)`
    height: 14px;
    margin-right: 3px;
`;


function Outfit() {
    const tags = ['Runway', 'Luxury', 'Haute-couture', "Spring", "Dior", "Gucci", "Football"];

    return (
        <div className="outfit">
            <div className="container outfit-data">
                <div className="outfit-data-wrapper">
                    <div className="outfit-identifier">
                        <PictureIdentifier />
                    </div>
                    <div className="outfit-selected-item-data">
                        <div className="tags">
                            <TagsSlider Tags={tagsProps => tags.map((tag, i) => <Tag key={`tag-${i}`} {...tagsProps}>{tag}</Tag>)} />
                        </div>
                        <div className="">
                            <p className="geolocation"><SmallMapPin /> Los Angeles International Airport</p>
                            <h1 className="title">GUCCI</h1>
                            <p className="subtitle">Linen pants embroided with flowers</p>
                            <p className="price">490€</p>
                            <div className="outfit-social-features">
                                <Button>Visit the store</Button>
                                <div className="social-buttons">
                                    <RoundButton>
                                        {
                                            // TODO: Enable/Disable notifications (Bell or BellOff icon)
                                        }
                                        <SmallHeart />
                                    </RoundButton>
                                    <RoundButton>
                                        {
                                            // TODO: Enable/Disable alerts about the current item (Bell or BellOff icon)
                                        }
                                        <SmallBell />
                                    </RoundButton>
                                    {
                                        // TODO: Dropdown Button °°° (Add to list, share on social networks, etc)
                                    }
                                    <RoundButton>
                                        <SmallMoreHorizontal />
                                    </RoundButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="outfit-spotter-banner">
                    <div className="user-picture-thumbnail"><img src="https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/45ad353035234d9d4a1f25d8a9ae9e7f_1920_KR.jpg" /></div>
                    <div className="user-features">
                        <RoundButton size={40} borderColor="#005aff"></RoundButton>
                        <RoundButton size={40} borderColor="#005aff"></RoundButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

Outfit.defaultProps = {

}

Outfit.propTypes = {

}

export default Outfit;