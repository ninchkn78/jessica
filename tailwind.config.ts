import type { Config } from "tailwindcss";

const generateFontSizeWithLineHeight = (size: number) => {
  return [`${size}rem`, { lineHeight: `${size * 1.5}rem` }];
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlight1: "var(--highlight1)",
        highlight2: "var(--highlight2)",
      },
      fontFamily: {
        
        sans: ['var(--font-open-sans)', 'sans-serif'],        // use with font-sans
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // use with font-monserrat
      },
      fontSize: {
        xs: generateFontSizeWithLineHeight(0.75),   // 0.75rem font with 1.125rem line height
        sm: generateFontSizeWithLineHeight(0.875),  // 0.875rem font with 1.3125rem line height
        base: generateFontSizeWithLineHeight(1),    // 1rem font with 1.5rem line height
        lg: generateFontSizeWithLineHeight(1.125),  // 1.125rem font with 1.6875rem line height
        xl: generateFontSizeWithLineHeight(1.25),   // 1.25rem font with 1.875rem line height
        '2xl': generateFontSizeWithLineHeight(1.5), // 1.5rem font with 2.25rem line height
        '3xl': generateFontSizeWithLineHeight(1.875), // 1.875rem font with 2.8125rem line height
        '4xl': generateFontSizeWithLineHeight(2.25),  // 2.25rem font with 3.375rem line height
        '5xl': generateFontSizeWithLineHeight(3),     // 3rem font with 4.5rem line height
        '6xl': generateFontSizeWithLineHeight(3.75),  // 3.75rem font with 5.625rem line height
      },
    },
  },
  plugins: [],
} satisfies Config;
