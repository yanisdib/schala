import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Slider, SliderNavigationButton } from '../';


function TagsSlider({ Tags }) {

    const sliderRef = useRef(null);
    const tagRef = useRef(null);

    const [sliderWidth, setSliderWidth] = useState(0);
    const [sliderParts, setSliderParts] = useState(0);
    const [tagWidth, setTagWidth] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const [isNextButtonDisplayed, setIsNextButtonDisplayed] = useState(true);
    const [isPreviousButtonDisplayed, setIsPreviousButtonDisplayed] = useState(false);


    console.log(translateValue)

    // TODO: Change and refactor algorithm of slider to take account of length of tags array
    // SKETCH CODE TO BE REFACTORED AND CLEANED

    useEffect(() => {
        setSliderWidth(sliderRef.current.offsetWidth);
        Tags && setTagWidth(tagRef.current.offsetWidth);
        console.log(`slider: ${sliderWidth} | tags: ${tagWidth}`);

        const sliderChildren = sliderRef.current.childElementCount
        const sliderChildrenFitting = sliderWidth / tagWidth;
        setSliderParts(Math.round(sliderChildren / sliderChildrenFitting));

        // TODO: if sliderChildren < sliderChildrenFitting => translateValue >= sliderWidth / 4
        translateValue >= sliderWidth ? (
            setIsNextButtonDisplayed(false)
        ) : (
            setIsNextButtonDisplayed(true)
        );

        sliderChildren < sliderChildrenFitting && setIsNextButtonDisplayed(false);

        translateValue > 0 ? setIsPreviousButtonDisplayed(true) : setIsPreviousButtonDisplayed(false);
    }, [sliderRef, translateValue, sliderWidth]);


    const onNextButtonClick = () => {
        if (translateValue < 0) return;
        setTranslateValue(prevTranslateValue => prevTranslateValue + sliderWidth / sliderParts);
    };

    const onPreviousButtonClick = () => {
        if (translateValue < 0) setTranslateValue(0);
        setTranslateValue(prevTranslateValue => prevTranslateValue - sliderWidth / sliderParts);
    };

    return (
        <div className="tags-wrapper">
            <Slider ref={sliderRef} translateValue={translateValue}>
                <Tags ref={tagRef} />
            </Slider>

            {isNextButtonDisplayed && (
                <SliderNavigationButton
                    size={25}
                    onClick={onNextButtonClick}
                    isNext
                />
            )}

            {isPreviousButtonDisplayed && (
                <SliderNavigationButton
                    size={25}
                    onClick={onPreviousButtonClick}
                    isNext={false}
                />
            )}
        </div>
    );
}


TagsSlider.defaultProps = { Tags: () => [] }

TagsSlider.propTypes = { Tags: PropTypes.func }


export default TagsSlider;

