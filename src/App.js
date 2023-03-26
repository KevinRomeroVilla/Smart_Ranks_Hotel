import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './components/auth/context';
import LoginPage from './components/auth/LoginPage';
import RequireAuth from './components/auth/RequireAuth';
import HotelPage from './components/hotels/Hotelpage';
import HotelsPage from './components/hotels/HotelsPage';
import NewHotel from './components/hotels/NewHotel';
import Layout from './components/layout/Layout';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/hotels" element={<Layout />}>
            <Route index element={<HotelsPage />} />
            <Route path=":hotelId" element={<HotelPage />} />
            <Route
              path="new"
              element={
                <RequireAuth isLogged={isLogged}>
                  <NewHotel />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to="hotels" />} />
          <Route path="/404" element={<div>404 | Not found</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
