import { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [password, SetPassword] = useState('');
  const [strength, SetStrength] = useState('');

  function PasswordSetter(e) {
    e.preventDefault();

    const isLongEnough = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (isLongEnough && hasUpper && hasLower && hasSpecial) {
      SetStrength('Strong');
    } else if (
      isLongEnough &&
      ((hasUpper && hasLower) || (hasLower && hasSpecial))
    ) {
      SetStrength('Okay');
    } else {
      SetStrength('Weak');
    }
  }

  return (
    <div className="container">
      <form onSubmit={PasswordSetter} className="form">
        <input
          type="text"
          placeholder="Your password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>

      {strength && (
        <p className={`strength ${strength.toLowerCase()}`}>
          Password strength: {strength}
        </p>
      )}
    </div>
  );
}

export default App;
