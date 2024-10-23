
import { useState } from 'react';

import QRScannerComponent from '../assets/components/qr-scan'; // Asegúrate de que este componente solo use código del cliente

import styles from './login.module.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [irARegistro, setIrARegistro] = useState(false);
  const [Sesion, setSesion] = useState(false);
  

  // Funciones que dependen del cliente (navegación, interacciones con el DOM) 
  

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de autenticación o validaciones
  };

  return (
    <div className={styles.Todo}>
      <div className={styles.loginManual}>
        <img src='assets/appicon.png' width={30} height={30} alt="App Icon" />
        <h1>Asistencia QR</h1>
        <form >
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
