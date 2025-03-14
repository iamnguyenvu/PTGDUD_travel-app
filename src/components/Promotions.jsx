import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import bali from "../assets/bali.jpg";
import thai from "../assets/thai.jpg";
import malaysia from "../assets/malaysia.jpg";

const promotions = [
  {
    title: "Giảm giá 20% cho các chuyến bay đến Bali",
    description: "Nhận ưu đãi ngay khi đặt vé trong tháng này.",
    img: bali,
  },
  {
    title: "Mua 1 tặng 1 cho chuyến bay đến Phuket",
    description: "Chuyến bay đôi, cơ hội đôi, đừng bỏ lỡ!",
    img: thai,
  },
  {
    title: "Khuyến mãi đặc biệt đến Kuala Lumpur",
    description: "Chuyến đi thú vị với mức giá ưu đãi",
    img: malaysia,
  },
];

const Promotions = () => {
  return (
    <Container style={{ padding: "50px 0", textAlign: "center" }}>
      <h2 className="text-primary"
        style={{
            fontSize: "3rem", // Increased font size
            fontWeight: "bold", // Make it bold for better emphasis
            marginBottom: "40px", // Add some space below the header
            fontFamily: "'Poppins', sans-serif", // Use a modern font family
            textTransform: "uppercase", // Uppercase to make it stand out more
            letterSpacing: "3px", // Add spacing between letters for more impact
            textAlign: "center", // Center the header text
            color: "#007bff", // Use Bootstrap's primary blue color
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)", // Add a subtle shadow around the text
            padding: "10px 20px", // Add padding for balance
            transition: "all 0.3s ease", // Smooth transition for effects
            display: "flex", // Use flexbox to align items horizontally
            alignItems: "center", // Vertically center the icon and text
            justifyContent: "center", // Center the content horizontally
          }}
      >
        🌟 Ưu Đãi Hot
      </h2>

      <Row>
        {promotions.map((promotion, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%", // Ensure all cards have the same height
                display: "flex", // Make sure the card stretches to fill available space
                flexDirection: "column", // Align child components vertically
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0px 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 10px rgba(0, 0, 0, 0.15)";
              }}
            >
              <Card.Img
                variant="top"
                src={promotion.img}
                style={{
                  height: "250px", // Fixed image height
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  transition: "transform 0.3s ease",
                }}
              />
              <Card.Body
                style={{
                  textAlign: "center",
                  padding: "15px",
                  background: "#f8f9fa",
                  flex: 1, // Allow the body to fill the remaining space
                  display: "flex",
                  flexDirection: "column", // Align text and button vertically
                  justifyContent: "space-between", // Push content to top and bottom
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#ff5733",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  {promotion.title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#555",
                    fontSize: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {promotion.description}
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ fontSize: "16px", width: "100%" }}
                >
                  Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Promotions;
