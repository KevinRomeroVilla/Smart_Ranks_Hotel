import { useState } from 'react';
import LoginPage from './components/auth/LoginPage';
import HotelsPage from './components/hotels/HotelsPage';
import NewHotel from './components/hotels/NewHotel';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      {isLogged ? (
        <HotelsPage isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
