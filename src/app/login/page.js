'use client'
import React, { useState } from 'react';
import styles from './login.module.css';
import { Link, Navigate } from 'next/router';
import QRScannerComponent from '../assets/qr-scan';
import Image from 'next/image';

function Login() {
  const [correo, setcorreo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [irARegistro, setIrARegistro] = useState(false);
  const [Sesion, setSesion] = useState(false);
  const [codigo, setCodigo] = useState('');

  if (Sesion) {
    return <Navigate to="/admin" />;
  }

  if (irARegistro) {
    return <Navigate to="/registro" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <div className={styles.Todo}>
      <div className={styles.loginManual}>
        <Image src='https://github.com/octaviopacman/proyecto-lector-asistencia-qr/blob/main/src/app/public/appicon.png' width={30} height={30} alt="App Icon" />
        <h1>Asistencia QR</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Correo:</label><br />
            <input
              type="text"
              className={styles.inputField}
              value={correo}
              onChange={(e) => setcorreo(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.boton} type="submit">Login</button>
        </form>
        <p>{message}</p>
        <div className={styles.codigo}>
          {codigo}
        </div>
        <button className={styles.boton} onClick={() => setIrARegistro(!irARegistro)}>Registro</button>
      </div>
      <div>
        <QRScannerComponent />
      </div>
    </div>
  );
}

export default Login;
