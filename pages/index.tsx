import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../interfaces'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
      <Link href="/login">Go to the login page</Link>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
