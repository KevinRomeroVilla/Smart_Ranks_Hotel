import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import HotelPage from './components/hotels/Hotelpage';
import HotelsPage from './components/hotels/HotelsPage';
import NewHotel from './components/hotels/NewHotel';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/hotels"
          element={<HotelsPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route path="/hotels/:hotelid" element={<HotelPage />} />
        <Route path="/hotels/new" element={<NewHotel />} />
        <Route path="/" element={<Navigate to="hotels" />} />
        <Route path="/404" element={<div>404 | Not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
