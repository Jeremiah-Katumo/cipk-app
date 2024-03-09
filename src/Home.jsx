import React from 'react';
import Header from './components/header/Header';
import Hero from './components/header/Hero';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
// import Preloader from './components/body/Preloader';
// import ScrollTop from './components/buttons/ScrollTop';
// import GlobalProvider from './context/GlobalContext';
// import Router from './Router';
// import { ErrorBoundary } from './Error';

function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Main />
        <Footer />
        {/* <Preloader /> */}
        {/* <ScrollTop /> */}
    </>
  );
}

export default Home;
