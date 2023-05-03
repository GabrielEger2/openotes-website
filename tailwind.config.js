/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onwhite: "#fcffff",
        onorange400: "#e47830",
        onorange: "#e16919",
        ongray: "#2f3337",
        ongreen200: "#1e550d",
        ongreen300: "#2c8013",
        ongreen400: "#3baa1a",
        ongreen500: "#4AD520",
        ongreen600: "#6edd4d",
        ongreen700: "#92e679",
        ongreen800: "#b7eea6",
        onred200: "#791414",
        onred300: "#8d1717",
        onred400: "#b61e1e",
        onred500: "#CA2121",
        onred600: "#cf3737",
        onred700: "#da6464",
        onred800: "#e59090",
        onyellow200: "#756410",
        onyellow300: "#a48c16",
        onyellow400: "#d3b41c",
        onyellow500: "#EAC81F",
        onyellow600: "#ecce35",
        onyellow700: "#f0d962",
        onyellow800: "#f5e48f",
        onblue200: "#162374",
        onblue300: "#1f30a2",
        onblue400: "#283ed1",
        onblue500: "#2C45E8",
        onblue600: "#4158ea",
        onblue700: "#6b7def",
        onblue800: "#96a2f4"
      },
      margin: {
        '1.75': '1.75rem',
      },
    },
  },
  plugins: [],
}

