import { Fragment } from 'react'

import Layout from '@/components/layout/Layout'
import { useAuthHandler } from '@/utils/auth-handler'

export default function HomePage() {
  useAuthHandler()

  return (
    <Fragment>
      <Layout></Layout>
    </Fragment>
  )
}
