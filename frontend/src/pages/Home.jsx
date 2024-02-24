import React from 'react'
import Header from '../comporents/home/Header'
import ActivityCart from '../comporents/general/ActivityCart'
import PageContainerS from '../containers/PageContainers'
import HolidayCart from '../comporents/home/HolidayCart'
import Services from '../comporents/home/Services'
import Category from '../comporents/home/Category'
import NavbarBottom from '../comporents/navbar/navbarBottom'

const Home = () => {
  return (
    <div>
      <Header />
      <NavbarBottom />
      <PageContainerS>
        <HolidayCart />
        <Services />
        <Category/>
      </PageContainerS>
    </div>
  )
}

export default Home
