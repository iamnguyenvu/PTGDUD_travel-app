import React from 'react';

function Testimonials() {
  return (
    <div className="testimonials-container" style={styles.container}>
      <h2 className='text-primary' style={styles.heading}>Khách hàng nói gì về chúng tôi</h2>
      <div className="testimonial-item" style={styles.testimonialItem}>
        <p style={styles.quote}>"Trải nghiệm du lịch tuyệt vời nhất tôi từng có! Rất đáng để thử."</p>
        <span style={styles.name}>John Doe</span>
      </div>
      <div className="testimonial-item" style={styles.testimonialItem}>
        <p style={styles.quote}>"Điểm đến tuyệt vời và dịch vụ khách hàng xuất sắc. Chắc chắn tôi sẽ đặt lại!"</p>
        <span style={styles.name}>Jane Smith</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 0',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
  },
  testimonialItem: {
    margin: '20px 0',
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
  quote: {
    fontSize: '1.4rem',
    color: '#555',
  },
  name: {
    display: 'block',
    marginTop: '10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Testimonials;
