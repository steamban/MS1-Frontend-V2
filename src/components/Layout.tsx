// Layout.js
import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar component is in the same directory

const Layout = ({ children }) => {
  const loggedIn = true; // Replace with your authentication logic
  const username = 'John Doe'; // Replace with actual username
  const avatar = 'https://via.placeholder.com/150'; // Replace with actual avatar URL
  const mail = 'john.doe@example.com'; // Replace with actual email address

  return (
    <div className="flex h-screen">
      <Sidebar loggedIn={loggedIn} username={username} avatar={avatar} mail={mail} />
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
