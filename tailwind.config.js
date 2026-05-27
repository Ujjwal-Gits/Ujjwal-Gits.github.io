/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      "primary-container": "#0d1c32",
      "surface-tint": "#515f78",
      "secondary": "#556067",
      "background": "#f7f9fc",
      "surface": "#f7f9fc",
      "surface-container-low": "#f2f4f7",
      "tertiary-container": "#00164e",
      "on-surface-variant": "#44474d",
      "on-surface": "#191c1e",
      "error-container": "#ffdad6",
      "surface-dim": "#d8dadd",
      "on-secondary-fixed": "#121d23",
      "on-secondary-fixed-variant": "#3e484f",
      "surface-container-lowest": "#ffffff",
      "inverse-surface": "#2d3133",
      "inverse-primary": "#b9c7e4",
      "on-tertiary-fixed": "#00164e",
      "on-primary": "#ffffff",
      "on-tertiary": "#ffffff",
      "primary-fixed-dim": "#b9c7e4",
      "on-secondary": "#ffffff",
      "inverse-on-surface": "#eff1f4",
      "on-secondary-container": "#59646c",
      "surface-variant": "#e0e3e6",
      "on-background": "#191c1e",
      "tertiary-fixed-dim": "#b6c4ff",
      "surface-bright": "#f7f9fc",
      "error": "#ba1a1a",
      "on-tertiary-fixed-variant": "#264191",
      "on-error": "#ffffff",
      "on-primary-container": "#76849f",
      "on-primary-fixed-variant": "#39475f",
      "outline-variant": "#c5c6cd",
      "surface-container-highest": "#e0e3e6",
      "on-tertiary-container": "#6780d3",
      "tertiary": "#000000",
      "secondary-container": "#d6e1ea",
      "secondary-fixed-dim": "#bdc8d1",
      "surface-container-high": "#e6e8eb",
      "secondary-fixed": "#d9e4ed",
      "primary": "#000000",
      "outline": "#75777e",
      "on-primary-fixed": "#0d1c32",
      "surface-container": "#eceef1",
      "primary-fixed": "#d6e3ff",
      "on-error-container": "#93000a",
      "tertiary-fixed": "#dce1ff"
},
      borderRadius: {
      "DEFAULT": "0px",
      "lg": "0px",
      "xl": "0px",
      "full": "9999px"
},
      fontFamily: {
      "headline": [
            "Space Grotesk"
      ],
      "body": [
            "Inter"
      ],
      "label": [
            "Inter"
      ],
      "cursive": [
            "Playfair Display",
            "serif"
      ]
}
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // avoid conflicts
    }),
    require('@tailwindcss/typography'),
  ],
};
