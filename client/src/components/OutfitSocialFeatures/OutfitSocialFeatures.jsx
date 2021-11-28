import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RoundButton } from '../';
import { Heart, MoreHorizontal, Bell, Bookmark } from '@styled-icons/feather';


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

const SmallBookmark = styled(Bookmark)`
    height: 14px;
    margin-right: 3px;
`;


function OutfitSocialFeatures(props) {
    return (
        <>
            <div className="social-buttons">
                <RoundButton>
                    {
                        // TODO: Enable/Disable notifications (Bell or BellOff icon)
                    }
                    <SmallHeart />
                </RoundButton>
                {
                    // TODO: Display CollectionList component
                }
                <RoundButton>
                    <SmallBookmark />
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
        </>
    );
}


OutfitSocialFeatures.propTypes = {}

export default OutfitSocialFeatures;

