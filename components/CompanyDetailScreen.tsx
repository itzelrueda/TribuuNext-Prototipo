import React, { useState } from 'react';
import { Company } from '../types';
import Button from './Button';

interface CompanyDetailScreenProps {
  company: Company;
  onContact: () => void;
  onBack: () => void;
}

const CompanyDetailScreen: React.FC<CompanyDetailScreenProps> = ({ company, onContact, onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleContact = () => {
    onContact();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto max-w-4xl">
       <button onClick={onBack} className="flex items-center text-brand-yellow mb-6 font-semibold hover:text-brand-orange transition-colors">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a la lista
      </button>

      <div className="bg-brand-black-light rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700/50">
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-8">
          <img src={company.logoUrl} alt={`${company.name} Logo`} className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-brand-purple flex-shrink-0" />
          <div>
            <h2 className="text-4xl font-extrabold text-brand-white mb-2">{company.name}</h2>
            <p className="text-lg text-brand-yellow font-semibold mb-1">{company.industry}</p>
            <p className="text-md text-gray-400">{company.location}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-2 border-b-2 border-brand-orange/30 pb-2">Sobre Nosotros</h3>
            <p className="text-gray-300 leading-relaxed">{company.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-orange mb-3 border-b-2 border-brand-orange/30 pb-2">Vacantes Disponibles</h3>
            <ul className="space-y-3">
              {company.vacancies.map((vacancy, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold text-gray-200">{vacancy.title}</span>
                  <span className="text-xs font-bold bg-brand-purple text-brand-white px-3 py-1 rounded-full">{vacancy.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          {submitted ? (
            <div className="text-2xl font-bold text-green-400 bg-green-900/50 py-4 px-6 rounded-lg transition-all duration-300">
              ¡Solicitud enviada!
            </div>
          ) : (
            <Button
              onClick={handleContact}
              className="bg-gradient-to-r from-brand-orange to-brand-red hover:from-brand-orange/80 hover:to-brand-red/80 focus:ring-brand-red"
            >
              Contactar empresa
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailScreen;