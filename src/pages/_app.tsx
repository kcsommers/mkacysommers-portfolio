import classNames from 'classnames';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Marcellus, Montserrat } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import { AssetCacheProvider } from '../context/use-asset-cache';
import { TransitionProvider } from '../context/use-transition';
import { allProjectImages } from '../projects/projects';
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

const appImages = [
  ...allProjectImages(),
  'https://res.cloudinary.com/kcsommers/image/upload/v1681933306/M%20Kacy%20Sommers/mkacysommers_logo2.png',
  'https://res.cloudinary.com/kcsommers/image/upload/v1643868947/M%20Kacy%20Sommers/mkacy-beach.jpg',
  'https://res.cloudinary.com/kcsommers/image/upload/v1674185811/M%20Kacy%20Sommers/MKacySommers-resume.png',
];

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the custom layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <AssetCacheProvider imageUrls={appImages}>
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
      </AssetCacheProvider>
    </ThemeProvider>
  );
};

export default App;
