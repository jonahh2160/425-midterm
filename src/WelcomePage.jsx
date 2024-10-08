// JH 10/8
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const WelcomePage = () => {
  // Use state hooks
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [nameFirst, setFirst] = useState('');
  const [nameLast, setLast] = useState('');
  const sendTo = 'jowen22@murraystate.edu';

  const navigate = useNavigate();

  // Emails the registration info via EmailJS API
  const emailInfo = () => {
    const dataStruc = {
      username,
      email,
      nameFirst,
      nameLast,
      sendTo
    };

    emailjs.send('service_cv9kepl', 'template_ljfu7tk', dataStruc, 'xV0y9tMckdKZO7QZB')
      .then((response) => {
        alert('Email sent successfully');
      }, (error) => {
        console.error('Failed to send email', error);
      });
  };

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>

      <div>
        <p>Enter registration information:</p>
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          First Name
          <input type="text" value={nameFirst} onChange={(e) => setFirst(e.target.value)} />
        </label>
        <label>
          Last Name
          <input type="text" value={nameLast} onChange={(e) => setLast(e.target.value)} />
        </label>
        <button onClick={emailInfo}>Register</button>
      </div>

      <button onClick={goToHomePage}>HOME</button>
    </div>
  );
};

export default WelcomePage;
