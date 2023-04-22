import Head from 'next/head';
import { PropsWithChildren } from 'react';

type SharedHeadProps = PropsWithChildren<{
  metaTitle: string;
  metaImage: string;
  pagePath: string;
}>;

export const SharedHead = ({
  children,
  metaTitle,
  metaImage,
  pagePath,
}: SharedHeadProps) => {
  const metaDescription =
    'M Kacy Sommers. Web Developer. Javascript Professional.';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metaDescription}></meta>
      <meta name="theme-color" content="#a855f7" />
      {/* og: meta tags */}
      <meta
        property="og:url"
        content={`https://www.mkacysommers.com/${pagePath}`}
      />
      <meta property="og:site_name" content="M Kacy Sommers" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Mark Kacy Sommers",
            "jobTitle": "Web Developer",
            "telephone": "(330) 819-2592",
            "email": "kacysommers@gmail.com",
            "url": "mkacysommers.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Columbus",
              "addressRegion": "OH",
              "addressCountry": "US"
            },
            "birthDate": "03/16/1987",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Ohio State University",
              "url": "https://www.osu.edu/"
            }
          }
        `}
      </script>
      {children}
    </Head>
  );
};
