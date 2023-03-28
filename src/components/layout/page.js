import { Fragment } from 'react';
import './page.css';

const Page = ({ title, children }) => {
  return (
    <div className="mainContent">
      <h2>{title}</h2>
      <section>{children}</section>
    </div>
  );
};

export default Page;
