import { Outlet } from 'react-router-dom';
import Header from './Header';
const Layout = ({ children, title, ...props }) => (
  <div>
    <Header {...props} />
    <main>
      <Outlet />
    </main>
    <footer>@Smart_Ranks_Hotel</footer>
  </div>
);

export default Layout;
