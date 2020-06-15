import React from 'react';
import HeaderApp from './header/HeaderApp';
import MainContent from './maincontent/MainContent';
import FooterApp from './footer/FooterApp';

class App extends React.Component {
  
  render(){
      return (
      <>
          <HeaderApp />
          <MainContent />
          <FooterApp />
      </>
    );
}
}

export default App; 
