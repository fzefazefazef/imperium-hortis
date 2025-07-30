import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.philosophie': 'PHILOSOPHIE',
    'nav.services': 'NOS SERVICES',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': "L'art du jardin méditerranéen depuis trois générations. Nous créons des espaces verts d'exception qui capturent l'essence éternelle de la Riviera française.",
    'hero.btn.services': 'Nos savoir-faire',
    'hero.btn.consultation': 'Consultation privée',
    
    // Services
    'services.title': 'Nos savoir-faire',
    'services.subtitle': 'Des créations uniques inspirées par la beauté méditerranéenne',
    'services.garden.title': 'Jardins d\'exception',
    'services.garden.desc': 'Conception et réalisation de jardins méditerranéens sur-mesure',
    'services.terrace.title': 'Terrasses panoramiques',
    'services.terrace.desc': 'Aménagement de terrasses avec vue sur la Riviera',
    'services.art.title': 'Art paysager',
    'services.art.desc': 'Sculptures végétales et installations artistiques',
    
    // Contact
    'contact.title': 'Créons ensemble votre jardin d\'éternité',
    'contact.btn.appointment': 'Prendre rendez-vous',
    'contact.btn.portfolio': 'Portfolio complet',
    'footer.showroom': 'Showroom sur la Côte d\'Azur',
    'footer.rights': 'Tous droits réservés.',
    
    // About
    'about.title': 'Une tradition d\'excellence',
    'about.text': 'Depuis 1923, notre maison perpétue l\'art du jardin méditerranéen avec une passion inégalée. Chaque création reflète notre engagement envers l\'excellence et notre respect profond pour la nature provençale.'
  },
  en: {
    // Navigation
    'nav.philosophie': 'PHILOSOPHY',
    'nav.services': 'OUR SERVICES',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': 'The art of Mediterranean gardening for three generations. We create exceptional green spaces that capture the eternal essence of the French Riviera.',
    'hero.btn.services': 'Our expertise',
    'hero.btn.consultation': 'Private consultation',
    
    // Services
    'services.title': 'Our expertise',
    'services.subtitle': 'Unique creations inspired by Mediterranean beauty',
    'services.garden.title': 'Exceptional gardens',
    'services.garden.desc': 'Design and creation of custom Mediterranean gardens',
    'services.terrace.title': 'Panoramic terraces',
    'services.terrace.desc': 'Terrace landscaping with Riviera views',
    'services.art.title': 'Landscape art',
    'services.art.desc': 'Plant sculptures and artistic installations',
    
    // Contact
    'contact.title': 'Let\'s create your eternal garden together',
    'contact.btn.appointment': 'Book appointment',
    'contact.btn.portfolio': 'Full portfolio',
    'footer.showroom': 'Showroom on the French Riviera',
    'footer.rights': 'All rights reserved.',
    
    // About
    'about.title': 'A tradition of excellence',
    'about.text': 'Since 1923, our house has perpetuated the art of Mediterranean gardening with unmatched passion. Each creation reflects our commitment to excellence and our deep respect for Provençal nature.'
  },
  it: {
    // Navigation
    'nav.philosophie': 'FILOSOFIA',
    'nav.services': 'I NOSTRI SERVIZI',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTATTO',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': 'L\'arte del giardino mediterraneo da tre generazioni. Creiamo spazi verdi eccezionali che catturano l\'essenza eterna della Riviera francese.',
    'hero.btn.services': 'Le nostre competenze',
    'hero.btn.consultation': 'Consulenza privata',
    
    // Services
    'services.title': 'Le nostre competenze',
    'services.subtitle': 'Creazioni uniche ispirate dalla bellezza mediterranea',
    'services.garden.title': 'Giardini d\'eccezione',
    'services.garden.desc': 'Progettazione e realizzazione di giardini mediterranei su misura',
    'services.terrace.title': 'Terrazze panoramiche',
    'services.terrace.desc': 'Paesaggistica di terrazze con vista sulla Riviera',
    'services.art.title': 'Arte paesaggistica',
    'services.art.desc': 'Sculture vegetali e installazioni artistiche',
    
    // Contact
    'contact.title': 'Creiamo insieme il vostro giardino dell\'eternità',
    'contact.btn.appointment': 'Prenota appuntamento',
    'contact.btn.portfolio': 'Portfolio completo',
    'footer.showroom': 'Showroom sulla Costa Azzurra',
    'footer.rights': 'Tutti i diritti riservati.',
    
    // About
    'about.title': 'Una tradizione di eccellenza',
    'about.text': 'Dal 1923, la nostra casa perpetua l\'arte del giardino mediterraneo con passione ineguagliabile. Ogni creazione riflette il nostro impegno verso l\'eccellenza e il nostro profondo rispetto per la natura provenzale.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};