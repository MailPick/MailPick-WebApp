/** @type {import('tailwindcss').Config} */

const colors = {
  blue:{  
    "50":"#F0F3FF",
    "100" : "#D0DBFF",
    "200" : "#ADC4FF",
    "300" : "#5E98FF",
    "400" : "#5E98FF",
    "500" : "#2B84FA",
    "600" : "#0070E5",
    "700" : "#005DC9",
    "800" : "#004AA6",
    "900" : "#003579"
  },
  gray:{
    "50":"#F3F3F3",
    "100":"#DDDDDD",
    "200":"#C6C6C6",
    "300": "#B0B0B0",
    "400": "#9B9B9B",
    "500": "#868686",
    "600": "#727272",
    "700": "#5E5E5E",
    "800": "#4B4B4B",
    "900": "#121212",
    "main":"#EDF1F5"
  }
}
const backgroundImage = {
  "search":"url('/src/assets/svg/Search.svg')"
}

const backgroundPosition = {
  "left-16": "left 16px center"
}

const boxShadow = {
  "card" : "0px 0px 20px 0px rgba(0, 74, 166, 0.08); "
}

const transitionProperty = {
  "width": "width",
  "background": "background",
  "min-width": "min-width",
}
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors,
      backgroundImage,
      backgroundPosition,
      boxShadow,
      transitionProperty
    }
  },
  plugins: [],
  corePlugins:{
    
  }
} 


