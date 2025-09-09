import React, { useState, useEffect } from 'react';
import { Screen, Company, ClickCounts } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import CompanyListScreen from './components/CompanyListScreen';
import CompanyDetailScreen from './components/CompanyDetailScreen';
import ClickCounter from './components/ClickCounter';
import Header from './components/Header';
import { COMPANIES } from './constants';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.WELCOME);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  
  const getInitialClicks = (): ClickCounts => {
    try {
      const storedClicks = localStorage.getItem('clickCounts');
      return storedClicks ? JSON.parse(storedClicks) : { start: 0, details: 0, contact: 0 };
    } catch (error) {
      console.error("Could not parse click counts from localStorage", error);
      return { start: 0, details: 0, contact: 0 };
    }
  };

  const [clicks, setClicks] = useState<ClickCounts>(getInitialClicks);

  // Effect to save clicks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('clickCounts', JSON.stringify(clicks));
    } catch (error) {
      console.error("Could not save click counts to localStorage", error);
    }
  }, [clicks]);

  // Effect to listen for storage changes from other tabs for real-time sync
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'clickCounts' && event.newValue) {
        try {
          const newClicks = JSON.parse(event.newValue);
          setClicks(newClicks);
        } catch (error) {
          console.error("Could not parse click counts from storage event", error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  const handleStart = () => {
    setClicks(prev => ({ ...prev, start: prev.start + 1 }));
    setScreen(Screen.COMPANY_LIST);
  };
  
  const handleSelectCompany = (company: Company) => {
    setClicks(prev => ({ ...prev, details: prev.details + 1 }));
    setSelectedCompany(company);
    setScreen(Screen.COMPANY_DETAIL);
  };
  
  const handleContact = () => {
    setClicks(prev => ({ ...prev, contact: prev.contact + 1 }));
  };
  
  const handleBackToList = () => {
    setSelectedCompany(null);
    setScreen(Screen.COMPANY_LIST);
  }

  const renderScreen = () => {
    switch (screen) {
      case Screen.WELCOME:
        return <WelcomeScreen onStart={handleStart} />;
      case Screen.COMPANY_LIST:
        return (
          <CompanyListScreen
            companies={COMPANIES}
            onSelectCompany={handleSelectCompany}
          />
        );
      case Screen.COMPANY_DETAIL:
        if (selectedCompany) {
          return (
            <CompanyDetailScreen
              company={selectedCompany}
              onContact={handleContact}
              onBack={handleBackToList}
            />
          );
        }
        // Fallback to list
        return <CompanyListScreen companies={COMPANIES} onSelectCompany={handleSelectCompany} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans">
      {screen !== Screen.WELCOME && <Header />}
      <main className="p-4 sm:p-6 md:p-8">{renderScreen()}</main>
      <ClickCounter clicks={clicks} />
    </div>
  );
};

export default App;