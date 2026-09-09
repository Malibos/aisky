import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za B2B, Luku Bar i špediciju | AI SKY",
  description:
    "Iz Dobre Vode radimo sa kancelarijama, trgovinom i Lukom Bar: dokumenti, podrška, špedicija i logistika bez izmišljenih statusa.",
  path: "/crna-gora/bar",
});

export default function BarPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Bar · Dobra Voda</p>
        <h1 className="text-3xl font-semibold text-white">Umjetna inteligencija za B2B, Luku Bar i špediciju</h1>
        <p>
          Sjedište AI SKY je u Dobroj Vodi, u opštini Bar. Ritam ovdje nije kancelarija glavnog grada ni plaža Budve.
          Istog dana stiže predračun, upit sa trajekta i status kontejnera. Asistent mora da razdvoji administraciju
          firme od operativne luke — inače pomiješa PIB i broj kontejnera u istoj rečenici.
        </p>
        <h2 className="text-2xl font-medium text-white">Kancelarija, akti, B2B</h2>
        <p>
          Lokalne uslužne firme, agencije i računovođe gube sate na prepisivanju između maila, Worda i tabele. Prvi
          use-case je ulazna pošta: šta je hitno, šta treba direktoru, koji je rok i PIB. Drugi je interni wiki —
          procedure koje žive u glavama dvoje ljudi. Treći je forma na sajtu koja ne umire u inboxu, nego ide u CRM
          ili Telegram.
        </p>
        <p>
          Povjerljivi prilozi ne idu u nepoznati oblak bez dogovora. Implementacija ovdje znači pravila, log i
          isključivanje, ne javni chatbot koji „pomaže oko ugovora“.
        </p>
        <h2 className="text-2xl font-medium text-white">Luka, špedicija, trajekt</h2>
        <p>
          Bar je i dalje teret, trajekt i željeznica. Upiti o skladištu, carini i liniji za Bari traže izvor istine,
          ne pretpostavku. Asistent smije da čita status iz sistema ili da kaže da ne zna. PDF CMR i invoice mogu da
          se klasifikuju, ali potpis ostaje na čovjeku. Putnički pult i logistika kontejnera ne spajamo u jedan prompt.
        </p>
        <h2 className="text-2xl font-medium text-white">Zašto ovo nije stranica za Budvu</h2>
        <p>
          Sezonski asistent za noćenja ne pomaže kancelariji koja priča o aneksima i slotovima u luci. Baza znanja
          ovdje su obrasci, cjenovnici usluga i statusi, ne galerija plaže. Ako trebate glasovni sloj, ton je poslovni.
          Pogledajte{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            AI implementaciju
          </Link>{" "}
          i{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
            AI asistenta
          </Link>
          . NAP u podnožju je isti na svim stranicama: AI SKY, Dobra Voda, 85000 Bar, Crna Gora.
        </p>
      </Article>
    </PageShell>
  );
}
