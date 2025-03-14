import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import bali from "../assets/bali.jpg";
import thai from "../assets/thai.jpg";
import malaysia from "../assets/malaysia.jpg";
import bangkok from "../assets/bangkok.jpg";
import { FaGlobeAmericas } from "react-icons/fa";

const destinations = [
  { name: "Thái Lan - Đảo ngọc Phuket", img: thai, path: "/thailand" },
  { name: "Kuala Lumpur - Malaysia", img: malaysia, path: "/malaysia" },
  { name: "Bali - Thiên đường nhiệt đới", img: bali, path: "/bali" },
  { name: "Bangkok - Thủ đô sôi động", img: bangkok, path: "/bangkok" },
];

const PopularDestinations = () => {
  const containerStyle = {
    padding: "50px 0",
    textAlign: "center",
  };

  const cardStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  };

  const imgStyle = {
    height: "250px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    transition: "all 0.3s ease",
  };

  const bodyStyle = {
    textAlign: "center",
    padding: "15px",
    background: "#f8f9fa",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
    transition: "color 0.3s ease",
  };

  return (
    <Container style={containerStyle}>
      <h2
        className="text-primary"
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
        <FaGlobeAmericas style={{ marginRight: "20px", fontSize: "1.5em", width: 40, height: 40 }} />{" "}
        Điểm Đến Nổi Bật
      </h2>

      <Row style={{ display: "flex", flexWrap: "wrap" }}>
        {destinations.map((destination, index) => (
          <Col md={3} key={index} className="mb-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 6px 20px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.querySelector("img").style.transform =
                    "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 10px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.querySelector("img").style.transform =
                    "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={destination.img}
                  style={imgStyle}
                />
                <Card.Body style={bodyStyle}>
                  <Card.Title style={titleStyle}>{destination.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDestinations;
