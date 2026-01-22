/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
	theme: {
		extend: {
			colors: {
				ivory: "#F8F5F2",
				"charcoal-gray": "#333333",
				"deep-teal": "#2C6E63",
				"gold-rich": "#CFAE6D",
				"sand-light": "#EDE3D1",
				"gray-light": "#DADADA",
				charcoal: "#1F1F1F", // Keeping some old ones just in case or for transition
				brown: "#3A2F2A",
				beige: "#F4EFEA",
				cream: "#FFFDF5",
				terracotta: "#B35A38",
				// New Theme Colors
				"theme-black": "#1A1A1A",
				"theme-gold": "#C19B76", // Adjusted for a softer gold/beige
				"theme-text": "#5A5A5A",
				"theme-off-white": "#FDFBF7",
				"burnt-orange": "#CC5500",
				gold: "#C9A46A",
				"gold-dark": "#B08C50",
				ink: "#1F1F1F",
				sand: "#F4EFEA",
				white: "#ffffff",
				surface: "#ffffff",
				"surface-muted": "#F4EFEA"
			},
			fontFamily: {
				display: ["'Playfair Display'", "serif"],
				body: ["'Lato'", "'Open Sans'", "sans-serif"],
				accent: ["'Montserrat'", "sans-serif"]
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			boxShadow: {
				soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
				hover: "0 20px 40px -10px rgba(0,0,0,0.12)",
				card: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)"
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			}
		}
	},
	plugins: []
};
