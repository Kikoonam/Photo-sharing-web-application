import React, { Fragment } from 'react';
import Header from '../Components/Layout/Header';
import Welcome from '../Components/Welcome';
import Footer from '../Components/Layout/Footer';

const HomePage = () => {
  return (
   <Fragment> 
    <Header/>
    <Welcome/>
    <Footer/>
   </Fragment>
     
  
  );
};

export default HomePage;
