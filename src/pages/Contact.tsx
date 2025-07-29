import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: "ACCUEIL", path: "/" },
            { name: "PHILOSOPHIE", path: "/philosophie" },
            { name: "NOS SERVICES", path: "/services" },
            { name: "PORTFOLIO", path: "/portfolio" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-cinzel text-sm font-medium text-soft-white/90 hover:text-sage-green transition-all duration-300 hover:scale-105 tracking-wider"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-8 text-center">
            <span className="text-sage-green">Contact</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Prenez contact avec nos experts pour donner vie à votre vision. 
            Chaque projet commence par une conversation.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl font-semibold text-sage-green mb-8">
                Demande de Consultation
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      Prénom *
                    </label>
                    <Input 
                      placeholder="Votre prénom"
                      className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      Nom *
                    </label>
                    <Input 
                      placeholder="Votre nom"
                      className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    Téléphone
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+33 6 XX XX XX XX"
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    Type de projet
                  </label>
                  <select className="w-full p-3 bg-background/50 border border-sage-green/30 rounded-md text-soft-white">
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="jardin-prive">Jardin privé</option>
                    <option value="terrasse">Terrasse et patio</option>
                    <option value="commercial">Espace commercial</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    Budget estimé
                  </label>
                  <select className="w-full p-3 bg-background/50 border border-sage-green/30 rounded-md text-soft-white">
                    <option value="">Sélectionnez un budget</option>
                    <option value="20-50k">20 000 - 50 000 €</option>
                    <option value="50-100k">50 000 - 100 000 €</option>
                    <option value="100-250k">100 000 - 250 000 €</option>
                    <option value="250k+">Plus de 250 000 €</option>
                  </select>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    Décrivez votre projet *
                  </label>
                  <Textarea 
                    placeholder="Partagez votre vision, vos besoins spécifiques, la superficie de votre espace..."
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50 min-h-[120px]"
                  />
                </div>

                <Button variant="luxury" size="xl" className="w-full font-inter font-medium">
                  Envoyer ma demande
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-6">
                  Nos Coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">📍</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">Showroom Principal</h4>
                      <p className="font-inter text-soft-white/70">
                        123 Boulevard de la Croisette<br />
                        06400 Cannes, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">📞</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">Téléphone</h4>
                      <p className="font-inter text-soft-white/70">+33 4 93 XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">✉️</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">Email</h4>
                      <p className="font-inter text-soft-white/70">contact@imperium-hortis.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">🕒</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">Horaires</h4>
                      <p className="font-inter text-soft-white/70">
                        Lun - Ven: 9h00 - 18h00<br />
                        Sam: 9h00 - 17h00<br />
                        Dim: Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-6">
                  Zones d'Intervention
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Cannes", "Monaco", "Nice", "Antibes",
                    "Saint-Tropez", "Menton", "Grasse", "Mougins"
                  ].map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <span className="text-sage-green">•</span>
                      <span className="font-inter text-soft-white/80">{city}</span>
                    </div>
                  ))}
                </div>
                
                <p className="font-inter text-soft-white/60 text-sm mt-4">
                  Et toute la Côte d'Azur sur demande
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">
                  Service d'Urgence
                </h3>
                <p className="font-inter text-soft-white/80 mb-4">
                  Pour les urgences paysagères (tempêtes, systèmes d'irrigation, etc.)
                </p>
                <p className="font-inter text-sage-green font-medium">
                  📱 +33 6 XX XX XX XX (24h/24)
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="minimal" size="xl" className="font-inter font-medium">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;