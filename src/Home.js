import React from 'react';
import logoImage from './Logo(1).png';

const Home = ({ switchToLogin }) => {
  return (
    <div className="home">
      <header className="header">
        <h1>TATA Prashikshan 2023</h1>
        <img src={logoImage} alt="#we make future" className="logo" />
        </header>

      <section className="hero">
        <h2>Welcome to My Login App</h2>
        <p>The app aims to provide a simple and secure login and registration experience for users,</p>
        <p> utilizing React for the front-end interface and a JSON server for data storage.
          <p>Click on the 'Get Started' button below to be directed to the 'Login Page'.</p>
        </p>
        <button onClick={switchToLogin}>Get Started</button>
      </section>

      <footer className="footer">
        <p>&copy; Shruti Kumari - 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
