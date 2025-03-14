import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import aboutImg from "../assets/slider.jpg";
import { FaGlobe, FaHeart, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="align-items-center">
        <Col lg={6} className="text-center px-5">
          <Image
            src={aboutImg}
            alt="About Us"
            fluid
            rounded
            className="shadow-lg mb-4"
            style={{ maxHeight: '400px', objectFit: 'cover'}}
          />
        </Col>

        <Col lg={6}>
          <h2 className="fw-bold text-primary mb-3" style={{ fontSize: '2.5rem' }}>Về Chúng Tôi</h2>
          <p className="lead" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Chào mừng đến với <strong>Travel App</strong> – nơi mang đến những trải nghiệm du lịch tuyệt vời!  
            Chúng tôi kết nối bạn với hàng nghìn điểm đến hấp dẫn trên khắp thế giới.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Với sứ mệnh giúp mọi người khám phá thế giới dễ dàng và thuận tiện hơn, chúng tôi cung cấp các dịch vụ đặt vé máy bay, khách sạn và tour du lịch với mức giá tốt nhất.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <h3 className="fw-bold text-primary mb-4" style={{ fontSize: '2rem' }}>Giá Trị Cốt Lõi</h3>
        <Col md={4} className="mb-4">
          <Card className="p-4 text-center shadow-lg border-0 rounded">
            <FaGlobe size={60} className="text-primary mb-3" />
            <h5 className="fw-bold" style={{ fontSize: '1.2rem' }}>Khám Phá Thế Giới</h5>
            <p style={{ fontSize: '1rem' }}>Chúng tôi giúp bạn trải nghiệm những điểm đến tuyệt vời nhất.</p>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="p-4 text-center shadow-lg border-0 rounded">
            <FaHeart size={60} className="text-danger mb-3" />
            <h5 className="fw-bold" style={{ fontSize: '1.2rem' }}>Đam Mê Du Lịch</h5>
            <p style={{ fontSize: '1rem' }}>Chúng tôi đặt trái tim vào từng hành trình của bạn.</p>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="p-4 text-center shadow-lg border-0 rounded">
            <FaUsers size={60} className="text-success mb-3" />
            <h5 className="fw-bold" style={{ fontSize: '1.2rem' }}>Cộng Đồng Du Lịch</h5>
            <p style={{ fontSize: '1rem' }}>Kết nối những người yêu thích du lịch trên khắp thế giới.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
