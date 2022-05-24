import React from 'react'
import Page from '../components/Layout/Page'
import Banner from '../sections/Banner/Banner'
import BusinessSummary from '../sections/BusinessSummary/BusinessSummary'
import CallToAction from '../sections/CallToAction/CallToAction'
import Parts from '../sections/Parts/Parts'
import Reviews from '../sections/Reviews/Reviews'

const Home = () => {
  return (
    <Page>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Reviews />
      <CallToAction />
    </Page>
  )
}

export default Home