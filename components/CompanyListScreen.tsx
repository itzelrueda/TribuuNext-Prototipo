import React from 'react';
import { Company } from '../types';
import Button from './Button';

interface CompanyListScreenProps {
  companies: Company[];
  onSelectCompany: (company: Company) => void;
}

const CompanyCard: React.FC<{ company: Company; onSelect: () => void; }> = ({ company, onSelect }) => (
    <div className="bg-brand-black-light rounded-xl overflow-hidden shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 border border-gray-700/50 flex flex-col hover:-translate-y-1 hover:border-brand-purple/50">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <img src={company.logoUrl} alt={`${company.name} Logo`} className="w-16 h-16 rounded-full mr-4 border-2 border-gray-600" />
          <div>
            <h3 className="text-xl font-bold text-brand-white">{company.name}</h3>
            <p className="text-sm text-brand-yellow font-semibold">{company.industry}</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {company.description}
        </p>
      </div>
      <div className="p-6 bg-brand-black/50 mt-auto">
         <Button
            onClick={onSelect}
            className="w-full bg-brand-purple hover:bg-brand-purple/80 focus:ring-brand-purple text-sm"
         >
           Ver detalles
         </Button>
      </div>
    </div>
);


const CompanyListScreen: React.FC<CompanyListScreenProps> = ({ companies, onSelectCompany }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">
        Empresas Destacadas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map(company => (
          <CompanyCard 
            key={company.id} 
            company={company}
            onSelect={() => onSelectCompany(company)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyListScreen;