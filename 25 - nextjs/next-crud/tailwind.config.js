/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  // ],
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      ...['blue', 'green', 'gray'].flatMap(cor=> [`from-${cor}-400`, `to-${cor}-700`]),
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
