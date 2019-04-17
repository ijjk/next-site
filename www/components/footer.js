import Link from 'next/link';

import Container from './container';
import withPure from './hoc/pure';

import { links } from '../site-manifest';

import ZEITLogo from './icons/zeit-white-full-logo';

export default withPure(() => (
  <Container wide dark>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              padding: 2rem 0 4rem;
              min-height: 400px;
            }
            a,
            p,
            .copyright {
              color: #8c8c8c;
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: #efefef;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            .row {
              align-items: flex-start;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            * + h4 {
              margin-top: 1rem;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              footer .column {
                flex: 1 1 120px;
              }
              footer .row {
                flex-direction: row;
                flex-wrap: wrap;
              }
            }
          `}
        </style>
        <div className="row f5">
          <div className="column">
            <h4 className="fw5">
              <a href="/docs">Docs</a>
            </h4>
            <p>
              <a href="/docs#setup">Setup</a>
            </p>
            <p>
              <a href="/docs#custom-configuration">Configuration</a>
            </p>
            <p>
              <a href="/docs#static-html-export">Static Export</a>
            </p>
            <p>
              <a href="/docs#recipes">Recipes</a>
            </p>
            <p>
              <a href="/docs#faq">FAQ</a>
            </p>
            <p>
              <a href="/docs#contributing">Contributing</a>
            </p>
          </div>
          <div className="column">
            <h4 className="fw5">Features</h4>
            <p>
              <a href="/features/server-side-rendering">SSR</a>
            </p>
            <p>
              <a href="/features/static-exporting">Static Exporting</a>
            </p>
            <p>
              <a href="/features/css-in-js">CSS-in-JS</a>
            </p>
            <p>
              <a href="/features/progressive-web-apps">PWA</a>
            </p>
          </div>
          <div className="column">
            <h4 className="fw5">
              <Link href="/learn">
                <a>Learn</a>
              </Link>
            </h4>
            <p>
              <Link href="/learn/basics/getting-started">
                <a>Basics</a>
              </Link>
            </p>
            <p>
              <Link href="/learn/excel/static-html-export">
                <a>Excel</a>
              </Link>
            </p>
            <h4 className="fw5">
              <Link href="/showcase">
                <a>Showcase</a>
              </Link>
            </h4>
            <h4 className="fw5">
              <a href="/blog">Blog</a>
            </h4>
          </div>
          <div className="column">
            {
              // <p>Case Studies</p>
              // <h4 className="fw5">Enterprise</h4>
              // <p>Plans</p>
            }
            <h4 className="fw5">More</h4>
            <p>
              <Link href="https://github.com/zeit/next.js">
                <a rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </Link>
            </p>
            <p>
              <Link href="https://github.com/zeit/next.js/releases">
                <a rel="noreferrer" target="_blank">
                  Releases
                </a>
              </Link>
            </p>
            <p>
              <Link href={links.spectrum}>
                <a rel="noreferrer" target="_blank">
                  Spectrum
                </a>
              </Link>
            </p>
            <p>
              <Link href="/design">
                <a>Design</a>
              </Link>
            </p>
          </div>
          <div className="column">
            <h4 className="fw5">About ZEIT</h4>
            <p>
              <Link href="https://zeit.co/oss">
                <a rel="noreferrer" target="_blank">
                  Open Source Software
                </a>
              </Link>
            </p>
            <p>
              <Link href="https://github.com/zeit">
                <a rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </Link>
            </p>
            <p>
              <Link href="https://twitter.com/zeithq">
                <a rel="noreferrer" target="_blank">
                  Twitter
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="copyright f6">
          <Link href="https://zeit.co">
            <a rel="noreferrer" target="_blank" aria-label="ZEIT">
              <ZEITLogo />
            </a>
          </Link>
          <div> Copyright © 2019 ZEIT, Inc. All rights reserved.</div>
        </div>
      </footer>
    </Container>
  </Container>
));
