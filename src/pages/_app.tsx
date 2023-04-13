import classNames from 'classnames';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Marcellus, Montserrat } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const montserrat = Montserrat({
  subsets: ['latin'],
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
    <>
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
    </>
  );
};

export default App;
