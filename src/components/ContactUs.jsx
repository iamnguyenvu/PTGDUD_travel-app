import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputs = [
    { label: "Họ và Tên", type: "text", name: "name", placeholder: "Nhập họ và tên" },
    { label: "Email", type: "email", name: "email", placeholder: "Nhập email" },
    { label: "Số điện thoại", type: "tel", name: "phone", placeholder: "Nhập số điện thoại" },
    { label: "Nội dung", as: "textarea", name: "message", placeholder: "Nhập nội dung...", rows: 4 },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin liên hệ:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        {/* Contact Form Section */}
        <Col lg={6} sm={12}>
          <Card className="p-4 shadow-lg rounded-lg border-0">
            <h3 className="text-center mb-4 text-primary" style={{ fontSize: '2rem' }}>Liên Hệ Chúng Tôi</h3>
            <Form onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
                <Form.Group className="mb-3" key={index}>
                  <Form.Label className="fw-semibold">{input.label}</Form.Label>
                  <Form.Control
                    {...input}
                    value={formData[input.name]}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '1rem' }}
                  />
                </Form.Group>
              ))}

              <Button variant="primary" type="submit" className="w-100 mt-3" style={{ fontSize: '1.1rem', padding: '12px' }}>
                Gửi Liên Hệ
              </Button>
            </Form>
          </Card>
        </Col>
        <Col lg={5} sm={12} className="mt-4 mt-lg-0">
          <Card className="p-4 shadow-lg rounded-lg bg-light border-0">
            <h4 className="text-primary mb-3" style={{ fontSize: '1.8rem' }}>Thông Tin Liên Hệ</h4>
            {[
              { icon: <FaMapMarkerAlt className="me-2 text-danger" style={{ fontSize: '1.5rem' }} />, text: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM" },
              { icon: <FaPhoneAlt className="me-2 text-primary" style={{ fontSize: '1.5rem' }} />, text: "+84 123 456 789" },
              { icon: <FaEnvelope className="me-2 text-success" style={{ fontSize: '1.5rem' }} />, text: "iamnguyenvu.gm@gmail.com" },
            ].map((info, index) => (
              <p className="d-flex align-items-center mb-3" key={index}>
          {info.icon}
          <span>{info.text}</span>
              </p>
            ))}
            <div className="d-flex gap-4 mt-3">
              {[
          { href: "#", icon: <FaFacebook className="text-primary fs-2" /> },
          { href: "#", icon: <FaInstagram className="text-danger fs-2" /> },
          { href: "#", icon: <FaYoutube className="text-danger fs-2" /> },
              ].map((social, index) => (
          <a href={social.href} key={index} style={{ transition: 'color 0.3s' }}>
            {social.icon}
          </a>
              ))}
            </div>
          </Card>
        </Col>
      
      </Row>
    </Container>
  );
};

export default ContactUs;
