import './Header.css';

const Header = ({ isLogged }) => {
  return (
    <header id="header" className="header">
      <div>Smart Ranks Hotel</div>
      <nav>{isLogged ? <button>logout</button> : <button>login</button>}</nav>
    </header>
  );
};

export default Header;
