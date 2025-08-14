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
    'hero.subtitle': "Création et Entretien de Jardins Méditerranéens de Prestige sur la Côte d'Azur",
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
    
    // Projects
    'projects.villa.azzurra': 'Jardin méditerranéen de 2000m² avec terrasses étagées et bassin à débordement',
    'projects.chateau.lumiere': 'Restauration complète des jardins historiques avec création d\'un labyrinthe de buis',
    'projects.penthouse.croisette': 'Terrasse panoramique de 500m² avec jardins suspendus et sculptures végétales',
    'projects.villa.del.mare': 'Jardin vertical et terrasses aquatiques avec vue sur la Méditerranée',
    'projects.domaine.oliviers': 'Parc de 5 hectares avec oliveraie centenaire et jardins thématiques',
    'projects.spa.imperial': 'Jardins sensoriels et thérapeutiques pour centre de bien-être de luxe',
    
    // Categories
    'category.residence': 'Résidence privée',
    'category.heritage': 'Patrimoine historique',
    'category.terrace': 'Terrasse de luxe',
    'category.innovation': 'Innovation paysagère',
    'category.domain': 'Grand domaine',
    'category.commercial': 'Espace commercial',
    'portfolio.subtitle': 'Chaque jardin raconte une histoire.\nNotre vision s\'inspire des paysages méditerranéens, mêlant sobriété naturelle, lignes architecturées et élégance végétale. Cette sélection d\'ambiances reflète notre exigence esthétique, notre sens du détail et l\'art de créer des espaces extérieurs uniques, durables et profondément harmonieux.',
    'portfolio.inspirations.title': 'Signatures Paysagères',
    'portfolio.inspiration1.title': 'Ambiance méditerranéenne chic',
    'portfolio.inspiration1.desc': 'Oliviers sculptés, pierres naturelles, terrasses lumineuses aux lignes douces.',
    'portfolio.inspiration2.title': 'Minimalisme végétal',
    'portfolio.inspiration2.desc': 'Des compositions sobres et équilibrées où chaque plante trouve sa juste place.',
    'portfolio.inspiration3.title': 'Palette végétale sophistiquée',
    'portfolio.inspiration3.desc': 'Jeux de textures, feuillages nobles, floraisons délicates dans des tons feutrés.',
    'portfolio.inspiration4.title': 'Évasion contemporaine',
    'portfolio.inspiration4.desc': 'Allées structurées, mobilier design intégré, bassins miroir et éclairages subtils.',
    'portfolio.note': 'Les visuels présentés ici sont proposés à titre d\'inspiration. Nos réalisations personnelles seront ajoutées très prochainement.',
    'portfolio.cta.title': 'Imaginez Votre Jardin d\'Exception',
    'portfolio.cta.desc': 'Vous imaginez un jardin élégant, unique, conçu sur-mesure pour votre lieu de vie ? Contactez-nous pour une première rencontre confidentielle.',
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
    'philosophy.art.title': 'L\'Art du Jardin Impérial',
    'philosophy.art.desc1': 'Chez Imperium Hortis, nous croyons que chaque jardin est une œuvre d\'art vivante, un testament à la beauté éternelle de la nature domestiquée par la main experte de l\'homme. Notre philosophie s\'enracine dans l\'excellence, la tradition et l\'innovation harmonieuse.',
    'philosophy.art.desc2': 'Nous ne créons pas simplement des jardins ; nous orchestrons des symphonies végétales qui évoluent avec les saisons, révélant de nouveaux mystères à chaque regard, à chaque promenade.',
    'philosophy.heritage.title': 'Excellence Héritée',
    'philosophy.heritage.desc': 'Trois générations de maîtres jardiniers ont forgé notre savoir-faire unique, transmettant les secrets de l\'art paysager méditerranéen de père en fils.',
    'philosophy.innovation.title.old': 'Innovation Respectueuse',
    'philosophy.innovation.desc.old': 'Nous marions les techniques ancestrales aux technologies modernes, créant des écosystèmes durables qui respectent l\'environnement.',
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
    
    // About
    'about.title': 'Une tradition d\'excellence',
    'about.text': 'Depuis 1923, notre maison perpétue l\'art du jardin méditerranéen avec une passion inégalée. Chaque création reflète notre engagement envers l\'excellence et notre respect profond pour la nature provençale.',
    'about.intro.text1': 'Entretien et création d\'espaces extérieurs de prestige sur la Côte d\'Azur : un savoir-faire familial depuis trois générations\n\nDepuis trois générations, Imperium Hortis façonne et entretient des espaces extérieurs prestigieux sur la Côte d\'Azur.',
    'about.intro.text2': 'De Monaco à Saint-Tropez, nous créons et préservons des jardins d\'exception qui allient élégance méditerranéenne et raffinement intemporel.\nChaque projet, qu\'il s\'agisse de création ou d\'entretien, est une œuvre sur-mesure, conçue en parfaite harmonie avec l\'architecture locale, le climat unique de la Riviera et les exigences d\'une clientèle exigeante.',
    'about.gallery': 'Galerie de nos créations les plus emblématiques',
    
    // Home Services
    'home.services.title': 'Nos savoir-faire',
    'home.services.gardens.title': 'Jardins d\'exception',
    'home.services.gardens.desc': 'Conception et réalisation de jardins sur-mesure pour villas de prestige',
    'home.services.terraces.title': 'Éclairage paysager',
    'home.services.terraces.desc': 'Mise en lumière artistique pour sublimer votre jardin la nuit',
    'home.services.art.title': 'Entretien paysager',
    'home.services.art.desc': 'Sculptures végétales et soins personnalisés pour jardins de prestige',
    
    // Home Contact
    'home.contact.title': 'Créons ensemble votre jardin d\'éternité',
    'home.contact.desc': 'Chaque jardin raconte une histoire. Quelle sera la vôtre ? Découvrez comment nous pouvons transformer votre vision en réalité.',
    'home.contact.appointment': 'Consultation privée',
    'home.contact.portfolio': 'Portfolio complet',
    
    // Footer
    'footer.company': 'Imperium Hortis',
    'footer.tagline': 'L\'excellence paysagère depuis 1952',
    'footer.contact': 'Contact',
    'footer.showroom': 'Showroom',
    'footer.address': '123 Boulevard de la Croisette\n06400 Cannes, France',
    'footer.rights': '© 2024 Imperium Hortis. Tous droits réservés.',
    'footer.motto': 'Là où les jardins murmurent la grandeur',
    
    // Index Page Specific
    'index.services.discover': 'Découvrir nos savoir-faires',
    
    // Services Page Specific
    'services.seasonal.title': 'Mise en Scène Végétale Saisonnière',
    'services.seasonal.desc': 'Création de décors floraux sur-mesure selon les saisons : compositions élégantes, jeux de textures et palettes végétales raffinées pour sublimer vos extérieurs tout au long de l\'année.',
    'services.seasonal.features': 'Décors floraux sur-mesure, Compositions saisonnières, Palettes végétales raffinées, Sublimation des extérieurs',
    'services.optimization.title': 'Optimisation & Rafraîchissement de Jardins Existants',
    'services.optimization.desc': 'Revalorisation de jardins déjà aménagés : réorganisation des volumes, apports végétaux ciblés, amélioration de la lisibilité des espaces… Une nouvelle élégance sans tout reconstruire.',
    'services.optimization.features': 'Réorganisation des volumes, Apports végétaux ciblés, Amélioration de la lisibilité, Nouvelle élégance',
    'services.selection.title': 'Sélection & Fourniture de Plantes Haut de Gamme',
    'services.selection.desc': 'Conseil personnalisé et sourcing de plantes d\'exception : oliviers, agrumes rares, topiaires, vivaces méditerranéennes… Chaque sujet végétal est choisi avec soin et distinction.',
    'services.selection.features': 'Oliviers, Agrumes rares, Topiaires sur-mesure, Vivaces méditerranéennes',
    'services.lawn.title': 'Gestion Premium des Pelouses & Arrosage',
    'services.lawn.desc': 'Suivi technique et esthétique de vos gazons : tonte soignée, fertilisation adaptée, traitement ciblé, contrôle des arrosages automatiques. Chaque surface herbacée est entretenue avec précision pour un rendu impeccable en toute saison.',
    'services.lawn.features': 'Tonte soignée, Fertilisation adaptée, Traitement ciblé, Contrôle arrosage automatique',
    
    // Portfolio Page Specific
    'portfolio.intro': 'Chaque jardin raconte une histoire.',
    'portfolio.vision': 'Notre vision s\'inspire des paysages méditerranéens, mêlant sobriété naturelle, lignes architecturées et élégance végétale. Cette sélection d\'ambiances reflète notre exigence esthétique, notre sens du détail et l\'art de créer des espaces extérieurs uniques, durables et profondément harmonieux.',
    
    // Contact Page Specific
    'contact.whatsapp': 'Contactez-nous',
    'contact.form.placeholder.email': 'exemple@email.com',
    'contact.form.placeholder.phone': '+33 6 42 86 78 90',
    'contact.form.placeholder.project': 'Décrivez votre type de projet...',
    'contact.form.submitting': 'Envoi en cours...',
    'contact.error.title': 'Erreur',
    'contact.error.fields': 'Veuillez remplir tous les champs obligatoires.',
    'contact.error.submit': 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    'contact.success.title': 'Message envoyé !',
    'contact.success.desc': 'Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement.',
    'contact.cities.cannes': 'Cannes',
    'contact.cities.monaco': 'Monaco',
    'contact.cities.nice': 'Nice',
    'contact.cities.antibes': 'Antibes',
    'contact.cities.saintpaul': 'Saint Paul de Vence',
    'contact.cities.menton': 'Menton',
    'contact.cities.grasse': 'Grasse',
    'contact.cities.saintjean': 'Saint Jean Cap-Ferrat',
    
    // Philosophy Page Specific
    'philosophy.intro.quote': 'Chez Imperium Hortis, chaque jardin est une œuvre vivante.',
    'philosophy.intro.theater': 'Un théâtre naturel pensé pour durer, pour émouvoir et pour sublimer l\'architecture qu\'il entoure. Notre philosophie puise dans la noblesse des paysages méditerranéens, dans l\'héritage des jardins antiques et dans le raffinement des villas d\'exception de la Côte d\'Azur.',
    'philosophy.intro.poetry': 'Nous ne composons pas des jardins : nous écrivons des poèmes végétaux, à travers des harmonies de textures, de parfums et de lumière, évoluant au fil des saisons.',
    'philosophy.heritage.text1': 'Imperium Hortis s\'inscrit dans la continuité d\'un savoir-faire transmis depuis plusieurs générations. Formé à la fois par l\'exigence familiale et les codes contemporains du paysage haut de gamme, Imperium Hortis est porté par une nouvelle génération passionnée, exigeante et déterminée à faire évoluer les standards du jardin haut de gamme.',
    'philosophy.heritage.text2': 'Chaque projet est le fruit d\'une double exigence : respecter la tradition méditerranéenne tout en intégrant les besoins et les sensibilités d\'aujourd\'hui.',
    'philosophy.heritage.elegance': 'Ici, l\'élégance naît de la rigueur.',
    'philosophy.heritage.text3': 'Et si notre regard est résolument tourné vers l\'avenir, il puise sa force dans des racines profondes antiques et méditerranéennes et une culture du détail que le temps a forgée.',
    'philosophy.vision.title': 'Une vision construite avec exigence',
    'philosophy.vision.text1': 'Imperium Hortis porte une ambition claire : offrir, à terme, une maîtrise complète et harmonieuse de l\'art des extérieurs des jardins aux terrasses, de l\'arrosage à la mise en lumière.',
    'philosophy.vision.text2': 'Cette vision s\'inscrit dans une démarche réfléchie et pérenne, où chaque étape se déploie avec rigueur, un sens aigu du détail et la volonté de tisser une relation de confiance durable avec chaque client.',
    'philosophy.vision.text3': 'Au-delà de l\'excellence technique, notre engagement se traduit par une simplicité raffinée au service de votre sérénité :',
    'philosophy.vision.approach': 'une seule entité, un interlocuteur dédié',
    'philosophy.vision.text4': ', pour orchestrer avec finesse l\'ensemble de vos espaces extérieurs.',
    'philosophy.vision.text5': 'Cette approche exclusive garantit une gestion harmonieuse et fluide, tout en préservant l\'intimité de votre domaine par une orchestration soigneuse des accès, garantissant discrétion et sécurité dans une harmonie parfaite.',
    'philosophy.innovation.title': 'Innovation, tradition & excellence durable',
    'philosophy.innovation.quote': 'Chaque projet confié à Imperium Hortis est traité comme une pièce unique.',
    'philosophy.innovation.text1': 'Nous unissons les techniques ancestrales aux solutions modernes, pour créer des écosystèmes respectueux, durables et esthétiquement puissants, s\'inspirant délicatement de l\'harmonie intemporelle des jardins méditerranéens antiques.',
    'philosophy.innovation.text2': 'Le respect de la terre, l\'élégance naturelle et la précision d\'exécution guident chacun de nos gestes.',
    'philosophy.pillars.title': 'Nos piliers d\'engagement',
    'philosophy.pillars.authenticity.title': 'AUTHENTICITÉ',
    'philosophy.pillars.authenticity.desc': 'Essences locales et plantes nobles, choisies pour leur beauté et leur adaptation naturelle.',
    'philosophy.pillars.sustainability.title': 'DURABILITÉ',
    'philosophy.pillars.sustainability.desc': 'Arrosages optimisés, écosystèmes équilibrés, pratiques respectueuses du climat méditerranéen.',
    'philosophy.pillars.excellence.title': 'EXCELLENCE',
    'philosophy.pillars.excellence.desc': 'Finitions d\'exception, suivi minutieux, service à la hauteur des plus grandes exigences.',
    'philosophy.cta': 'RETOUR À L\'ACCUEIL',
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
    'hero.subtitle': "Creation and Maintenance of Prestigious Mediterranean Gardens on the French Riviera",
    'hero.btn.services': 'Our know-how',
    'hero.btn.consultation': 'Private consultation',
    
    // About - Homepage Section
    'about.title': 'A tradition of excellence',
    'about.intro.text1': 'Maintenance and creation of prestigious outdoor spaces on the French Riviera: family know-how for three generations\n\nFor three generations, Imperium Hortis shapes and maintains prestigious outdoor spaces on the French Riviera.',
    'about.intro.text2': 'From Monaco to Saint-Tropez, we create and preserve exceptional gardens that combine Mediterranean elegance and timeless refinement.\nEach project, whether creation or maintenance, is a custom work, designed in perfect harmony with local architecture, the unique climate of the Riviera and the requirements of a demanding clientele.',
    
    // Home Services
    'home.services.title': 'Our know-how',
    'home.services.gardens.title': 'Exceptional gardens',
    'home.services.gardens.desc': 'Design and realization of custom gardens for prestigious villas',
    'home.services.terraces.title': 'Landscape lighting',
    'home.services.terraces.desc': 'Artistic lighting to enhance your garden at night',
    'home.services.art.title': 'Landscape maintenance',
    'home.services.art.desc': 'Plant sculptures and personalized care for prestigious gardens',
    
    // Home Contact
    'home.contact.title': 'Let us create together your garden of eternity',
    'home.contact.desc': 'Each garden tells a story. What will yours be? Discover how we can transform your vision into reality.',
    'home.contact.appointment': 'Private consultation',
    'home.contact.portfolio': 'Complete portfolio',
    
    // Footer
    'footer.rights': '© 2024 Imperium Hortis. All rights reserved.',
    'footer.motto': 'Where gardens whisper grandeur',
    
    // Index Page Specific
    'index.services.discover': 'Discover our know-how',
    
    // Services Page Specific
    'services.seasonal.title': 'Seasonal Plant Staging',
    'services.seasonal.desc': 'Creation of custom floral decorations according to the seasons: elegant compositions, texture play and refined plant palettes to enhance your exteriors throughout the year.',
    'services.seasonal.features': 'Custom floral decorations, Seasonal compositions, Refined plant palettes, Enhancement of exteriors',
    'services.optimization.title': 'Optimization & Refreshing of Existing Gardens',
    'services.optimization.desc': 'Revaluation of already landscaped gardens: reorganization of volumes, targeted plant additions, improvement of space readability... A new elegance without rebuilding everything.',
    'services.optimization.features': 'Volume reorganization, Targeted plant additions, Improved readability, New elegance',
    'services.selection.title': 'Selection & Supply of High-End Plants',
    'services.selection.desc': 'Personalized advice and sourcing of exceptional plants: olive trees, rare citrus fruits, topiaries, Mediterranean perennials... Each plant subject is chosen with care and distinction.',
    'services.selection.features': 'Olive trees, Rare citrus fruits, Custom topiaries, Mediterranean perennials',
    'services.lawn.title': 'Premium Lawn & Irrigation Management',
    'services.lawn.desc': 'Technical and aesthetic monitoring of your lawns: careful mowing, adapted fertilization, targeted treatment, automatic irrigation control. Each grassy surface is maintained with precision for an impeccable result in all seasons.',
    'services.lawn.features': 'Careful mowing, Adapted fertilization, Targeted treatment, Automatic irrigation control',
    
    // Portfolio Page Specific
    'portfolio.intro': 'Every garden tells a story.',
    'portfolio.vision': 'Our vision draws inspiration from Mediterranean landscapes, blending natural sobriety, architectural lines and plant elegance. This selection of atmospheres reflects our aesthetic requirements, our attention to detail and the art of creating unique, sustainable and deeply harmonious outdoor spaces.',
    
    // Contact Page Specific
    'contact.whatsapp': 'Contact us',
    'contact.form.placeholder.email': 'example@email.com',
    'contact.form.placeholder.phone': '+33 6 42 86 78 90',
    'contact.form.placeholder.project': 'Describe your project type...',
    'contact.form.submitting': 'Sending...',
    'contact.error.title': 'Error',
    'contact.error.fields': 'Please fill in all required fields.',
    'contact.error.submit': 'An error occurred while sending. Please try again.',
    'contact.success.title': 'Message sent!',
    'contact.success.desc': 'Your request has been sent successfully. We will contact you back quickly.',
    'contact.cities.cannes': 'Cannes',
    'contact.cities.monaco': 'Monaco',
    'contact.cities.nice': 'Nice',
    'contact.cities.antibes': 'Antibes',
    'contact.cities.saintpaul': 'Saint Paul de Vence',
    'contact.cities.menton': 'Menton',
    'contact.cities.grasse': 'Grasse',
    'contact.cities.saintjean': 'Saint Jean Cap-Ferrat',
    
    // Philosophy Page Specific
    'philosophy.intro.quote': 'At Imperium Hortis, every garden is a living work.',
    'philosophy.intro.theater': 'A natural theater designed to last, to move and to sublimate the architecture it surrounds. Our philosophy draws from the nobility of Mediterranean landscapes, from the heritage of ancient gardens and from the refinement of exceptional villas on the French Riviera.',
    'philosophy.intro.poetry': 'We do not compose gardens: we write plant poems, through harmonies of textures, scents and light, evolving with the seasons.',
    'philosophy.heritage.text1': 'Imperium Hortis is part of the continuity of a know-how transmitted for several generations. Formed both by family requirements and contemporary codes of high-end landscaping, Imperium Hortis is carried by a new passionate, demanding generation determined to evolve the standards of high-end gardens.',
    'philosophy.heritage.text2': 'Each project is the result of a double requirement: respecting Mediterranean tradition while integrating today\'s needs and sensibilities.',
    'philosophy.heritage.elegance': 'Here, elegance is born from rigor.',
    'philosophy.heritage.text3': 'And if our gaze is resolutely turned towards the future, it draws its strength from deep ancient and Mediterranean roots and a culture of detail that time has forged.',
    'philosophy.vision.title': 'A vision built with excellence',
    'philosophy.vision.text1': 'Imperium Hortis carries a clear ambition: to offer, ultimately, complete and harmonious mastery of the art of exteriors from gardens to terraces, from irrigation to lighting.',
    'philosophy.vision.text2': 'This vision is part of a thoughtful and sustainable approach, where each step unfolds with rigor, a keen sense of detail and the will to weave a lasting relationship of trust with each client.',
    'philosophy.vision.text3': 'Beyond technical excellence, our commitment translates into refined simplicity in service of your serenity:',
    'philosophy.vision.approach': 'a single entity, a dedicated interlocutor',
    'philosophy.vision.text4': ', to orchestrate with finesse all of your outdoor spaces.',
    'philosophy.vision.text5': 'This exclusive approach guarantees harmonious and fluid management, while preserving the intimacy of your domain through careful orchestration of access, guaranteeing discretion and security in perfect harmony.',
    'philosophy.innovation.title': 'Innovation, tradition & sustainable excellence',
    'philosophy.innovation.quote': 'Each project entrusted to Imperium Hortis is treated as a unique piece.',
    'philosophy.innovation.text1': 'We unite ancestral techniques with modern solutions, to create respectful, sustainable and aesthetically powerful ecosystems, delicately inspired by the timeless harmony of ancient Mediterranean gardens.',
    'philosophy.innovation.text2': 'Respect for the earth, natural elegance and precision of execution guide each of our gestures.',
    'philosophy.pillars.title': 'Our pillars of commitment',
    'philosophy.pillars.authenticity.title': 'AUTHENTICITY',
    'philosophy.pillars.authenticity.desc': 'Local species and noble plants, chosen for their beauty and natural adaptation.',
    'philosophy.pillars.sustainability.title': 'SUSTAINABILITY',
    'philosophy.pillars.sustainability.desc': 'Optimized irrigation, balanced ecosystems, practices respectful of the Mediterranean climate.',
    'philosophy.pillars.excellence.title': 'EXCELLENCE',
    'philosophy.pillars.excellence.desc': 'Exceptional finishes, meticulous monitoring, service worthy of the highest demands.',
    'philosophy.cta': 'BACK TO HOME',
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
    'hero.subtitle': "Creazione e Manutenzione di Giardini Mediterranei di Prestigio sulla Costa Azzurra",
    'hero.btn.services': 'I nostri saperi',
    'hero.btn.consultation': 'Consultazione privata',
    
    // About - Homepage Section
    'about.title': 'Una tradizione di eccellenza',
    'about.intro.text1': 'Manutenzione e creazione di spazi esterni di prestigio sulla Costa Azzurra: un sapere familiare da tre generazioni\n\nDa tre generazioni, Imperium Hortis plasma e mantiene spazi esterni prestigiosi sulla Costa Azzurra.',
    'about.intro.text2': 'Da Monaco a Saint-Tropez, creiamo e preserviamo giardini d\'eccellenza che uniscono eleganza mediterranea e raffinatezza senza tempo.\nOgni progetto, che si tratti di creazione o manutenzione, è un\'opera su misura, concepita in perfetta armonia con l\'architettura locale, il clima unico della Riviera e le esigenze di una clientela esigente.',
    
    // Home Services
    'home.services.title': 'I nostri saperi',
    'home.services.gardens.title': 'Giardini d\'eccellenza',
    'home.services.gardens.desc': 'Concezione e realizzazione di giardini su misura per ville di prestigio',
    'home.services.terraces.title': 'Illuminazione paesaggistica',
    'home.services.terraces.desc': 'Messa in luce artistica per sublimare il vostro giardino di notte',
    'home.services.art.title': 'Manutenzione paesaggistica',
    'home.services.art.desc': 'Sculture vegetali e cure personalizzate per giardini di prestigio',
    
    // Home Contact
    'home.contact.title': 'Creiamo insieme il vostro giardino d\'eternità',
    'home.contact.desc': 'Ogni giardino racconta una storia. Quale sarà la vostra? Scoprite come possiamo trasformare la vostra visione in realtà.',
    'home.contact.appointment': 'Consultazione privata',
    'home.contact.portfolio': 'Portfolio completo',
    
    // Footer
    'footer.rights': '© 2024 Imperium Hortis. Tutti i diritti riservati.',
    'footer.motto': 'Dove i giardini mormorano la grandezza',
    
    // Index Page Specific
    'index.services.discover': 'Scoprire i nostri saperi',
    
    // Services Page Specific
    'services.seasonal.title': 'Messa in Scena Vegetale Stagionale',
    'services.seasonal.desc': 'Creazione di decorazioni floreali su misura secondo le stagioni: composizioni eleganti, giochi di texture e palette vegetali raffinate per sublimizzare i vostri esterni tutto l\'anno.',
    'services.seasonal.features': 'Decorazioni floreali su misura, Composizioni stagionali, Palette vegetali raffinate, Sublimazione degli esterni',
    'services.optimization.title': 'Ottimizzazione & Rinnovamento di Giardini Esistenti',
    'services.optimization.desc': 'Rivalutazione di giardini già sistemati: riorganizzazione dei volumi, apporti vegetali mirati, miglioramento della leggibilità degli spazi... Una nuova eleganza senza ricostruire tutto.',
    'services.optimization.features': 'Riorganizzazione dei volumi, Apporti vegetali mirati, Miglioramento della leggibilità, Nuova eleganza',
    'services.selection.title': 'Selezione & Fornitura di Piante di Alta Gamma',
    'services.selection.desc': 'Consulenza personalizzata e sourcing di piante d\'eccezione: ulivi, agrumi rari, topiarie, perenni mediterranee... Ogni soggetto vegetale è scelto con cura e distinzione.',
    'services.selection.features': 'Ulivi, Agrumi rari, Topiarie su misura, Perenni mediterranee',
    'services.lawn.title': 'Gestione Premium di Prati & Irrigazione',
    'services.lawn.desc': 'Monitoraggio tecnico ed estetico dei vostri prati: taglio accurato, fertilizzazione adattata, trattamento mirato, controllo dell\'irrigazione automatica. Ogni superficie erbosa è mantenuta con precisione per un risultato impeccabile in ogni stagione.',
    'services.lawn.features': 'Taglio accurato, Fertilizzazione adattata, Trattamento mirato, Controllo irrigazione automatica',
    
    // Portfolio Page Specific
    'portfolio.intro': 'Ogni giardino racconta una storia.',
    'portfolio.vision': 'La nostra visione si ispira ai paesaggi mediterranei, mescolando sobrietà naturale, linee architettoniche ed eleganza vegetale. Questa selezione di atmosfere riflette la nostra esigenza estetica, il nostro senso del dettaglio e l\'arte di creare spazi esterni unici, sostenibili e profondamente armoniosi.',
    
    // Contact Page Specific
    'contact.whatsapp': 'Contattaci',
    'contact.form.placeholder.email': 'esempio@email.com',
    'contact.form.placeholder.phone': '+33 6 42 86 78 90',
    'contact.form.placeholder.project': 'Descrivi il tuo tipo di progetto...',
    'contact.form.submitting': 'Invio in corso...',
    'contact.error.title': 'Errore',
    'contact.error.fields': 'Si prega di compilare tutti i campi obbligatori.',
    'contact.error.submit': 'Si è verificato un errore durante l\'invio. Si prega di riprovare.',
    'contact.success.title': 'Messaggio inviato!',
    'contact.success.desc': 'La vostra richiesta è stata inviata con successo. Vi ricontatteremo rapidamente.',
    'contact.cities.cannes': 'Cannes',
    'contact.cities.monaco': 'Monaco',
    'contact.cities.nice': 'Nizza',
    'contact.cities.antibes': 'Antibes',
    'contact.cities.saintpaul': 'Saint Paul de Vence',
    'contact.cities.menton': 'Mentone',
    'contact.cities.grasse': 'Grasse',
    'contact.cities.saintjean': 'Saint Jean Cap-Ferrat',
    
    // Philosophy Page Specific
    'philosophy.intro.quote': 'Da Imperium Hortis, ogni giardino è un\'opera vivente.',
    'philosophy.intro.theater': 'Un teatro naturale pensato per durare, per emozionare e per sublimizzare l\'architettura che lo circonda. La nostra filosofia attinge nella nobiltà dei paesaggi mediterranei, nell\'eredità dei giardini antichi e nella raffinatezza delle ville d\'eccezione della Costa Azzurra.',
    'philosophy.intro.poetry': 'Non componiamo giardini: scriviamo poemi vegetali, attraverso armonie di texture, profumi e luce, che evolvono con le stagioni.',
    'philosophy.heritage.text1': 'Imperium Hortis si inscrive nella continuità di un know-how trasmesso da diverse generazioni. Formato sia dall\'esigenza familiare che dai codici contemporanei del paesaggio di alta gamma, Imperium Hortis è portato da una nuova generazione appassionata, esigente e determinata a far evolvere gli standard del giardino di alta gamma.',
    'philosophy.heritage.text2': 'Ogni progetto è il frutto di una doppia esigenza: rispettare la tradizione mediterranea integrando al contempo i bisogni e le sensibilità di oggi.',
    'philosophy.heritage.elegance': 'Qui, l\'eleganza nasce dal rigore.',
    'philosophy.heritage.text3': 'E se il nostro sguardo è risolutamente rivolto verso il futuro, attinge la sua forza da radici profonde antiche e mediterranee e da una cultura del dettaglio che il tempo ha forgiato.',
    'philosophy.vision.title': 'Una visione costruita con esigenza',
    'philosophy.vision.text1': 'Imperium Hortis porta un\'ambizione chiara: offrire, a termine, una padronanza completa e armoniosa dell\'arte degli esterni dai giardini alle terrazze, dall\'irrigazione all\'illuminazione.',
    'philosophy.vision.text2': 'Questa visione si inscrive in un approccio riflettuto e perenne, dove ogni tappa si sviluppa con rigore, un senso acuto del dettaglio e la volontà di tessere una relazione di fiducia duratura con ogni cliente.',
    'philosophy.vision.text3': 'Al di là dell\'eccellenza tecnica, il nostro impegno si traduce in una semplicità raffinata al servizio della vostra serenità:',
    'philosophy.vision.approach': 'un\'unica entità, un interlocutore dedicato',
    'philosophy.vision.text4': ', per orchestrare con finezza l\'insieme dei vostri spazi esterni.',
    'philosophy.vision.text5': 'Questo approccio esclusivo garantisce una gestione armoniosa e fluida, preservando al contempo l\'intimità del vostro dominio attraverso un\'orchestrazione accurata degli accessi, garantendo discrezione e sicurezza in un\'armonia perfetta.',
    'philosophy.innovation.title': 'Innovazione, tradizione & eccellenza sostenibile',
    'philosophy.innovation.quote': 'Ogni progetto affidato a Imperium Hortis è trattato come un pezzo unico.',
    'philosophy.innovation.text1': 'Uniamo le tecniche ancestrali alle soluzioni moderne, per creare ecosistemi rispettosi, sostenibili ed esteticamente potenti, ispirandoci delicatamente all\'armonia senza tempo dei giardini mediterranei antichi.',
    'philosophy.innovation.text2': 'Il rispetto della terra, l\'eleganza naturale e la precisione di esecuzione guidano ognuno dei nostri gesti.',
    'philosophy.pillars.title': 'I nostri pilastri di impegno',
    'philosophy.pillars.authenticity.title': 'AUTENTICITÀ',
    'philosophy.pillars.authenticity.desc': 'Essenze locali e piante nobili, scelte per la loro bellezza e il loro adattamento naturale.',
    'philosophy.pillars.sustainability.title': 'SOSTENIBILITÀ',
    'philosophy.pillars.sustainability.desc': 'Irrigazioni ottimizzate, ecosistemi equilibrati, pratiche rispettose del clima mediterraneo.',
    'philosophy.pillars.excellence.title': 'ECCELLENZA',
    'philosophy.pillars.excellence.desc': 'Finiture d\'eccezione, monitoraggio meticoloso, servizio all\'altezza delle più grandi esigenze.',
    'philosophy.cta': 'RITORNO ALLA HOME',
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