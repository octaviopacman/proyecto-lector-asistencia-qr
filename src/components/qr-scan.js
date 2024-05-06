import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import "./qr-scan.css"

function QRScannerComponent() {
  const [result, setResult] = useState('');

  const handleError = (error) => {
    console.error(error);
    setResult('Hubo un error');
  }

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
    console.log(data);
  }

  return (
    <div className='todo'>
      <h1>Escaneá tu QR</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Resultado: {result}</p>
    </div>
  );
}

export default QRScannerComponent;
