import Link from "next/link";
import { CITY_PAGES, NAP, SERVICE_PAGES, SITE_NAME } from "@/lib/seo.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-sm text-white/70">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-base font-medium text-white">{SITE_NAME}</p>
          <p className="mt-2">{NAP.tagline}</p>
        </div>
        <address className="not-italic">
          <p className="text-white">{NAP.name}</p>
          <p>
            {NAP.addressLocality}, {NAP.postalCode} {NAP.addressRegion}
          </p>
          <p>{NAP.addressCountryName}</p>
          <p>
            <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`mailto:${NAP.email}`}>
              {NAP.email}
            </a>
          </p>
        </address>
        <nav className="grid gap-2">
          {SERVICE_PAGES.map((page) => (
            <Link key={page.path} className="hover:text-white" href={page.path}>
              {page.heading}
            </Link>
          ))}
          {CITY_PAGES.map((page) => (
            <Link key={page.path} className="hover:text-white" href={page.path}>
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
