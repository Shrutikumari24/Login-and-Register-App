import { useState } from 'react';
import { toast } from 'react-toastify';
import logoImage1 from './left logo.png';
import logoImage2 from './Logo(1).png';

const Registration = ({ switchToLogin, onRegistrationSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    let regobj={fullName,email,password}
    
  fetch("http://localhost:8000/user",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(regobj)
  }).then((res)=>{
      toast.success('Registration Succesful');
      onRegistrationSuccess();
  }).catch((err)=>{
      toast.error('Faied: '+err.message);
  })

  setFullName('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
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
      <h2>Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="youremail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={switchToLogin}>Already have an account? Login here</button>
    </div>
  );
};

export default Registration;
