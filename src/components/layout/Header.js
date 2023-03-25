import { Link, NavLink } from 'react-router-dom';
import { logout } from '../auth/service';
import './Header.css';

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <header id="header" className="header">
      <Link to="/">
        <div>Smart Ranks Hotel</div>
      </Link>
      <nav>
        <NavLink to></NavLink>
        {isLogged ? (
          <div>
            <NavLink to="/hotels/new">New Hotel</NavLink>
            <NavLink to="/">All Hotels</NavLink>
            <button onClick={handleLogoutClick}>logout</button>
          </div>
        ) : (
          <div>
            <NavLink to="/hotels">All Hotels</NavLink>
            <button>login</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
