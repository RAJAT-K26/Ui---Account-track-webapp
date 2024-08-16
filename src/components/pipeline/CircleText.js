import React from 'react';

const CircleText = ({ text,color }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: color,
          borderRadius: '50%',
          marginRight: '10px', // Adjust as needed
        }}
      ></div>
      <span style={{ fontSize: '1.8vh' }}>{text}</span> {/* Adjust font size as needed */}
    </div>
  );
};

export default CircleText;
