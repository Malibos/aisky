import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI asistent za korisničku podršku | AI SKY",
  description:
    "Glasovni i tekstualni AI asistent za hotele, usluge i B2B firme u Crnoj Gori. Radi 24/7 na crnogorskom, srpskom i engleskom.",
  path: "/usluge/ai-asistent",
});

export default function AiAsistentPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Usluge</p>
        <h1 className="text-3xl font-semibold text-white">AI asistent koji razgovara sa klijentima</h1>
        <p>
          AI asistent je sloj koji gost ili klijent čuje i vidi: glas na sajtu, chat, ili oba. Nije zamjena za
          recepciju u špicu, nego prva linija koja odgovara dok je vaš tim za šankom, u magacinu ili na terenu. AI SKY
          podešava asistenta na crnogorski kontekst — sezona, jezici, kratke poruke sa telefona.
        </p>
        <h2 className="text-2xl font-medium text-white">Glas, ne samo tekstualni balončić</h2>
        <p>
          Na početnoj stranici već možete razgovarati glasom. Isti princip prenosimo na vaš brend: agent koji sluša,
          govori i zna kada da prestane. To je korisno kad gost vozi prema Budvi i ne želi da kuca, ili kad klijent iz
          inostranstva zove van smjene. Asistent mora da radi u Safariju na iPhoneu, ne samo na desktop Chromeu — to
          je uslov, ne „lijepo bi bilo“.
        </p>
        <p>
          Tekstualni kanal ostaje za Viber, email i forme. Jedna baza znanja hrani oba. Ako recenzija na Googleu kaže
          da niko ne javlja poslije 22h, asistent je konkretan odgovor, ne novi vizual sajta.
        </p>
        <h2 className="text-2xl font-medium text-white">Šta asistent smije, a šta ne</h2>
        <p>
          Smije: radno vrijeme, lokacija, jezici, opšti opis usluge, prikupljanje imena i telefona. Ne smije: izmisliti
          slobodan apartman, obećati cijenu koje nema u sistemu, dati medicinski ili pravni savjet. Za hotele to znači
          vezu ka kalendaru ili jasnu rečenicu „provjeravam sa recepcijom“. Za B2B u Podgorici to znači da ne potpisuje
          rok isporuke umjesto vas.
        </p>
        <h2 className="text-2xl font-medium text-white">Kako se uklapa u implementaciju</h2>
        <p>
          Asistent bez implementacije brzo postane igračka. Ako trebate da poruka upadne u Telegram, CRM ili tabelu,
          to je{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            AI implementacija
          </Link>
          . Zajedno, to je sistem: razgovor, zapis, eskalacija. Posebno na obali, gdje jedan vikend može da donese više
          leadova nego cijeli februar.
        </p>
        <p>
          Kontakt je uvijek isti: AI SKY, Podgorica, Crna Gora, email iz podnožja. Možete početi glasom na početnoj
          stranici i kasnije preći na brendiranog agenta.
        </p>
      </Article>
    </PageShell>
  );
}
