import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashboard">Home</Link>
      </div>

    </>
  );
}
