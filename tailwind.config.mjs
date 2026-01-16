/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
	theme: {
		extend: {
			colors: {
				charcoal: "#1F1F1F",
				brown: "#3A2F2A",
				beige: "#F4EFEA",
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
				body: ["'Montserrat'", "sans-serif"]
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
