import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayoutInterface } from '..';

const MainLayout: React.FC<AuthLayoutInterface> = ({ children }) => {
  return (
    <div>
      <h1>Main Layout</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Agrega más enlaces para otras páginas */}
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default MainLayout;
