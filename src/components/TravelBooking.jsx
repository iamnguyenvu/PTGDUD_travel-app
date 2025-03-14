import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap";

const TravelBooking = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    tripType: "one-way",
    classType: "economy",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      passengers: 1,
      tripType: "one-way",
      classType: "economy",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  return (
    <Container
      fluid
      className="mt-5 p-5 bg-light rounded shadow-lg"
      style={{
        maxWidth: "1000px",
        minWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2
        className="text-center mb-4 text-primary"
        style={{
          fontSize: "2rem", // Increased font size
          fontWeight: "bold", // Make it bold for better emphasis
          marginBottom: "40px", // Add some space below the header
          fontFamily: "'Poppins', sans-serif", // Use a modern font family
          textTransform: "uppercase", // Uppercase to make it stand out more
          letterSpacing: "3px", // Add spacing between letters for more impact
          textAlign: "center", // Center the header text
          padding: "10px 20px", // Add padding for balance
          transition: "all 0.3s ease", // Smooth transition for effects
          display: "flex", // Use flexbox to align items horizontally
          alignItems: "center", // Vertically center the icon and text
          justifyContent: "center", // Center the content horizontally
        }}
      >
        {" "}
        Đặt Vé Du Lịch
      </h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Label>Điểm khởi hành</Form.Label>
            <Form.Control
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Nhập nơi khởi hành"
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label>Điểm đến</Form.Label>
            <Form.Control
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Nhập điểm đến"
              required
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Label>Ngày đi</Form.Label>
            <Form.Control
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label>Ngày về</Form.Label>
            <Form.Control
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              disabled={formData.tripType === "one-way"}
              style={{
                backgroundColor:
                  formData.tripType === "one-way" ? "#f0f0f0" : "white",
              }}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Label>Loại vé</Form.Label>
            <Form.Select
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
            >
              <option value="one-way">Một chiều</option>
              <option value="round-trip">Khứ hồi</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Hạng ghế</Form.Label>
            <Form.Select
              name="classType"
              value={formData.classType}
              onChange={handleChange}
            >
              <option value="economy">Phổ thông</option>
              <option value="business">Thương gia</option>
              <option value="first-class">Hạng nhất</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Số hành khách</Form.Label>
            <Form.Control
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              min="1"
              required
            />
          </Col>
        </Row>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{
              padding: "12px 20px",
              fontSize: "18px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            🔎 Tìm Chuyến Bay
          </Button>
        </div>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông Báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Chúc mừng! Bạn đã đặt vé thành công!</h5>
          <p>Điểm khởi hành: {formData.from}</p>
          <p>Điểm đến: {formData.to}</p>
          <p>Ngày đi: {formData.departureDate}</p>
          <p>Ngày về: {formData.returnDate || "Không có"}</p>
          <p>Số hành khách: {formData.passengers}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TravelBooking;
