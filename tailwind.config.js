/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateX(10px)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
        },
        "real-pulse": {
          "0%,100%": {
            transform: "scale(1.05) translateY(-10px)",
            
          },
          "50%": {
            transform: "scale(1)"
          }
        },
        nonenon: {
           from: {
               transform: "rotate(0deg)",
          },
          to: {
                transform: "rotate(360deg)",
          }
        },
        nonenon2: {
           from: {
               transform: "rotate(360deg)",
          },
          to: {
                transform: "rotate(0deg)",
          }
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-6%) rotate(-20deg)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0) rotate(-20deg)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        gorgeous: {
          from: {
            opacity:0
          },
          to: {
            opacity:"100%"
          }
        },
        bounce2: {
          "0%, 100%": {
            transform: "translateY(-6%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        bounce: "bounce 2s ease-in-out infinite",
        bounce2: "bounce2 2s ease-in-out infinite",
        nonenon: "nonenon 8s linear infinite",
        "real-pulse": "real-pulse 4s ease-in-out infinite",
        nonenon2: "nonenon 0.15s linear",
        nonenon3: "nonenon2 0.15s linear",
        gorgeous: "gorgeous 0.5s ease-in-out 1"
      },
    },
  },
  plugins: [require("daisyui")],
};
