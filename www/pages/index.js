import { SkipNavContent } from '@reach/skip-nav';
import { useAmp } from 'next/amp';
import Head from 'next/head'

import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Notification from '../components/notification';

import Intro, { LogoContainer } from '../components/home/intro';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';

export default () => {
  const isAmp = useAmp();

  return (
    <>
      <Head>
        <script async custom-element="amp-position-observer" src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"/>
        <script async custom-element="amp-animation" src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"/>
      </Head>
      <Header height={32} shadow>
        <Notification
          href="/blog/next-8"
          title="Next 8 is out!"
          titleMobile="Next 8 is out!"
        >
          Next 8 is out! — Serverless mode, performance and security
          improvements and more. Monday, February 11th 2019
        </Notification>
        <Navbar hideLogo={{ desktop: true, mobile: false }} />
      </Header>
      <LogoContainer />
      <Page title="Next.js - The React Framework">
        <SocialMeta
          image="/static/twitter-cards/home.jpg"
          title="Next.js - The React Framework"
          url="https://nextjs.org"
          description="Production grade React applications that scale. The world’s leading companies use Next.js to build server-rendered applications, static websites, and more."
        />
        <SkipNavContent />
        <Intro />
        <Demo />
        <Features />
        <Customers />
        <Learn />
        <Footer />
      </Page>
    </>
  );
};
