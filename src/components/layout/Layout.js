import Header from './Header';

const Layout = ({ children, title, ...props }) => (
  <div>
    <Header {...props} />
    <main>
      <h2>{title}</h2>
      <section>{children}</section>
    </main>
    <footer>@Smart_Ranks_Hotel</footer>
  </div>
);

export default Layout;
