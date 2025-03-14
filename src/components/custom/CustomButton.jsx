import React from 'react';
import './CustomButton.css';

function CustomButton({ children, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;