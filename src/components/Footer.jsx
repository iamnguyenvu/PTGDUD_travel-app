import React from "react";

function Footer() {
  const data = [
    {
      title: "Travel-app",
      item: [
        "Giới thiệu",
        "Đổi bay",
        "Đối tác",
        "Thông tin truyền thông",
        "Quan hệ cổ đông",
        "Thông tin đấu thầu",
        "Việc làm",
      ],
    },
    {
      title: "Pháp lý",
      item: [
        "Các điều kiện & điều khoản",
        "Điều kiện sử dụng",
        "Bảo mật thông tin",
        "Quy chế hoạt động",
      ],
    },
    {
      title: "Hỗ trợ",
      item: ["Chăm sóc khách hàng", "Chính sách bảo vệ hành khách"],
    },
    { title: "Vận tải hàng hóa", item: ["Hàng hóa"] },
  ];

  const follow = [
    {
      title: "Facebook",
      iconClass: "fab fa-facebook-f",
      url: "https://www.facebook.com" 
    },
    {
      title: "YouTube",
      iconClass: "fab fa-youtube",
      url: "https://www.youtube.com" 
    },
    {
      title: "Instagram",
      iconClass: "fab fa-instagram",
      url: "https://www.instagram.com" 
    },
  ];

  const gradient = "linear-gradient(90deg, #0057B7 0%, #0081a1 100%)";

  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: gradient,
        fontSize: 16,
        fontFamily: "Open Sans",
      }}
    >
      <div
        className="footer-wrapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="footer-container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {data.map((e, index) => {
            return (
              <div
                key={index}
                className="footer-section"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: 300,
                  padding: 40,
                }}
              >
                <h5 style={{ color: "#dba510", fontWeight: "bold" }}>
                  {e.title}
                </h5>
                {e.item.map((item, idx) => {
                  return (
                    <a
                      key={idx}
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#d8d8d8",
                        padding: 4,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.target.style.color = "#d8d8d8")}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div
          className="social-link-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            color: "#d8d8d8",
          }}
        >
          {follow.map((e) => {
            return (
              <div
                className="social-item"
                key={e.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 15px",
                }}
              >
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <i
                    className={e.iconClass}
                    style={{
                      fontSize: "24px",
                      color: "#d8d8d8",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.target.style.color = "#d8d8d8")}
                  ></i>
                </a>
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
