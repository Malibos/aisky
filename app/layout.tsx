import type { Metadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import { GEO_META, NAP, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/seo.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Umjetna inteligencija i digitalna rješenja za Crnu Goru`,
  description: NAP.tagline,
  openGraph: {
    type: "website",
    locale: "sr_ME",
    siteName: SITE_NAME,
  },
  other: GEO_META,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE_LOCALE}>
      <body className="m-0 bg-black font-light text-white antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
