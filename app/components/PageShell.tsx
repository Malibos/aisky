import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black px-6 pb-20 pt-24 text-white">{children}</main>
      <SiteFooter />
    </>
  );
}

export function Article({ children }: { children: React.ReactNode }) {
  return <article className="mx-auto max-w-3xl space-y-6 text-base leading-7 text-white/80">{children}</article>;
}
