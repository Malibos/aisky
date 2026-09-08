import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za luku, logistiku i trgovinu u Baru | AI SKY",
  description:
    "Bar je kapija za teret i trajekte. AI SKY uvodi asistente i automatizaciju u logistiku, carinu i B2B komunikaciju.",
  path: "/crna-gora/bar",
});

export default function BarPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Bar</p>
        <h1 className="text-3xl font-semibold text-white">AI za Luku Bar, špediciju i trgovinu</h1>
        <p>
          Bar je teret, trajekt i željeznica, ne Instagram zalazak. Upiti su o kontejneru, slobodnom skladištu, statusu
          carine i liniji za Bari. Jezik je često mješavina crnogorskog, italijanskog i engleskog. AI SKY ovdje gradi
          alate koji smanjuju telefonski ping-pong između špeditera, vozača i kancelarije, ne chatbot za plažu.
        </p>
        <h2 className="text-2xl font-medium text-white">Status pošiljke i dokumenti</h2>
        <p>
          Najskuplja greška je pogrešan status. Asistent smije da čita ono što sistem kaže, ili da kaže da ne zna.
          Ne smije da „pretpostavi“ da je kamion izašao. Zato implementacija u Baru počinje od izvora: mail špedicije,
          tabela, ili API ako postoji. PDF CMR i invoice mogu da se klasifikuju i preusmjere, ali čovjek ostaje na
          potpisu i odgovornosti prema carini.
        </p>
        <p>
          Trajektni i putnički dio luke je drugi proizvod: red vožnje, vozila, kašnjenja. To je bliže informacionom
          pultu nego logistici kontejnera. Ne spajamo ta dva bota u jedan prompt — vozač kamiona i porodica na
          odmoru ne trebaju iste odgovore.
        </p>
        <h2 className="text-2xl font-medium text-white">B2B, ne sezonski slogan</h2>
        <p>
          Relacija sa Italijom, skladišta i lokalna trgovina traže formalan ton i tačne termine. Ako trebate javnog
          asistenta na sajtu, on i dalje mora da eskalira cijene i slotove. Više o tome na{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            AI implementaciji
          </Link>
          .
        </p>
        <p>
          AI SKY ostaje sa adresom u Podgorici. Footer NAP je identičan kao na stranicama za Budvu ili Tivat, da Google
          vidi jednu firmu, ne pet izmišljenih filijala.
        </p>
      </Article>
    </PageShell>
  );
}
