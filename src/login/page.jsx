import { useState } from 'react';
import QRScannerComponent from '../assets/components/qr-scan'; // Asegúrate de que este componente solo use código del cliente
import styles from './login.module.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [irARegistro, setIrARegistro] = useState(false);
  const [Sesion, setSesion] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de autenticación o validaciones
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.loginBox}>
          <img src='appicon.png' className={styles.loginIcon} alt="App Icon" />
          <h1>Asistencia QR</h1>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label>Correo</label>
              <input
                type="text"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className={styles.input}
                placeholder="Ingrese su correo"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button className={styles.btnLogin} type="submit">Login</button>
          </form>
          <p>{message}</p>
        </div>
        <div className={styles.qrBox}>
          
          <QRScannerComponent />
        </div>
      </div>
    </div>
  );
}

export default Login;
