import React from 'react';

interface FireLogoProps {
  className?: string;
}

const FireLogo: React.FC<FireLogoProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fireGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFC700" />
          <stop offset="50%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FF3B3B" />
        </linearGradient>
      </defs>
      <path 
        d="M12 2C12 2 4 10 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 10 12 2 12 2ZM12 20C9.17 20 7 17.38 7 14.5C7 12.29 9.61 9.07 12 6.5C14.39 9.07 17 12.29 17 14.5C17 17.38 14.83 20 12 20Z" 
        fill="url(#fireGradient)"
      />
       <path 
        d="M12 10.5C10.62 10.5 9.5 11.62 9.5 13C9.5 14.93 12 17.5 12 17.5C12 17.5 14.5 14.93 14.5 13C14.5 11.62 13.38 10.5 12 10.5Z" 
        fill="white"
        fillOpacity="0.3"
      />
    </svg>
  );
};

export default FireLogo;