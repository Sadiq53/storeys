import React, { useState } from 'react';
import Carousel from './Slider';


const Overlay = ({ remainingCount, onShowCarousel }) => {
    return (
        <div className="overlay">
            <h4 className="font-sm light bold">See All Photos</h4>
            <button className="font-sm dark fs-20 medium" onClick={onShowCarousel}>+{remainingCount}</button>
        </div>
    )
}

const Banner = ({ banner, marginTop }) => {

    const [showCarousel, setShowCarousel] = useState(false);

    const handleShowCarousel = () => {
        setShowCarousel(true);
    };

    const displayedImages = banner.slice(0, 8);
    const remainingCount = banner.length - displayedImages.length;



  return (
    <> 
            {showCarousel ? (
                <section className='property-inner-slider' style={{marginTop: `${marginTop}px` || "0px"}}>
                    <Carousel banner={banner} />
                </section>
            ) : (
                <section className="property-inner-banner" style={{marginTop: `${marginTop}px` || "0px"}}>
                    {displayedImages.map((item, index) => (
                        <div className="item" key={item.uniqueid}>
                            <img src={item.s3Url} alt={item.s3Key} />
                            {index === displayedImages.length - 1 && remainingCount > 0 && (
                                <Overlay remainingCount={remainingCount} onShowCarousel={handleShowCarousel} />
                            )}
                        </div>
                    ))}
                </section>
            )}
            
    </>
  )
}

export default Banner