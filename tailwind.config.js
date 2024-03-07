// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     screens: {
//       530: { max: "530px" },
//     },
//     // screens: {
//     //   'tablet': '640px',
//     //   // => @media (min-width: 640px) { ... }
//     //   'laptop': '1024px',
//     //   // => @media (min-width: 1024px) { ... }
//     //   'desktop': '1280px',
//     //   // => @media (min-width: 1280px) { ... }
//     // },
//     fontFamily: {
//       ubuntu: ["Ubuntu"],
//       roboto: ["Roboto"],
//     },
//     container: {
//       center: true,
//       padding: "10px",
//       margin: "0 auto",
//     },
//     extend: {
//       gridTemplateColumns: {
//         "auto-full": "repeat(auto-fill, 390px)",
//         "auto-fill": "repeat(auto-fill, 300px)",
//       },
//     },
//   },
//   plugins: [],
// }

//2
// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            // ubuntu: ["Ubuntu", "sans-serif"],
            // roboto: ["Roboto", "sans-serif"],
            // poppins: ["Poppins", "sans-serif"],
        },
        container: {
            center: true,
            padding: "10px",
        },
        extend: {
            gridTemplateColumns: {
                gridCol: "repeat(auto-fill, 370px)",
            },
            maxWidth: {
                w: "1190px",
            },
            backgroundImage: {
                mainImage: "url('./assets/mainImage.jpg')",
            },

            // colors:{
            //   red: '#fff'
            // }
        },
        screens: {
            // 530: { max: "530px" },
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
}
