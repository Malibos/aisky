import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za hospitality i kružere u Kotoru | AI SKY",
  description:
    "Kotor ima špiceve kada brodovi dođu u luku. AI SKY pomaže lokalnim firmama da odgovore gostima brzo, na više jezika.",
  path: "/crna-gora/kotor",
});

export default function KotorPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Kotor</p>
        <h1 className="text-3xl font-semibold text-white">AI za Stari grad, kružere i ugostiteljstvo u Kotoru</h1>
        <p>
          Kotor ima dane kad zidine progutaju hiljade gostiju sa broda i dane kad je Stari grad tih. Taj ritam nije
          hotelijerski kalendar Budve. Radnje, konobe i tour deskovi moraju za dva sata odgovoriti na pitanja o
          izletu, taksiju, bezglutenskom meniju i da li se stiglo pješice od luke. AI SKY gradi asistente koji prepoznaju
          taj špic, a ne opšti „travel chatbot“.
        </p>
        <h2 className="text-2xl font-medium text-white">Kružer nije isti gost kao sedmični apartman</h2>
        <p>
          Gost sa kružera ima usko vrijeme, često samo kartice i engleski. Treba mu kratka, tačna informacija: koliko
          minuta do Squara, da li je objekat unutar zidina, radi li kuhinja do 15h. Gost u stone house smještaju pita
          za parking van jezgra, veš i kasni check-in poslije Lovćena. Jedan model sa istim FAQ-om će pomiješati te
          dvije publike. Zato odvajamo skripta.
        </p>
        <p>
          UNESCO status i pravila kretanja u jezgru takođe ulaze u bazu: gdje se ne može parkirati, kad je limenka
          zabranjena na terasi, šta raditi kad padne kiša i brod ostane. To nisu rečenice koje se copy-pasteuju iz
          Budve.
        </p>
        <h2 className="text-2xl font-medium text-white">Operativa malog tima</h2>
        <p>
          Mnogi kotorski biznisi su porodični. Nema smjene od deset ljudi. Asistent drži prvu liniju dok ste na pijaci
          ili u vinu. Eskalacija ide na Viber vlasnika, ne na „odjeljenje supporta“. To je dio{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            implementacije
          </Link>
          , ne kozmetika na sajtu.
        </p>
        <p>
          NAP ostaje AI SKY u Podgorici — lokalni partner, ne call centar iz inostranstva koji ne zna šta je škver.
        </p>
      </Article>
    </PageShell>
  );
}
