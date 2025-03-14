import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {

    const styleCarousel = {
        height: '500px',
        objectFit: 'cover',
    };
return (
    <Carousel style={styleCarousel} interval={3000} slide={true}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="../src/assets/slider-japan-1.jpg"
                alt="Slide 1"
                style={styleCarousel}
            />
            <Carousel.Caption>
                <h3>Núi Phú sĩ</h3>
                <p>Là kết quả sau hàng thiên niên kỷ phun trào.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="../src/assets/slider-2.jpg"
                alt="Slide 2"
                style={styleCarousel}
            />
            <Carousel.Caption>
                <h3>Núi Zao</h3>
                <p>Tnổi tiếng với kỳ quan thiên nhiên hồ miệng núi lửa Okama xanh một màu ngọc bích lạ mắt.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./src/assets/slider-3.jpg"
                alt="Slide 3"
                style={styleCarousel}
            />
            <Carousel.Caption>
                <h3>Núi Aso</h3>
                <p>Là một trong những ngọn núi cao và hùng vĩ nhất Nhật Bản.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);
};

export default Slider;
