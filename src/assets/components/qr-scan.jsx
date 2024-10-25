import React, { useEffect, useState } from 'react';
import QrScanner from 'react-qr-scanner';
import "./qr-scan.css";

function QRScannerComponent() {
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const URI = "https://backend-asistencia-qr.vercel.app/api/login/asistencia";

  const handleError = (error) => {
    console.error(error);
    setResult('Hubo un error');
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
    }
    console.log(data);
  };

  useEffect(() => {
    if (result) {
      const enviarDatos = async () => {
        try {
          const response = await fetch(URI, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + result
            },
            body: JSON.stringify({
              qrToken: result
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'ERROR AL PROCESAR LA SOLICITUD');
          }

          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        }
      };

      enviarDatos();
    }
  }, [result]);

  return (
    <div className='todo'>
      <h1>Escaneá tu QR</h1>
      <div className="qr-scanner-container">
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          className="qr-scanner"
        />
      </div>
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default QRScannerComponent;
