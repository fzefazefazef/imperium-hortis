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
    'nav.home': 'ACCUEIL',
    'nav.philosophie': 'PHILOSOPHIE',
    'nav.services': 'NOS SERVICES',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': "L'art du jardin méditerranéen depuis trois générations. Nous créons des espaces verts d'exception qui capturent l'essence éternelle de la Riviera française.",
    'hero.btn.services': 'Nos savoir-faire',
    'hero.btn.consultation': 'Consultation privée',
    
    // Services Page
    'services.title': 'Nos Services',
    'services.subtitle': 'Découvrez notre gamme complète de services paysagers, conçus pour transformer vos espaces extérieurs en véritables œuvres d\'art végétales.',
    'services.service1.title': 'Conception de Jardins d\'Exception',
    'services.service1.desc': 'Création complète de jardins sur-mesure pour propriétés de prestige',
    'services.service1.features': ['Étude paysagère complète', 'Sélection d\'essences rares', 'Design architectural végétal', 'Suivi de réalisation'],
    'services.service2.title': 'Terrasses et Patios Méditerranéens',
    'services.service2.desc': 'Aménagement de terrasses avec vue panoramique sur la Côte d\'Azur',
    'services.service2.features': ['Mobilier sur-mesure', 'Systèmes d\'irrigation intelligents', 'Éclairage d\'ambiance', 'Pergolas et tonnelles'],
    'services.service3.title': 'Jardins Aquatiques et Fontaines',
    'services.service3.desc': 'Installation de bassins, fontaines et cascades pour un ambiance rafraîchissante',
    'services.service3.features': ['Bassins naturels', 'Fontaines artistiques', 'Éclairage subaquatique', 'Écosystème équilibré'],
    'services.service4.title': 'Maintenance VIP',
    'services.service4.desc': 'Entretien premium pour préserver la beauté de votre jardin toute l\'année',
    'services.service4.features': ['Équipe dédiée', 'Interventions discrètes', 'Produits biologiques', 'Conseils saisonniers'],
    'services.service5.title': 'Éclairage Paysager',
    'services.service5.desc': 'Mise en lumière artistique pour sublimer votre jardin la nuit',
    'services.service5.features': ['LED dernière génération', 'Programmation intelligente', 'Effets dramatiques', 'Économie d\'énergie'],
    'services.service6.title': 'Sculptures Végétales',
    'services.service6.desc': 'Art topiaire et sculptures vivantes pour des jardins uniques au monde',
    'services.service6.features': ['Topiaires sur-mesure', 'Sculptures temporaires', 'Événements privés', 'Créations artistiques'],
    'services.custom.title': 'Service Sur-Mesure',
    'services.custom.desc': 'Chaque projet est unique. Nous créons des solutions personnalisées qui répondent parfaitement à vos besoins spécifiques et à votre vision.',
    'services.custom.btn': 'Consultation gratuite',
    'services.back': 'Retour à l\'accueil',
    
    // Portfolio Page
    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Découvrez nos créations les plus emblématiques, témoins de notre excellence et de notre passion pour l\'art paysager méditerranéen.',
    'portfolio.stats.projects': 'Projets réalisés',
    'portfolio.stats.years': 'Années d\'expérience',
    'portfolio.stats.generations': 'Générations d\'expertise',
    'portfolio.stats.satisfaction': 'Clients satisfaits',
    'portfolio.featured': 'Projets d\'Exception',
    'portfolio.cta.title': 'Votre Projet, Notre Prochaine Création',
    'portfolio.cta.desc': 'Chaque jardin raconte une histoire unique. Laissez-nous écrire la vôtre avec la même passion et le même savoir-faire.',
    'portfolio.cta.btn1': 'Démarrer mon projet',
    'portfolio.cta.btn2': 'Télécharger le portfolio complet',
    'portfolio.back': 'Retour à l\'accueil',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Prenez contact avec nos experts pour donner vie à votre vision. Chaque projet commence par une conversation.',
    'contact.form.title': 'Demande de Consultation',
    'contact.form.firstname': 'Prénom',
    'contact.form.lastname': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.project': 'Type de projet',
    'contact.form.budget': 'Budget estimé',
    'contact.form.description': 'Décrivez votre projet',
    'contact.form.submit': 'Envoyer ma demande',
    'contact.info.title': 'Nos Coordonnées',
    'contact.info.showroom': 'Showroom Principal',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horaires',
    'contact.areas.title': 'Zones d\'Intervention',
    'contact.areas.note': 'Et toute la Côte d\'Azur sur demande',
    'contact.emergency.title': 'Service d\'Urgence',
    'contact.emergency.desc': 'Pour les urgences paysagères (tempêtes, systèmes d\'irrigation, etc.)',
    'contact.back': 'Retour à l\'accueil',
    
    // Philosophy Page
    'philosophy.title': 'Notre Philosophie',
    'philosophy.art.title': 'L\'Art du Jardinage Impérial',
    'philosophy.art.desc1': 'Chez Imperium Hortis, nous croyons que chaque jardin est une œuvre d\'art vivante, un testament à la beauté éternelle de la nature domestiquée par la main experte de l\'homme. Notre philosophie s\'enracine dans l\'excellence, la tradition et l\'innovation harmonieuse.',
    'philosophy.art.desc2': 'Nous ne créons pas simplement des jardins ; nous orchestrons des symphonies végétales qui évoluent avec les saisons, révélant de nouveaux mystères à chaque regard, à chaque promenade.',
    'philosophy.heritage.title': 'Excellence Héritée',
    'philosophy.heritage.desc': 'Trois générations de maîtres jardiniers ont forgé notre savoir-faire unique, transmettant les secrets de l\'art paysager méditerranéen de père en fils.',
    'philosophy.innovation.title': 'Innovation Respectueuse',
    'philosophy.innovation.desc': 'Nous marions les techniques ancestrales aux technologies modernes, créant des écosystèmes durables qui respectent l\'environnement.',
    'philosophy.commitment.title': 'Notre Engagement',
    'philosophy.commitment.authenticity': 'Authenticité',
    'philosophy.commitment.authenticity.desc': 'Respect des essences locales',
    'philosophy.commitment.sustainability': 'Durabilité',
    'philosophy.commitment.sustainability.desc': 'Solutions écologiques',
    'philosophy.commitment.luxury': 'Luxe',
    'philosophy.commitment.luxury.desc': 'Finitions d\'exception',
    'philosophy.back': 'Retour à l\'accueil',
    
    // Common
    'common.image': 'Image du projet',
    'footer.showroom': 'Showroom sur la Côte d\'Azur',
    'footer.rights': 'Tous droits réservés.',
    
    // About
    'about.title': 'Une tradition d\'excellence',
    'about.text': 'Depuis 1923, notre maison perpétue l\'art du jardin méditerranéen avec une passion inégalée. Chaque création reflète notre engagement envers l\'excellence et notre respect profond pour la nature provençale.'
  },
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.philosophie': 'PHILOSOPHY',
    'nav.services': 'OUR SERVICES',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': 'The art of Mediterranean gardening for three generations. We create exceptional green spaces that capture the eternal essence of the French Riviera.',
    'hero.btn.services': 'Our expertise',
    'hero.btn.consultation': 'Private consultation',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Discover our complete range of landscape services, designed to transform your outdoor spaces into true vegetable works of art.',
    'services.service1.title': 'Exceptional Garden Design',
    'services.service1.desc': 'Complete creation of custom gardens for prestigious properties',
    'services.service1.features': ['Complete landscape study', 'Selection of rare species', 'Vegetable architectural design', 'Implementation monitoring'],
    'services.service2.title': 'Mediterranean Terraces and Patios',
    'services.service2.desc': 'Terrace development with panoramic views of the French Riviera',
    'services.service2.features': ['Custom furniture', 'Smart irrigation systems', 'Ambient lighting', 'Pergolas and arbors'],
    'services.service3.title': 'Water Gardens and Fountains',
    'services.service3.desc': 'Installation of pools, fountains and waterfalls for a refreshing atmosphere',
    'services.service3.features': ['Natural pools', 'Artistic fountains', 'Underwater lighting', 'Balanced ecosystem'],
    'services.service4.title': 'VIP Maintenance',
    'services.service4.desc': 'Premium maintenance to preserve the beauty of your garden year-round',
    'services.service4.features': ['Dedicated team', 'Discreet interventions', 'Organic products', 'Seasonal advice'],
    'services.service5.title': 'Landscape Lighting',
    'services.service5.desc': 'Artistic lighting to enhance your garden at night',
    'services.service5.features': ['Latest generation LED', 'Smart programming', 'Dramatic effects', 'Energy saving'],
    'services.service6.title': 'Plant Sculptures',
    'services.service6.desc': 'Topiary art and living sculptures for unique gardens in the world',
    'services.service6.features': ['Custom topiaries', 'Temporary sculptures', 'Private events', 'Artistic creations'],
    'services.custom.title': 'Custom Service',
    'services.custom.desc': 'Each project is unique. We create personalized solutions that perfectly meet your specific needs and vision.',
    'services.custom.btn': 'Free consultation',
    'services.back': 'Back to home',
    
    // Portfolio Page
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover our most emblematic creations, witnesses of our excellence and passion for Mediterranean landscape art.',
    'portfolio.stats.projects': 'Completed projects',
    'portfolio.stats.years': 'Years of experience',
    'portfolio.stats.generations': 'Generations of expertise',
    'portfolio.stats.satisfaction': 'Satisfied clients',
    'portfolio.featured': 'Exceptional Projects',
    'portfolio.cta.title': 'Your Project, Our Next Creation',
    'portfolio.cta.desc': 'Each garden tells a unique story. Let us write yours with the same passion and expertise.',
    'portfolio.cta.btn1': 'Start my project',
    'portfolio.cta.btn2': 'Download full portfolio',
    'portfolio.back': 'Back to home',
    
    // Contact Page
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with our experts to bring your vision to life. Every project starts with a conversation.',
    'contact.form.title': 'Consultation Request',
    'contact.form.firstname': 'First Name',
    'contact.form.lastname': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.project': 'Project Type',
    'contact.form.budget': 'Estimated Budget',
    'contact.form.description': 'Describe your project',
    'contact.form.submit': 'Send my request',
    'contact.info.title': 'Our Contact Information',
    'contact.info.showroom': 'Main Showroom',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    'contact.areas.title': 'Service Areas',
    'contact.areas.note': 'And all the French Riviera on request',
    'contact.emergency.title': 'Emergency Service',
    'contact.emergency.desc': 'For landscape emergencies (storms, irrigation systems, etc.)',
    'contact.back': 'Back to home',
    
    // Philosophy Page
    'philosophy.title': 'Our Philosophy',
    'philosophy.art.title': 'The Art of Imperial Gardening',
    'philosophy.art.desc1': 'At Imperium Hortis, we believe that every garden is a living work of art, a testament to the eternal beauty of nature domesticated by the expert hand of man. Our philosophy is rooted in excellence, tradition and harmonious innovation.',
    'philosophy.art.desc2': 'We don\'t simply create gardens; we orchestrate plant symphonies that evolve with the seasons, revealing new mysteries with every look, every walk.',
    'philosophy.heritage.title': 'Inherited Excellence',
    'philosophy.heritage.desc': 'Three generations of master gardeners have forged our unique expertise, passing down the secrets of Mediterranean landscape art from father to son.',
    'philosophy.innovation.title': 'Respectful Innovation',
    'philosophy.innovation.desc': 'We marry ancestral techniques with modern technologies, creating sustainable ecosystems that respect the environment.',
    'philosophy.commitment.title': 'Our Commitment',
    'philosophy.commitment.authenticity': 'Authenticity',
    'philosophy.commitment.authenticity.desc': 'Respect for local species',
    'philosophy.commitment.sustainability': 'Sustainability',
    'philosophy.commitment.sustainability.desc': 'Ecological solutions',
    'philosophy.commitment.luxury': 'Luxury',
    'philosophy.commitment.luxury.desc': 'Exceptional finishes',
    'philosophy.back': 'Back to home',
    
    // Common
    'common.image': 'Project image',
    'footer.showroom': 'Showroom on the French Riviera',
    'footer.rights': 'All rights reserved.',
    
    // About
    'about.title': 'A tradition of excellence',
    'about.text': 'Since 1923, our house has perpetuated the art of Mediterranean gardening with unmatched passion. Each creation reflects our commitment to excellence and our deep respect for Provençal nature.'
  },
  it: {
    // Navigation
    'nav.home': 'HOME',
    'nav.philosophie': 'FILOSOFIA',
    'nav.services': 'I NOSTRI SERVIZI',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTATTO',
    
    // Hero Section
    'hero.title': 'Imperium Hortis',
    'hero.subtitle': 'L\'arte del giardino mediterraneo da tre generazioni. Creiamo spazi verdi eccezionali che catturano l\'essenza eterna della Riviera francese.',
    'hero.btn.services': 'Le nostre competenze',
    'hero.btn.consultation': 'Consulenza privata',
    
    // Services Page
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Scoprite la nostra gamma completa di servizi paesaggistici, progettati per trasformare i vostri spazi esterni in vere opere d\'arte vegetali.',
    'services.service1.title': 'Progettazione di Giardini Eccezionali',
    'services.service1.desc': 'Creazione completa di giardini su misura per proprietà di prestigio',
    'services.service1.features': ['Studio paesaggistico completo', 'Selezione di specie rare', 'Design architettonico vegetale', 'Monitoraggio della realizzazione'],
    'services.service2.title': 'Terrazze e Patii Mediterranei',
    'services.service2.desc': 'Sviluppo di terrazze con vista panoramica sulla Costa Azzurra',
    'services.service2.features': ['Mobili su misura', 'Sistemi di irrigazione intelligenti', 'Illuminazione ambientale', 'Pergolati e tonnelle'],
    'services.service3.title': 'Giardini Acquatici e Fontane',
    'services.service3.desc': 'Installazione di piscine, fontane e cascate per un\'atmosfera rinfrescante',
    'services.service3.features': ['Piscine naturali', 'Fontane artistiche', 'Illuminazione subacquea', 'Ecosistema equilibrato'],
    'services.service4.title': 'Manutenzione VIP',
    'services.service4.desc': 'Manutenzione premium per preservare la bellezza del vostro giardino tutto l\'anno',
    'services.service4.features': ['Team dedicato', 'Interventi discreti', 'Prodotti biologici', 'Consigli stagionali'],
    'services.service5.title': 'Illuminazione Paesaggistica',
    'services.service5.desc': 'Illuminazione artistica per valorizzare il vostro giardino di notte',
    'services.service5.features': ['LED di ultima generazione', 'Programmazione intelligente', 'Effetti drammatici', 'Risparmio energetico'],
    'services.service6.title': 'Sculture Vegetali',
    'services.service6.desc': 'Arte topiaria e sculture viventi per giardini unici al mondo',
    'services.service6.features': ['Topiarie su misura', 'Sculture temporanee', 'Eventi privati', 'Creazioni artistiche'],
    'services.custom.title': 'Servizio Su Misura',
    'services.custom.desc': 'Ogni progetto è unico. Creiamo soluzioni personalizzate che soddisfano perfettamente le vostre esigenze specifiche e la vostra visione.',
    'services.custom.btn': 'Consulenza gratuita',
    'services.back': 'Torna alla home',
    
    // Portfolio Page
    'portfolio.title': 'Il Nostro Portfolio',
    'portfolio.subtitle': 'Scoprite le nostre creazioni più emblematiche, testimoni della nostra eccellenza e passione per l\'arte paesaggistica mediterranea.',
    'portfolio.stats.projects': 'Progetti completati',
    'portfolio.stats.years': 'Anni di esperienza',
    'portfolio.stats.generations': 'Generazioni di competenza',
    'portfolio.stats.satisfaction': 'Clienti soddisfatti',
    'portfolio.featured': 'Progetti Eccezionali',
    'portfolio.cta.title': 'Il Vostro Progetto, La Nostra Prossima Creazione',
    'portfolio.cta.desc': 'Ogni giardino racconta una storia unica. Lasciateci scrivere la vostra con la stessa passione e competenza.',
    'portfolio.cta.btn1': 'Inizia il mio progetto',
    'portfolio.cta.btn2': 'Scarica portfolio completo',
    'portfolio.back': 'Torna alla home',
    
    // Contact Page
    'contact.title': 'Contatto',
    'contact.subtitle': 'Mettetevi in contatto con i nostri esperti per dare vita alla vostra visione. Ogni progetto inizia con una conversazione.',
    'contact.form.title': 'Richiesta di Consulenza',
    'contact.form.firstname': 'Nome',
    'contact.form.lastname': 'Cognome',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefono',
    'contact.form.project': 'Tipo di Progetto',
    'contact.form.budget': 'Budget Stimato',
    'contact.form.description': 'Descrivi il tuo progetto',
    'contact.form.submit': 'Invia la mia richiesta',
    'contact.info.title': 'Le Nostre Informazioni di Contatto',
    'contact.info.showroom': 'Showroom Principale',
    'contact.info.phone': 'Telefono',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Orari',
    'contact.areas.title': 'Aree di Servizio',
    'contact.areas.note': 'E tutta la Costa Azzurra su richiesta',
    'contact.emergency.title': 'Servizio di Emergenza',
    'contact.emergency.desc': 'Per emergenze paesaggistiche (tempeste, sistemi di irrigazione, ecc.)',
    'contact.back': 'Torna alla home',
    
    // Philosophy Page
    'philosophy.title': 'La Nostra Filosofia',
    'philosophy.art.title': 'L\'Arte del Giardinaggio Imperiale',
    'philosophy.art.desc1': 'In Imperium Hortis, crediamo che ogni giardino sia un\'opera d\'arte vivente, una testimonianza della bellezza eterna della natura addomesticata dalla mano esperta dell\'uomo. La nostra filosofia è radicata nell\'eccellenza, nella tradizione e nell\'innovazione armoniosa.',
    'philosophy.art.desc2': 'Non creiamo semplicemente giardini; orchestriamo sinfonie vegetali che evolvono con le stagioni, rivelando nuovi misteri ad ogni sguardo, ad ogni passeggiata.',
    'philosophy.heritage.title': 'Eccellenza Ereditata',
    'philosophy.heritage.desc': 'Tre generazioni di maestri giardinieri hanno forgiato la nostra competenza unica, tramandando i segreti dell\'arte paesaggistica mediterranea di padre in figlio.',
    'philosophy.innovation.title': 'Innovazione Rispettosa',
    'philosophy.innovation.desc': 'Sposiamo le tecniche ancestrali con le tecnologie moderne, creando ecosistemi sostenibili che rispettano l\'ambiente.',
    'philosophy.commitment.title': 'Il Nostro Impegno',
    'philosophy.commitment.authenticity': 'Autenticità',
    'philosophy.commitment.authenticity.desc': 'Rispetto per le specie locali',
    'philosophy.commitment.sustainability': 'Sostenibilità',
    'philosophy.commitment.sustainability.desc': 'Soluzioni ecologiche',
    'philosophy.commitment.luxury': 'Lusso',
    'philosophy.commitment.luxury.desc': 'Finiture eccezionali',
    'philosophy.back': 'Torna alla home',
    
    // Common
    'common.image': 'Immagine del progetto',
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
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (Array.isArray(translation)) {
      return translation.join(', ');
    }
    return translation || key;
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