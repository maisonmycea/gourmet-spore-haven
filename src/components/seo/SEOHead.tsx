import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({
  title = 'MYCÉA | Culture Fine du Vivant',
  description = 'Maison de culture mycélienne boréale. Champignons gourmets d\'exception cultivés avec précision dans les Laurentides.',
  image = '/og-image.jpg',
  url = 'https://www.mycea.ca',
  type = 'website'
}: SEOHeadProps) => {
  const fullTitle = title.includes('MYCÉA') ? title : `${title} | MYCÉA`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};