import React from 'react';
import Button from './Button';
import FireLogo from './FireLogo';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-brand-black to-brand-orange/10 z-0"></div>
       <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-brand-red/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-brand-yellow/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>

      <div className="relative z-10 p-6 flex flex-col items-center">
        <FireLogo className="w-24 h-24 mb-6" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-red to-brand-purple">
          TribuuNext
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Conecta con empresas, encuentra oportunidades.
        </p>
        <Button 
          onClick={onStart} 
          className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-orange/80 hover:to-brand-red/80 focus:ring-brand-red"
        >
          Comenzar
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;