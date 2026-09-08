import type { Metadata } from "next";

export const SITE_NAME = "AI SKY";
export const SITE_URL = "https://aisky.me";
export const SITE_LOCALE = "sr-Latn-ME";
export const OG_LOCALE = "sr_ME";

export const NAP = {
  name: SITE_NAME,
  legalName: "AI SKY",
  tagline: "Umjetna inteligencija i digitalna rješenja za firme u Crnoj Gori",
  email: "kontakt@aisky.me",
  streetAddress: "",
  addressLocality: "Podgorica",
  addressRegion: "Podgorica",
  postalCode: "81000",
  addressCountry: "ME",
  addressCountryName: "Crna Gora",
  geo: { latitude: 42.441, longitude: 19.2629 },
} as const;

export const GEO_META = {
  "geo.region": "ME",
  "geo.placename": "Podgorica",
  "geo.position": `${NAP.geo.latitude};${NAP.geo.longitude}`,
  ICBM: `${NAP.geo.latitude}, ${NAP.geo.longitude}`,
} as const;

export const SERVICE_PAGES = [
  {
    slug: "ai-implementacija",
    path: "/usluge/ai-implementacija",
    title: "AI implementacija za firme | AI SKY Crna Gora",
    heading: "AI implementacija u postojeće sisteme firme",
    description:
      "Uvodimo umjetnu inteligenciju u postojeći softver, procese i timove firmi u Crnoj Gori — od analize do produkcije.",
  },
  {
    slug: "ai-asistent",
    path: "/usluge/ai-asistent",
    title: "AI asistent za korisničku podršku | AI SKY",
    heading: "AI asistent koji razgovara sa klijentima",
    description:
      "Glasovni i tekstualni AI asistent za hotele, usluge i B2B firme u Crnoj Gori. Radi 24/7 na crnogorskom, srpskom i engleskom.",
  },
] as const;

export const CITY_PAGES = [
  {
    slug: "podgorica",
    path: "/crna-gora/podgorica",
    name: "Podgorica",
    title: "AI za firme i institucije u Podgorici | AI SKY",
    heading: "Umjetna inteligencija za B2B i administraciju u Podgorici",
    description:
      "AI SKY pomaže firmama, kancelarijama i institucijama u Podgorici da uvedu AI u dokumente, podršku i interne procese.",
    focus: "administracija i B2B",
  },
  {
    slug: "budva",
    path: "/crna-gora/budva",
    name: "Budva",
    title: "AI za turizam i hotele u Budvi | AI SKY",
    heading: "AI rješenja za sezonski turizam u Budvi",
    description:
      "Za hotele, apartmane i restorane u Budvi: AI asistent za rezervacije, recenzije i podršku gostima tokom sezone.",
    focus: "turizam",
  },
  {
    slug: "kotor",
    path: "/crna-gora/kotor",
    name: "Kotor",
    title: "AI za hospitality i kružere u Kotoru | AI SKY",
    heading: "AI za Stari grad, kružere i ugostiteljstvo u Kotoru",
    description:
      "Kotor ima špiceve kada brodovi dođu u luku. AI SKY pomaže lokalnim firmama da odgovore gostima brzo, na više jezika.",
    focus: "turizam i kružeri",
  },
  {
    slug: "tivat",
    path: "/crna-gora/tivat",
    name: "Tivat",
    title: "AI za marine i nautiku u Tivtu | AI SKY",
    heading: "AI za marine, jahte i Porto Montenegro",
    description:
      "Za marine, charter i premium usluge u Tivtu: AI koji prati upite, berthove i komunikaciju sa posadama i gostima.",
    focus: "marina i nautika",
  },
  {
    slug: "bar",
    path: "/crna-gora/bar",
    name: "Bar",
    title: "AI za luku, logistiku i trgovinu u Baru | AI SKY",
    heading: "AI za Luku Bar, špediciju i trgovinu",
    description:
      "Bar je kapija za teret i trajekte. AI SKY uvodi asistente i automatizaciju u logistiku, carinu i B2B komunikaciju.",
    focus: "luka i logistika",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/usluge/ai-implementacija", label: "AI implementacija" },
  { href: "/usluge/ai-asistent", label: "AI asistent" },
  { href: "/crna-gora/podgorica", label: "Podgorica" },
  { href: "/crna-gora/budva", label: "Budva" },
  { href: "/crna-gora/kotor", label: "Kotor" },
  { href: "/crna-gora/tivat", label: "Tivat" },
  { href: "/crna-gora/bar", label: "Bar" },
] as const;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      locale: OG_LOCALE,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    other: GEO_META,
  };
}
