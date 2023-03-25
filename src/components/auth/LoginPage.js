import { useState } from 'react';
import FormField from './FormField';
import { login } from './service';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ username, password }).then(onLogin);
  };

  const isDisabled = () => {
    return !(username && password);
  };

  return (
    <div>
      <h1>Login to Smart Ranks Hotel</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="username"
          className="loginForm-field"
          onChange={handleChangeUsername}
          value={username}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          onChange={handleChangePassword}
          value={password}
        />
        <button type="submit" disabled={isDisabled()}>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
