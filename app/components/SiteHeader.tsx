import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/seo.config";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="text-sm tracking-[0.25em] text-white">
          {SITE_NAME}
        </Link>
        <nav className="hidden flex-wrap justify-end gap-x-4 gap-y-1 text-xs text-white/70 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
