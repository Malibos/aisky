import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za firme i institucije u Podgorici | AI SKY",
  description:
    "AI SKY pomaže firmama, kancelarijama i institucijama u Podgorici da uvedu AI u dokumente, podršku i interne procese.",
  path: "/crna-gora/podgorica",
});

export default function PodgoricaPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Podgorica</p>
        <h1 className="text-3xl font-semibold text-white">Umjetna inteligencija za B2B i administraciju u Podgorici</h1>
        <p>
          Podgorica nije sezonski grad na isti način kao Budva. Ovaj ritam je kancelarijski: sastanci, akti, predračuni,
          tenderi, klijenti koji očekuju odgovor u radnom vremenu i dokument koji može da se arhivira. AI SKY ovdje
          radi sa uslužnim firmama, agencijama, računovođama i timovima koji gube sate na prepisivanju između maila,
          Worda i Excel tabele.
        </p>
        <h2 className="text-2xl font-medium text-white">Use-case koji ima smisla u glavnom gradu</h2>
        <p>
          Prvi je ulazna pošta. Sekretarica ili junior troši jutro na sortiranje: šta je hitno, šta je spam, šta treba
          direktoru. Asistent može da predloži naslov, izvuče rok i PIB, i ostavi čovjeku odluku. Drugi je interni wiki:
          procedure koje žive u glavama dvoje ljudi. Kad oni nisu tu, ostatak firme stoji. Treći je B2B kvalifikacija —
          forma na sajtu koja ne umire u inboxu, nego ide u CRM ili Telegram, sa imenom i telefonom.
        </p>
        <p>
          Institucije i veće firme pazimo drugačije: nema javnog modela koji šalje povjerljive priloge u nepoznati
          oblak bez dogovora. Tu implementacija znači jasna pravila, log i mogućnost isključivanja.
        </p>
        <h2 className="text-2xl font-medium text-white">Zašto ne kopiramo „obalni“ asistent</h2>
        <p>
          Asistent naučen na cijene noćenja i plaže ne pomaže kancelariji koja priča o PDV-u i aneksima. U Podgorici
          greška u datumu sastanka ili broju ugovora je gora od sporog odgovora. Zato baza znanja ovdje nisu foto
          galerije, nego obrasci, FAQ za klijente i interni checklist.
        </p>
        <p>
          Ako trebate glasovni sloj za sajt, i dalje može — ali ton je poslovni, ne hotelijerski. Pogledajte{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            AI implementaciju
          </Link>{" "}
          i{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
            AI asistenta
          </Link>
          . NAP u podnožju je isti na svim stranicama: AI SKY, Podgorica, Crna Gora.
        </p>
      </Article>
    </PageShell>
  );
}
