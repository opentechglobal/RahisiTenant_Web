import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { cryptoTheme } from "common/theme/landing";
import ResetCSS from "common/assets/css/style";
import { GlobalStyle, ContentWrapper } from "containers/Landing/crypto.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Landing/Navbar";
import Banner from "containers/Landing/BannerSection";
import BannerSlider from "containers/Landing/BannerSlider";
import Portfolios from "containers/Landing/Portfolios";
import TrustedProofSections from "containers/Landing/Features";
import Pricing from "containers/Landing/Pricing";
import FaqSection from "containers/Landing/FaqSection";
import BetaSections from "containers/Landing/BetaSection";
import Footer from "containers/Landing/Footer";

const LandingPage = () => {
  return (
    <ThemeProvider theme={cryptoTheme}>
      <Fragment>
        <Head>
          <title>RahisiTenant | Your Property Matters</title>
          <meta name="Description" content="Rahisi Tenant Property Management System" />
          <meta name="theme-color" content="#ec5555" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <BannerSlider />
          <Portfolios />
          <TrustedProofSections />
          <Pricing />
          <BetaSections />
          <FaqSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default LandingPage;
