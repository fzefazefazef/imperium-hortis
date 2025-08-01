import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cormorant': ['Cormorant Garamond', 'serif'],
				'source': ['Source Sans Pro', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Couleurs Empire Romain Lumineux
				'imperial-gold': 'hsl(var(--imperial-gold))',
				'roman-amber': 'hsl(var(--roman-amber))',
				'bronze-light': 'hsl(var(--bronze-light))',
				'copper-bright': 'hsl(var(--copper-bright))',
				'gold-pale': 'hsl(var(--gold-pale))',
				'amber-cream': 'hsl(var(--amber-cream))',
				'ivory-warm': 'hsl(var(--ivory-warm))',
				'brass-bright': 'hsl(var(--brass-bright))',
				
				// Couleurs complémentaires lumineuses
				'marble-white': 'hsl(var(--marble-white))',
				'cream-gold': 'hsl(var(--cream-gold))',
				'champagne': 'hsl(var(--champagne))',
				
				// Compatibilité (anciens noms)
				'whisper-gold': 'hsl(var(--imperial-gold))',
				'sage-green': 'hsl(var(--imperial-gold))',
				'soft-white': 'hsl(var(--ivory-warm))',
				'deep-charcoal': 'hsl(var(--cream-gold))',
				'midnight-blue': 'hsl(var(--champagne))'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-imperial': 'var(--gradient-imperial)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-bronze': 'var(--gradient-bronze)',
				'gradient-royal': 'var(--gradient-royal)',
				// Compatibilité
				'gradient-accent': 'var(--gradient-imperial)',
				'gradient-luxury': 'var(--gradient-gold)'
			},
			boxShadow: {
				'luxury': 'var(--shadow-luxury)',
				'glow': 'var(--shadow-glow)',
				'imperial': 'var(--shadow-imperial)',
				'bronze': 'var(--shadow-bronze)',
				// Compatibilité
				'elegant': 'var(--shadow-imperial)',
				'whisper': 'var(--shadow-bronze)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'cinematic': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'imperial': 'cubic-bezier(0.165, 0.84, 0.44, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-slow': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 40px hsl(45 85% 65% / 0.25), 0 0 80px hsl(40 75% 60% / 0.15)' 
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(45 85% 65% / 0.4), 0 0 120px hsl(40 75% 60% / 0.25)' 
					}
				},
				'imperial-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(45 85% 65% / 0.3), 0 0 60px hsl(40 75% 60% / 0.2)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 50px hsl(45 85% 65% / 0.5), 0 0 100px hsl(40 75% 60% / 0.3)',
						transform: 'scale(1.02)'
					}
				},
				'whisper-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'translateY(-4px) scale(1.01)',
						filter: 'brightness(1.02)'
					}
				},
				'subtle-shimmer': {
					'0%': { 
						opacity: '0.8',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.005)'
					},
					'100%': { 
						opacity: '0.8',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s cubic-bezier(0.23, 1, 0.32, 1)',
				'fade-in-slow': 'fade-in-slow 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'imperial-glow': 'imperial-glow 6s ease-in-out infinite',
				'whisper-float': 'whisper-float 8s ease-in-out infinite',
				'subtle-shimmer': 'subtle-shimmer 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
