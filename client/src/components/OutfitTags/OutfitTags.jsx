import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Tag, TagsSlider } from '../';


function OutfitTags({ tags }) {
    const tagsList = tagsProps => {
        return tags.map((tag, i) => (
            <Tag
                {...tagsProps}
                key={`tag-${i}`}
            >
                {tag}
            </Tag>
        ));
    };

    return (
        <div className="tags">
            <TagsSlider Tags={tagsList} />
        </div>
    );
}

OutfitTags.defaultProps = {
    tags: [
        'Runway',
        'Luxury',
        'Haute-couture',
        "Spring",
        "Dior",
        "Gucci",
        "Football"
    ]
}

OutfitTags.propTypes = { tags: PropTypes.arrayOf(PropTypes.string).isRequired }


export default OutfitTags;