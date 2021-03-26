module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'mono': ['Roboto Mono', 'serif']
      },
      colors: {
        purple: { light: '#483561', dark: '#040D3E' },
        yellow: { light: 'yellow' },
        orange: { light: '#F2994A' },
        newsLetterBackground: '#191B51',
        inputGrey: '#2E3061'
      },
      textColor: {
        'gray': '#B5B5B5', acqua: '#99EFD0'
      },
      backgroundImage: { 'newsletter': 'url("/newsletter.svg")', 'footer': 'url("/footer.svg")' }

    }
  }

}
