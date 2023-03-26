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
            <NavLink to="/login">
              <button>login</button>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
