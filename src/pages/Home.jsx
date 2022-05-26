import React from "react";
import Page from "../components/Layout/Page";
import Banner from "../sections/Banner/Banner";
import BusinessSummary from "../sections/BusinessSummary/BusinessSummary";
import CallToAction from "../sections/CallToAction/CallToAction";
import Parts from "../sections/Parts/Parts";
import Reviews from "../sections/Reviews/Reviews";
import Sponsors from "../sections/Sponsor/Sponsors";

const Home = () => {
  return (
    <Page>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Sponsors />
      <Reviews />
      <CallToAction />
    </Page>
  );
};

export default Home;
