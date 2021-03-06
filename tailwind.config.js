module.exports = {
  purge: {
    // enabled: true,
    // content: ['./dist/*.html'],
  },
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        gray: {
          lighter: '#5e5e5e',
          default: '#4d4d4d',
          dark: '#454545',
        },
        orange: {
          lighter: '#EC9648',
          default: '#ea8b34',
          dark: '#D27D2E',
        },
        green: '#82a84d',
      },
      borderRadius: {
        'lg': '2rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
