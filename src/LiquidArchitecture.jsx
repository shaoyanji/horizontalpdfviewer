import React from 'react';
import Form from './Form';
import App2 from './App2';
import PDFReader from './PDFReader';
import './LiquidArchitecture.css';

const LiquidArchitecture = () => {
  return (
    <div className="liquid-architecture-container">
      {/* First layer of liquid */}
      <div className="liquid-layer">
        <div className="liquid"></div>
        <div className="liquid"></div>
      </div>

      {/* Second layer of liquid */}
      <div className="liquid-layer">
        <div className="liquid"></div>
      </div>

      {/* "Hello World" text */}
      <div className="hello-world">
        <PDFReader />
        <App2 />
        React ⚛️ + Vite ⚡ + Replit
        <Form />
      
      </div>
    </div>
  );
};

export default LiquidArchitecture;
