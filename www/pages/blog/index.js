import { SkipNavContent } from '@reach/skip-nav'
import { withAmp } from 'next/amp'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Screen from '../../components/screen'
import Page from '../../components/page'

import Container from '../../components/container'
import SectionHeader from '../../components/section-header'

import Preview from '../../components/blog/preview'
import { components } from '../../components/blog/post-components'

function importAll(r) {
  return r.keys().map(r)
}

const previewItems = importAll(
  require.context('../../blog', false, /\-preview\.mdx$/)
)

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date)
  const date2 = new Date(b.meta.date)
  if (date1 > date2) return -1
  if (date1 < date2) return 1
  return 0
}

const items = previewItems
  .sort(dateSortDesc)
  .map(({ default: Component, meta }, index) => {
    return (
      <Preview
        key={meta.title}
        detail={index < 5}
        prefetch={index < 3}
        {...meta}
      >
        <Component components={components} />
      </Preview>
    )
  })

export default withAmp(() => (
  <>
    <Header height={{ desktop: 64, mobile: 64 + 32 }} shadow defaultActive>
      <Navbar />
    </Header>
    <Page title="Blog | Next.js">
      <Screen offset={64 + 400}>
        <Container padding wide>
          <SectionHeader title="Blog" />
          <SkipNavContent />
          {items}
        </Container>
      </Screen>
      <Footer />
    </Page>
  </>
))
