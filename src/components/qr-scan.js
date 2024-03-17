import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function QRScannerComponent() {
  const [result, setResult] = useState('');

  const handleError = (error) => {
    console.error(error);
  }

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
    console.log(data);
  }

  return (
    <div>
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
