import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI implementacija za firme | AI SKY Crna Gora",
  description:
    "Uvodimo umjetnu inteligenciju u postojeći softver, procese i timove firmi u Crnoj Gori — od analize do produkcije.",
  path: "/usluge/ai-implementacija",
});

export default function AiImplementacijaPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Usluge</p>
        <h1 className="text-3xl font-semibold text-white">AI implementacija u postojeće sisteme firme</h1>
        <p>
          Implementacija nije instalacija chatbota na sajt za vikend. To je uvođenje modela, pravila i integracija u
          tok koji već postoji: fakturisanje, rezervacije, podrška, magacin ili interni email. AI SKY radi to za firme
          u Crnoj Gori koje nemaju vlastiti ML tim, ali imaju stvaran zastoj — ručno prekucavanje, kasne odgovore,
          dokumente koji žive u tri foldera.
        </p>
        <h2 className="text-2xl font-medium text-white">Od čega krećemo</h2>
        <p>
          Prvo mapiramo gdje čovjek gubi vrijeme, ne gdje je AI „uzbudljiv“. U računovodstvenoj kancelariji u
          Podgorici to može biti sortiranje PDF-ova. U hotelu to može biti prepisivanje upita sa Instagrama u PMS. U
          špediciji u Baru to može biti status pošiljke koji klijent traži peti put istog dana. Svaki od tih slučajeva
          traži drugi izvor podataka i drugi prag greške.
        </p>
        <p>
          Zatim biramo da li ide glas, tekst, ili tihi worker u pozadini. Glasovni sloj ima smisla kad gost zove. Batch
          obrada ima smisla kad uveče padne sto mailova. Miješanje ta dva bez plana pravi haos u logovima i u
          odgovornosti tima.
        </p>
        <h2 className="text-2xl font-medium text-white">Integracija, ne izolovana demo kutija</h2>
        <p>
          Model koji ne vidi vaš cjenovnik će izmisliti cijenu. Zato implementacija uključuje povezivanje sa tabelom,
          API-jem, folderom ugovora ili helpdesk redom. Radimo ograničenja: asistent ne smije da obeća popust koji
          politika ne predviđa. Ako ne zna, predaje čovjeku. To je dosadno za demo, a jedino održivo u sezoni.
        </p>
        <p>
          Dokumentujemo šta je u produkciji: koji prompt, koji alat, koji webhook. Kad sezona prođe, možete isključiti
          skupe kanale a zadržati bazu znanja. To je važno za crnogorske firme čiji prihod nije ravan kroz godinu.
        </p>
        <h2 className="text-2xl font-medium text-white">Šta dobijate na kraju</h2>
        <p>
          Radi sistem, ne slajd. Tim zna kada da vjeruje izlazu, a kada da preuzme razgovor. Mjerimo vrijeme do
          odgovora, udio predaja čovjeku i greške na cijenama ili terminima. Ako trebate i javnog{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
            AI asistenta
          </Link>{" "}
          na sajtu, to je nastavak istog stacka, ne drugi projekat iz nule.
        </p>
        <p>
          Sledeći korak je kratak poziv ili poruka. Adresa i email su u podnožju svake stranice — isti NAP, da vas
          Google i klijenti nađu na jednom mjestu.
        </p>
      </Article>
    </PageShell>
  );
}
