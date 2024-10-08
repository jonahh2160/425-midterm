// JH 10/8
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  // State hooks
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  // Quiz answers
  const a1 = 'False';
  const a2 = 'True';
  const a3 = 'Tim Berners-Lee';

  const navigate = useNavigate();

  // Navigate to the Welcome page
  const goToWelcomePage = () => {
    // Make variables
    let q1C, q2C, q3C = false;

    // Check for wrong answers. Reports all at once
    if (q1 != a1) {
      alert('Question 1 is still incorrect.')
    } else {
      q1C = true;
    }

    if (q2 != a2) {
      alert('Question 2 is still incorrect.')
    } else {
      q2C = true;
    }

    if (q3 != a3) {
      alert('Question 3 is still incorrect.')
    } else {
      q3C = true;
    }

    // If none are wrong, then navigate to the Welcome page
    if (q1C && q2C && q3C) {
      navigate('/welcome');
    }
  };
 
  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>

      <div>
        <label>
          1. True or False: Scrum is not used for agile development.
          <input type="text" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </label>
      </div>

      <div>
        <label>
          2. True or False: JSX is an existing programming language.
          <input type="text" value={q2} onChange={(e) => setQ2(e.target.value)} />
        </label>
      </div>

      <div>
        <label>
          3. Who made the first website?
          <input type="text" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </label>
      </div>

      <button onClick={goToWelcomePage}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;
