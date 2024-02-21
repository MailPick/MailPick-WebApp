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
  }
}
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors
    }
  },
  plugins: [],
  corePlugins:{
    
  }
} 


