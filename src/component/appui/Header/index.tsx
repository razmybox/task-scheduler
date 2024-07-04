import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center px-4 py-2">
      {/* <input
        type="text"
        className="w-full px-4 py-2 border rounded"
        placeholder="Search"
      /> */}
      <div className="flex items-center ml-auto">
        <div className="flex items-center mr-4">
          {/* User Avatar and Settings */}
          <img
            src="/path/to/avatar.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
