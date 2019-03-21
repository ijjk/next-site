import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Logo from '../logo';
import Container from '../container';
import Button from '../button';
import Campaign from './campaign';

import { links } from '../../site-manifest';

export function LogoContainer () {
  return (
    <div style={{
        position: 'sticky',
        top: -5,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
     
      <amp-animation id='logoAnim' layout='nodisplay'>
        {/* eslint-disable-next-line */}
        <script type="application/json" dangerouslySetInnerHTML={{
          __html: `
            {
              "fill": "both",
              "duration": "1",
              "direction": "alternate",
              "animations": [
                {
                  "selector": ".logo-main",
                  "keyframes": [
                    { "transform": "scale(1)" },
                    { "transform": "scale(0.8)" }
                  ]
                }
              ]
            }
          `
        }} />
      </amp-animation>
      <amp-animation id='logoVAnim' layout='nodisplay'>
        {/* eslint-disable-next-line */}
        <script type="application/json" dangerouslySetInnerHTML={{
          __html: `
            {
              "fill": "both",
              "duration": "1",
              "delay": "50ms",
              "direction": "alternate",
              "animations": [
                {
                  "selector": ".logo-main .version",
                  "keyframes": [
                    { "opacity": 1 },
                    { "opacity": 0 }
                  ]
                }
              ]
            }
          `
        }} />
      </amp-animation>
      <amp-position-observer
        layout="nodisplay"
        intersection-ratios="1"
        on="scroll:logoAnim.seekTo(percent=event.percent),logoVAnim.seekTo(percent=event.percent)"
      />

      <div className='logo-main f4 fw6'>
        <Link href="/">
          <a aria-label="Next.js">
            <Logo size={80} />
          </a>
        </Link>
        <Link href="/blog/next-8">
          <a className="version no-tap-highlight no-drag">8</a>
        </Link>
        <style jsx>{`
          .logo-main {
            display: flex;
            justify-content: center;
            color: #0076ff;
            width: 200px;
            margin: 140px auto -210px;
            z-index: 1000;
          }
          .logo-main .version {
            width: 0;
            // margin-left: -0.2rem;
            margin-top: 0.4rem;
            cursor: pointer;
          }
          a.version {
            color: #0076ff;
          }
          // CSS only media query for mobile
          @media screen and (max-width: 640px) {
            .logo-main {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <Container
      role="main"
      wide
      center
      overflow
      dotBackground
      minHeight={564}
      mobileStyle={'min-height: 460px;'}
      style={{
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <Container>
        <div className="intro-container">
          <style jsx>{`
            .intro-container {
              margin: 0 0 2rem 0;
              overflow: visible;
            }
            h2 {
              margin-top: 1rem;
              margin-bottom: 2rem;
            }
            .main-button {
              margin-bottom: 2rem;
            }
            .links {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .links > * {
              padding: 0 0.5rem;
            }
            .campaign {
              width: 100%;
              letter-spacing: -0.02rem;
              overflow: hidden;
              pointer-events: none;
              cursor: default;
              z-index: -1;
            }
            .f-xs-0 {
              font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
            }
            .f-xs-1 {
              font-size: 2.027rem; //.566rem;
            }
            .title-1 {
              font-size: 1.802032470703125em;
            }
            .title-2 {
              font-size: 2.887rem;
              margin-top: -4.2rem;
              margin-bottom: 0;
            }
            .campaign {
              margin: 1rem 0 1.6rem;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              .title-1 {
                font-size: 1.423828125em;
              }
              .title-2 {
                font-size: 1.802032470703125em;
                margin-top: -2.4rem;
              }
              .campaign {
                margin: 0 0 2rem;
              }
            }
          `}</style>
          {/* <LogoContainer /> */}
          <div className="campaign no-drag no-tap-highlight">
            <h1 className={classNames('title-1', 'fw6')}>
              The React Framework for
            </h1>
            <h2 className={classNames('title-2', 'fw7')}>
              <Campaign />
            </h2>
          </div>
          <div>
            <div className="main-button">
              <Button href="#showcases" invert>
                See Showcase
              </Button>
            </div>
            <div className="links">
              <Link href={links.license}>
                <a rel="noreferrer" target="_blank">
                  <span className="mute">License: MIT</span>
                </a>
              </Link>
              <div>
                <Button href="/docs">View Docs</Button>
              </div>
              <div>
                <Button href="https://github.com/zeit/next.js">GitHub</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
