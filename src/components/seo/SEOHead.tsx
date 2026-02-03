import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOHead = ({
  title = 'Spores Expert | Champignons Gourmets Premium',
  description = 'Culture artisanale et vente de champignons gourmets premium. Pleurotes, Crinière de Lion, Poulet des Bois. Qualité exceptionnelle, fraîcheur garantie.',
  image = '/og-image.jpg',
  url = 'https://www.sporesexpert.ca',
  type = 'website'
}: SEOHeadProps) => {
  const fullTitle = title.includes('Spores Expert') ? title : `${title} | Spores Expert`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};