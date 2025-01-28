/** @type {import('tailwindcss').Config} */
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
        white:"#FDF7F4",
        green:"#8EB486",
        light:"#997C70",
        dark:"#1f1b1a",
        dark2:"#352d2b",
        accent:"#ea9a06",
        grey: "#DDDDDD"
      },
      borderRadius:{
        rounded: "50%",
        r10:"10px",
        r15: "15px",
        r20: "20px"
      },
      padding:{
        lp: "50px",
        sp: "20px",
      }
    },
  },
  plugins: [],
};
