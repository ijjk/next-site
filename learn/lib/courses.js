const courses = [
  {
    id: 'basics',
    name: 'Basics',
    lessons: [
      {
        id: 'getting-started',
        name: 'Getting Started',
        steps: [
          {
            id: 'setup',
            points: 20
          },
          {
            id: '404-page',
            points: 5
          },
          {
            id: 'first-page',
            points: 20
          },
          {
            id: 'errors',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'navigate-between-pages',
        name: 'Navigate Between Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'using-link',
            points: 25
          },
          {
            id: 'client-side-history',
            points: 5
          },
          {
            id: 'adding-link-props',
            points: 15
          },
          {
            id: 'hoc',
            points: 5
          },
          {
            id: 'link-with-a-button',
            points: 20
          },
          {
            id: 'works-with-anything',
            points: 5
          },
          {
            id: 'simple-but-powerful',
            points: 5
          }
        ]
      },
      {
        id: 'using-shared-components',
        name: 'Using Shared Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'create-the-header-component',
            points: 10
          },
          {
            id: 'using-the-header-component',
            points: 25
          },
          {
            id: 'the-component-directory',
            points: 5
          },
          {
            id: 'the-layout-component',
            points: 20
          },
          {
            id: 'rendering-children-components',
            points: 5
          },
          {
            id: 'use-components',
            points: 5
          }
        ]
      },
      {
        id: 'create-dynamic-pages',
        name: 'Create Dynamic Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'adding-a-list-of-posts',
            points: 25
          },
          {
            id: 'passing-data',
            points: 20
          },
          {
            id: 'with-router',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'clean-urls-with-route-masking',
        name: 'Clean URLs with Route Masking',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'route-masking',
            points: 25
          },
          {
            id: 'history-awareness',
            points: 5
          },
          {
            id: 'reload',
            points: 25
          },
          {
            id: '404',
            points: 5
          }
        ]
      },
      {
        id: 'server-side-support-for-clean-urls',
        name: 'Server Side Support for Clean URLs',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'create-a-custom-server',
            points: 25
          },
          {
            id: 'create-our-custom-route',
            points: 30
          },
          {
            id: 'information-on-url',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'fetching-data-for-pages',
        name: 'Fetching Data for Pages',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'fetching-batman-shows',
            points: 30
          },
          {
            id: 'only-on-the-server',
            points: 5
          },
          {
            id: 'fetching-data-for-pages',
            points: 25
          },
          {
            id: 'fetch-data-in-client-side',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'styling-components',
        name: 'Styling Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'styling-our-home-page',
            points: 35
          },
          {
            id: 'styles-template-strings',
            points: 5
          },
          {
            id: 'styles-and-nested-components',
            points: 25
          },
          {
            id: 'no-effect-for-nested-components',
            points: 15
          },
          {
            id: 'global-styles',
            points: 20
          },
          {
            id: 'global-styles-work',
            points: 10
          },
          {
            id: 'what-next',
            points: 10
          }
        ]
      },
      {
        id: 'deploying-a-nextjs-app',
        name: 'Deploying a Next.js App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'build-and-start',
            points: 10
          },
          {
            id: 'run-two-instances',
            points: 25
          },
          {
            id: 'build-once-run-many-instances',
            points: 5
          },
          {
            id: 'deploying-to-zeit-now',
            points: 30
          },
          {
            id: 'zeit-now-port-443',
            points: 5
          },
          {
            id: 'build-your-app-locally',
            points: 10
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      }
    ]
  },
  {
    id: 'excel',
    name: 'Excel',
    lessons: [
      {
        id: 'static-html-export',
        name: 'Export into a Static HTML App',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'export-the-index-page',
            points: 20
          },
          {
            id: 'only-the-index-page',
            points: 5
          },
          {
            id: 'exporting-other-pages',
            points: 25
          },
          {
            id: 'no-need-to-build-always',
            points: 15
          },
          {
            id: 'post-page-is-already-there',
            points: 5
          },
          {
            id: 'deploying-the-app',
            points: 5
          },
          {
            id: 'thats-it',
            points: 5
          }
        ]
      },
      {
        id: 'lazy-loading-modules',
        name: 'Lazy Loading Modules',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'analyze',
            points: 20
          },
          {
            id: 'analyze-result',
            points: 5
          },
          {
            id: 'lazy-loading',
            points: 25
          },
          {
            id: 'its-own-bundle',
            points: 5
          },
          {
            id: 'lets-test-it',
            points: 25
          },
          {
            id: 'test-results',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'lazy-loading-components',
        name: 'Lazy Loading Components',
        steps: [
          {
            id: 'setup',
            points: 5
          },
          {
            id: 'lets-analyze',
            points: 15
          },
          {
            id: 'analyze-result',
            points: 5
          },
          {
            id: 'hello-dynamic-components',
            points: 25
          },
          {
            id: 'it-always-loads',
            points: 5
          },
          {
            id: 'load-only-if-needed',
            points: 25
          },
          {
            id: 'lazy-loading',
            points: 5
          },
          {
            id: 'finally',
            points: 5
          }
        ]
      },
      {
        id: 'amp',
        name: 'Create AMP Pages',
        steps: [
          {
            id: 'amp-only',
            points: 5
          },
          {
            id: 'hybrid-amp',
            points: 5
          }
        ]
      }
    ]
  }
]

export default courses
