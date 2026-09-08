import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za turizam i hotele u Budvi | AI SKY",
  description:
    "Za hotele, apartmane i restorane u Budvi: AI asistent za rezervacije, recenzije i podršku gostima tokom sezone.",
  path: "/crna-gora/budva",
});

export default function BudvaPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Budva</p>
        <h1 className="text-3xl font-semibold text-white">AI rješenja za sezonski turizam u Budvi</h1>
        <p>
          Budva u julu ne liči na Budvu u januaru. Recepcioni šalter, Inbox Booking.com i Instagram direkt poruke
          pune se istovremeno, često na engleskom, ruskom, srpskom i crnogorskom. AI SKY ovdje ne priča o
          „digitalnoj transformaciji ministarstva“, nego o tome da gost koji piše u 23:40 dobije tačan odgovor o
          check-inu, parkingu i krevetiću za dijete — ili jasnu predaju noćnoj smjeni.
        </p>
        <h2 className="text-2xl font-medium text-white">Sezona, recenzije, no-show</h2>
        <p>
          Tipičan problem nije nedostatak sajta, nego kasni odgovor koji gura gosta kod konkurencije na Slovenskoj
          obali. Asistent može da drži FAQ: transfer iz Tivta, distanca do plaže, ljubimci, depozit. Ne smije da
          potvrdi kalendar ako PMS nije povezan — bolje reći „provjeravam slobodan termin“ nego napraviti double
          booking u augustu.
        </p>
        <p>
          Drugi sloj su recenzije i ponovljeni upiti. Ista pitanja o buci, liftu i doručku. Baza znanja se gradi iz
          stvarnih poruka, ne iz marketinškog slogana. Restoran sa live muzikom ima drugačiji skript od apartmana iznad
          Lastve.
        </p>
        <h2 className="text-2xl font-medium text-white">Šta ne radimo u Budvi</h2>
        <p>
          Ne stavljamo isti tekst kao za Kotor i samo mijenjamo ime grada. Kotor živi od kružera i Starog grada; Budva
          od duže ljetnje sezone, noćnog života i velikog broja privatnog smještaja. Zato prompt, jezici i eskalacija
          nisu isti. Ako vodite i objekt u Kotoru, to su dva profila, ne jedan.
        </p>
        <p>
          Početak je glasovni demo na početnoj ili{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
            stranica o AI asistentu
          </Link>
          . Kontakt podaci u footeru su uvijek AI SKY, Podgorica, Crna Gora.
        </p>
      </Article>
    </PageShell>
  );
}
