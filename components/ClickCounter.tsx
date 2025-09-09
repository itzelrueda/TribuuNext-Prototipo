import React from 'react';
import { ClickCounts } from '../types';

interface ClickCounterProps {
  clicks: ClickCounts;
}

const ClickCounter: React.FC<ClickCounterProps> = ({ clicks }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-brand-black-light text-brand-white py-2 px-4 rounded-lg shadow-lg flex items-center space-x-4 z-50 border border-brand-purple/50">
      <div className="text-center">
        <div className="text-xs text-gray-400">Empezar</div>
        <div className="font-bold text-lg">{clicks.start}</div>
      </div>
      <div className="text-center">
        <div className="text-xs text-gray-400">Ver Detalles</div>
        <div className="font-bold text-lg">{clicks.details}</div>
      </div>
      <div className="text-center bg-brand-purple/20 p-2 rounded-md">
        <div className="text-xs text-brand-purple">Contactar</div>
        <div className="font-bold text-lg text-brand-yellow">{clicks.contact}</div>
      </div>
    </div>
  );
};

export default ClickCounter;