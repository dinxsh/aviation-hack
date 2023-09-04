import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

const CarouselComponent = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={true}
                    infiniteLoop={true}
                >
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/06/Mercury-850x850.jpg" alt="Slide 2" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/08/Venus-900x900.jpg" alt="Slide 2" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/12/The-Earth-850x850.jpg" alt="Slide 3" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2017/06/Mars-1536x1536.jpg" alt="Slide 3" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/08/Jupiter-900x900.jpg" alt="Slide 3" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/08/Saturn-900x900.jpg" alt="Slide 3" height={250} />
                    </div>
                    <div>
                        <img src="https://earthhow.com/wp-content/uploads/2018/04/Uranus-900x900.jpg" alt="Slide 3" height={250} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselComponent;
