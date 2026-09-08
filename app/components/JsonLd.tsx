import { CITY_PAGES, NAP, SITE_NAME, SITE_URL } from "@/lib/seo.config";

type JsonLdProps = {
  extra?: Record<string, unknown>[];
};

export function JsonLd({ extra = [] }: JsonLdProps) {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: NAP.legalName,
    url: SITE_URL,
    email: NAP.email,
    areaServed: [
      { "@type": "Country", name: NAP.addressCountryName, sameAs: "https://www.wikidata.org/wiki/Q236" },
      ...CITY_PAGES.map((city) => ({
        "@type": "City",
        name: city.name,
      })),
    ],
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    email: NAP.email,
    priceRange: "$$",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: NAP.addressCountryName },
      ...CITY_PAGES.map((city) => ({ "@type": "City", name: city.name })),
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "sr-Latn-ME",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, ...extra],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
