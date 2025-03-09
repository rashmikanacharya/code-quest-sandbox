import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
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
				sans: [
					"Inter var, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
					{ fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }
				],
				serif: ["Georgia", "Times New Roman", "serif"],
				mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
				display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
				heading: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"text-gradient": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"slide-up": {
					"0%": {
						transform: "translateY(10px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"slide-down": {
					"0%": {
						transform: "translateY(-10px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"text-gradient": "text-gradient 8s ease infinite",
				"slide-up": "slide-up 0.4s ease-out",
				"slide-down": "slide-down 0.4s ease-out",
				"slide-up-slow": "slide-up 0.7s ease-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
