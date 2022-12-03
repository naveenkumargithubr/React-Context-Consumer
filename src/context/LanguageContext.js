import React from 'react'

// here we create a Contaxt for the all child components

const LanguageContext = React.createContext({
  activeLanguage: 'TE', // here we update the values
  changeLanguage: () => {},
})

export default LanguageContext
