import React from 'react'
import Page from '../components/Layout/Page'
import Banner from '../sections/Banner/Banner'
import BusinessSummary from '../sections/BusinessSummary/BusinessSummary'
import Parts from '../sections/Parts/Parts'

const Home = () => {
  return (
    <Page>
      <Banner />
      <Parts />
      <BusinessSummary />
    </Page>
  )
}

export default Home