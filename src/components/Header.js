import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>My ACME Employee Directory</h1>
        <p>Please use the search box to narrow your results or click on the column name to sort the list.</p>
      </div>
    )
  }

export default Header;