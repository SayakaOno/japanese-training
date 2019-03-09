import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = props => {
  return (
    <div className='no-match'>
      <h2>Page not found</h2>
      <p>Sorry, but what you are looking for could not be found.</p>
      <Link to='/' className='button ui secondary'>
        Home
      </Link>
    </div>
  );
};

export default NoMatch;
