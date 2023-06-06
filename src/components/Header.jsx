import React from 'react';
import './style/Header.css';

function Header() {
  return (
    <div className="content-center">
      <pattern className="head-head">todos</pattern>
      <p className="head-sub">
        Items will persist in the browser local storage
      </p>
    </div>
  );
}

export default Header;
