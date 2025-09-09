import React from 'react';
import FireLogo from './FireLogo';

const Header: React.FC = () => {
  return (
    <header className="p-4 flex items-center justify-center sticky top-0 bg-brand-black/80 backdrop-blur-sm z-40 border-b border-gray-700/50">
        <div className="flex items-center space-x-3">
            <FireLogo className="w-8 h-8"/>
            <span className="text-xl font-bold text-brand-white">TribuuNext</span>
        </div>
    </header>
  );
};

export default Header;