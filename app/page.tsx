import type { Metadata } from "next";
import { Hero } from "@/app/components/Hero";
import { HomeSeoArticle } from "@/app/components/HomeSeoArticle";
import { SiteFooter } from "@/app/components/SiteFooter";
import { buildMetadata, SITE_NAME } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} | Umjetna inteligencija i digitalna rješenja za firme u Crnoj Gori`,
  description:
    "AI SKY uvodi umjetnu inteligenciju i digitalna rješenja za firme u Crnoj Gori: implementacija, AI asistent, Podgorica, Budva, Kotor, Tivat i Bar.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <a
        href="#sadrzaj"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Preskoči na sadržaj
      </a>
      <main>
        <Hero />
        <div id="sadrzaj" className="bg-black">
          <HomeSeoArticle />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
