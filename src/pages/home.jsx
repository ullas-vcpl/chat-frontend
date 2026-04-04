//home page sample code
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => { 
  const user = useSelector((state) => state.login.user);

  return (
    <div>
      // if no user is logged in, redirect to login page
      {!user && window.location.replace("/login")}
      
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>
      {user && (
        <p>Hello, {user.name}!</p>
      )}
    </div>
  );
};

export default Home;