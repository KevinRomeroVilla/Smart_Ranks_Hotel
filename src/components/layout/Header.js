import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../auth/context';
import { logout } from '../auth/service';
import './Header.css';

const Header = () => {
  const { isLogged, handleLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    handleLogout();
  };
  return (
    <header id="header" className="header">
      <Link to="/" className="link">
        <div>Smart Ranks Hotel</div>
      </Link>
      <nav>
        <NavLink to></NavLink>
        {isLogged ? (
          <div>
            <NavLink to="/hotels/new" className="link">
              New Hotel
            </NavLink>
            <NavLink to="/" className="link">
              All Hotels
            </NavLink>
            <button onClick={handleLogoutClick}>logout</button>
          </div>
        ) : (
          <div>
            <NavLink to="/hotels" className="link">
              All Hotels
            </NavLink>
            <NavLink to="/login" className="link">
              <button className="button">login</button>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
