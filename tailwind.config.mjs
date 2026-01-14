/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
	theme: {
		extend: {
			colors: {
				ink: "#1e293b", // Slate 800 - softer black
				sand: "#fdf8f4", // Warm off-white
				white: "#ffffff",
				coral: "#fa7e61", // Bubbly orange-pink
				teal: "#0d9488", // Teal 600 - Professional yet vibrant
				gold: "#fbbf24", // Warm accent
				surface: "#ffffff",
				"surface-muted": "#f1f5f9"
			},
			fontFamily: {
				// Rounder, friendly display font
				display: ["'Outfit'", "sans-serif"],
				// Clean, legible body font
				body: ["'DM Sans'", "sans-serif"]
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
