// JH 10/8
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State hooks for username and password
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');

  // Temporary variables to hold a sample username and password
  let sampleUser = 'user';
  let samplePass = '1234';

  const navigate = useNavigate();

  const goToLoginPage = () => {
    // Temporary code to check authorization
    if ((username == sampleUser) && (password == samplePass)) {
      navigate('/landing'); // Navigate to the landing page
    } else {
      // Alert that will report incorrectly entered info
      // Includes a temporary debug line for testing purposes
      alert('Incorrect username or password!\n\n\nDEBUG: Username = "user" Password = "1234"');
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>

      <div>
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPass(e.target.value)} />
        </label>
      </div>

      <button onClick={goToLoginPage}>Take Qualifier Quiz</button>
    </div>
  );
};

export default LoginPage;
