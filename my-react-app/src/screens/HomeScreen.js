import React from 'react'
import Header from '../components/Header'
import ShopSection from '../components/homeComponents/ShopSection'
import ContactInfo from './../components/homeComponents/ContactInfo'
import CallToActionSection from './../components/homeComponents/CalltoActionSection'
import Footer from './../components/Footer'
const HomeScreen = () =>{
  //xyz 
  return (
    <div>
      <Header/>
      <ShopSection/>
      <CallToActionSection/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}

export default HomeScreen