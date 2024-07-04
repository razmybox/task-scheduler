import React from 'react';
const Ping: React.FC = () => {
  return (
    <>
    <span className="absolute buttom-4 right-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
    </>
  );
};

export default Ping;
