'use client'; // Asegurarse de que este componente es estrictamente del lado del cliente

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router para navegación
import QRScannerComponent from '../assets/qr-scan'; // Asegúrate de que este componente solo use código del cliente
import Image from 'next/image';
import styles from './login.module.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [irARegistro, setIrARegistro] = useState(false);
  const [Sesion, setSesion] = useState(false);
  const router = useRouter();

  // Funciones que dependen del cliente (navegación, interacciones con el DOM) 
  if (Sesion) {
    router.push('/admin');
  }

  if (irARegistro) {
    router.push('/registro');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de autenticación o validaciones
  };

  return (
    <div className={styles.Todo}>
      <div className={styles.loginManual}>
        <Image src='/appicon.png' width={30} height={30} alt="App Icon" />
        <h1>Asistencia QR</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Correo:</label><br />
            <input
              type="text"
              className={styles.inputField}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
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
          {/** Aquí podrías agregar otro componente si es necesario */}
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
