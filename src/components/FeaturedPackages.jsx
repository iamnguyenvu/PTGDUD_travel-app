import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import hakkoda from "../assets/hakkoda.jpg";
import nipesotsu from "../assets/nipesotsu.jpg";

function FeaturedPackages() {
  const [hovered, setHovered] = useState(null);

  const packages = [
    {
      image: hakkoda,
      title: "Cuộc Phiêu Lưu Paris",
      description:
        "Chuyến đi lãng mạn đến thành phố ánh sáng, bao gồm các tour hướng dẫn và bữa ăn sang trọng.",
    },
    {
      image: nipesotsu,
      title: "Khám Phá Tokyo",
      description:
        "Khám phá thủ đô sôi động của Nhật Bản với các trải nghiệm văn hóa và tour tham quan thành phố.",
    },
  ];

  return (
    <Container className="featured-packages" style={styles.container}>
      <h2 className="text-primary" style={styles.heading}>
        Các Gói Du Lịch Nổi Bật
      </h2>
      <Row className="justify-content-center" style={styles.row}>
        {packages.map((pkg, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card
              style={{
                ...styles.card,
                ...(hovered === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card.Img variant="top" src={pkg.image} alt={pkg.title} />
              <Card.Body>
                <Card.Title style={styles.packageTitle}>{pkg.title}</Card.Title>
                <Card.Text style={styles.packageDescription}>
                  {pkg.description}
                </Card.Text>
                <Button variant="primary" style={styles.button}>
                  Đặt Ngay
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    padding: "50px 0",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem", // Increased font size
    fontWeight: "bold", // Make it bold for better emphasis
    marginBottom: "40px", // Add some space below the header
    fontFamily: "'Poppins', sans-serif", // Use a modern font family
    textTransform: "uppercase", // Uppercase to make it stand out more
    letterSpacing: "3px", // Add spacing between letters for more impact
    textAlign: "center", // Center the header text
    color: "#007bff", // Use Bootstrap's primary blue color
    // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)", // Add a subtle shadow around the text
    padding: "10px 20px", // Add padding for balance
    transition: "all 0.3s ease", // Smooth transition for effects
    display: "flex", // Use flexbox to align items horizontally
    alignItems: "center", // Vertically center the icon and text
    justifyContent: "center", // Center the content horizontally
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "300px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  packageTitle: {
    fontSize: "1.5rem",
    color: "#333",
  },
  packageDescription: {
    fontSize: "1rem",
    color: "#666",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0057B7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default FeaturedPackages;
