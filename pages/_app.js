import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { AppProvider } from '../components/context';
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout';
import { Provider } from 'next-auth/client'

function MyApp({ Component, ctx, pageProps }) {

  return (
    <><Provider session={pageProps.session}>
      <AppProvider>
        <ThemeProvider enableSystem={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppProvider>
    </Provider>
    </>)
}

export default MyApp
