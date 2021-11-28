import React from 'react'
import PropTypes from 'prop-types'

import { ImagesGrid } from '..';


function SpotterLastOutfitsGrid({ pictures }) {
    return (
        <ImagesGrid>
            <img src="https://i.pinimg.com/originals/65/bc/45/65bc4591082807fb720bef4632cfd89b.jpg" alt="" title="" />
            <img src="https://man.vogue.me/wp-content/uploads/2019/10/karimbenzema_61295736_151867582613872_6353359466988555184_n.jpg" alt="" title="" />
            <img src="https://pbs.twimg.com/media/E0ZsR-ZXEAAo_mx?format=jpg" alt="" title="" />
            <img src="https://man.vogue.me/wp-content/uploads/2019/10/karimbenzema_50695827_2144335145590004_8795081031988584826_n.jpg" alt="" title="" />
            <img src="https://m.media-amazon.com/images/I/715+lsO4ebL._AC_SL1350_.jpg" alt="" title="" />
        </ImagesGrid>
    );
}


SpotterLastOutfitsGrid.defaultProps = { pictures: [] };

SpotterLastOutfitsGrid.propTypes = { pictures: PropTypes.arrayOf(PropTypes.string) };


export default SpotterLastOutfitsGrid;

