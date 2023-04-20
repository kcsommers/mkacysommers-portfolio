import classNames from 'classnames';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Marcellus, Montserrat } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import { TransitionProvider } from '../context/use-transition';
import '../styles/globals.scss';
import { ThemeProvider } from '../themes/use-theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});
const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the custom layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <TransitionProvider>
        <main
          className={classNames(
            montserrat.className,
            montserrat.variable,
            marcellus.variable,
            'bg-background'
          )}
        >
          {getLayout(<Component {...pageProps} />)}
        </main>
      </TransitionProvider>
    </ThemeProvider>
  );
};

export default App;
