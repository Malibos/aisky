import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za marine i nautiku u Tivtu | AI SKY",
  description:
    "Za marine, charter i premium usluge u Tivtu: AI koji prati upite, berthove i komunikaciju sa posadama i gostima.",
  path: "/crna-gora/tivat",
});

export default function TivatPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Tivat</p>
        <h1 className="text-3xl font-semibold text-white">AI za marine, jahte i Porto Montenegro</h1>
        <p>
          Tivat je nautički i avio čvor, ne klasična plažna destinacija. Upiti dolaze od skipera, broker-a, gostiju
          koji slijeću na TIV i od superyacht posada koje očekuju odgovor na engleskom u roku minuta. AI SKY ovdje
          ne trenira model na „najboljim plažama Budve“, nego na gazu, dužini vezova, cijenama struje i vode, i pravilima
          marine.
        </p>
        <h2 className="text-2xl font-medium text-white">Berth, charter, concierge</h2>
        <p>
          Marina živi od kalendara vezova. Asistent koji potvrdi slobodan berth bez sistema pravi skuplji haos od
          nejavljanja. Zato Tivat projekti kreću od toga da li postoji marina software ili Excel koji se još uvijek
          zove „istina“. Charter flota ima drugi bol: ponavljana pitanja o transferu sa aerodroma, provisioning i
          check-in protokolu. Concierge usluge (auto, restoran, heli) trebaju eskalaciju na čovjeka čim gost traži
          nešto van kataloga.
        </p>
        <p>
          Premium ton je obavezan. Isti paljavi slogan koji prolazi na Instagramu splava ne prolazi kod gosta koji
          plaća noćenje jahte. Prompt, glas i dužina rečenice su dio usluge.
        </p>
        <h2 className="text-2xl font-medium text-white">Odnos prema aerodromu i Kotoru</h2>
        <p>
          Mnogi gosti miješaju Tivat i Kotor u istoj poruci. Asistent mora da razdvoji: koliko je transfer, gdje se
          čeka, šta je u zoni Porto Montenegro a šta nije. To nije search-replace riječi „Budva“. Pogledajte i{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
            AI asistenta
          </Link>{" "}
          ako vam treba javni glasovni sloj, ili implementaciju ako marina software mora da ostane izvor istine.
        </p>
        <p>Kontakt u footeru je uvijek AI SKY, Podgorica, Crna Gora — isti NAP na cijelom sajtu.</p>
      </Article>
    </PageShell>
  );
}
