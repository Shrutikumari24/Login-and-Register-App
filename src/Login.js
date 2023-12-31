import { useState } from 'react';
import { toast } from 'react-toastify';
import logoImage1 from './left logo.png';
import logoImage2 from './Logo(1).png';

const Login = ({ switchToRegister, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:8000/user").then((res)=>{
        return res.json();
      }).then((resp)=>{
        const foundUser = resp.find((user) => user.email === email && user.password === password);

        if (foundUser) {
          toast.success('Login Successful');
          onLoginSuccess();
        } else {
            setError('Invalid email or password');
          }
      }).catch((err)=>{
        toast.error('Login failed due to: '+err.message);
      });

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="auth-form-container">
      <div className="top-bar">
        <div className="logo-left">
          <img src={logoImage1} alt="Logo 1" />
        </div>
        <div className="logo-right">
          <img src={logoImage2} alt="Logo 2" />
        </div>
      </div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="youremail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <button className="link-btn" onClick={switchToRegister}>Don't have an account? Register here</button>
    </div>
  );
};

export default Login;
