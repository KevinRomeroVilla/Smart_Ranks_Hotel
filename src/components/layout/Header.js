import { logout } from '../auth/service';
import './Header.css';

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <header id="header" className="header">
      <div>Smart Ranks Hotel</div>
      <nav>
        {isLogged ? (
          <button onClick={handleLogoutClick}>logout</button>
        ) : (
          <button>login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
