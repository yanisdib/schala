import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Slider, SliderNavigationButton } from '../';


function TagsSlider({ Tags }) {

    const sliderRef = useRef(null);

    const [sliderWidth, setSliderWidth] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const [isNextButtonDisplayed, setIsNextButtonDisplayed] = useState(true);
    const [isPreviousButtonDisplayed, setIsPreviousButtonDisplayed] = useState(false);


    useEffect(() => {
        setSliderWidth(sliderRef.current.offsetWidth);

        translateValue > sliderWidth / 2 ? (
            setIsNextButtonDisplayed(false)
        ) : (
            setIsNextButtonDisplayed(true)
        );

        translateValue > 0 ? setIsPreviousButtonDisplayed(true) : setIsPreviousButtonDisplayed(false);
    }, [sliderRef, translateValue, sliderWidth]);


    const onNextButtonClick = () => {
        if (translateValue < 0) return;
        setTranslateValue(prevTranslateValue => prevTranslateValue + (sliderWidth / 4));
    };

    const onPreviousButtonClick = () => {
        if (translateValue < 0) setTranslateValue(0);
        setTranslateValue(prevTranslateValue => prevTranslateValue - (sliderWidth / 4));
    };

    console.log(typeof Tags);


    return (
        <div className="tags-wrapper">
            <Slider ref={sliderRef} translateValue={translateValue}>
                <Tags />
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

