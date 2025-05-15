module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins','sans-serif'],
      },
      fontSize:{
        '12':'12px',
        '14':'14px',
        '16':'16px',
      },
      colors:{
        primary:'#003B70',
        secondary:'#0784C9',
        black:"#000000",
        light:'#dff3f9',
        gray:{
          650:'#6A6A6A',
        },
      },

    },
  },
  plugins: [],
};