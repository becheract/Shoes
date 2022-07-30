import Layout from '../components/Layout'
import type { AppProps } from 'next/app'


//for metatags,custom titles, keywords, descriptions
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
)
}

export default MyApp
