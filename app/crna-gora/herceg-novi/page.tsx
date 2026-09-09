import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageShell } from "@/app/components/PageShell";
import { buildMetadata } from "@/lib/seo.config";

export const metadata: Metadata = buildMetadata({
  title: "AI za Boku, Igalo i smještaj u Herceg Novom | AI SKY",
  description:
    "Herceg Novi nije Budva ni Kotor: Igalo, Stari grad i gosti sa granice. AI SKY podešava asistente na taj ritam Boke.",
  path: "/crna-gora/herceg-novi",
});

export default function HercegNoviPage() {
  return (
    <PageShell>
      <Article>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Crna Gora · Herceg Novi</p>
        <h1 className="text-3xl font-semibold text-white">AI za wellness, granicu i smještaj u Herceg Novom</h1>
        <p>
          Herceg Novi stoji na ulazu u Boku, ne na Slovenskoj obali. Gosti dolaze iz Igala na terapije, iz Starog grada
          na kafu, i preko Debelog Brijega sa prtljagom i pitanjem „gdje je parking“. To nije kružerski špic Kotora i
          nije julski Inbox Budve. AI SKY ovdje trenira asistenta na duži boravak, wellness termine i mješavinu jezika
          sa granice — crnogorski, srpski, hrvatski, engleski.
        </p>
        <h2 className="text-2xl font-medium text-white">Igalo nije Stari grad</h2>
        <p>
          Institut i privatni smještaj u Igalu žive od termina, dijete i transfera. Asistent ne smije da pomiješa
          radno vrijeme banje sa noćnim izlaskom na Škveru. U Starom gradu pitanja su stepenice, bag i radno vrijeme
          konobe. Jedan FAQ za cijelu opštinu pravi lažne rezervacije. Zato odvajamo profile: wellness, apartman,
          restoran.
        </p>
        <p>
          Gost koji ulazi iz Hrvatske često pita za vinjetu, gotovinu i koliko je do Kumbora. To su lokalne rečenice,
          ne generički „travel bot za Crnu Goru“.
        </p>
        <h2 className="text-2xl font-medium text-white">Sezona bez istog noćnog pritiska</h2>
        <p>
          Avgust je i ovdje pun, ali ritam je porodični i rehabilitacioni, ne splav. Kasni odgovor i dalje gubi noćenje,
          samo je kanal drugačiji: email, Viber, forma, rjeđe Instagram u 2h. Eskalacija ide na vlasnika koji je na
          pijaci ili u Igalu, ne na hotelijerski shift-lead. To je dio{" "}
          <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
            implementacije
          </Link>
          .
        </p>
        <p>
          Kontakt u footeru je uvijek AI SKY, Dobra Voda, 85000 Bar, Crna Gora — ista adresa kao na stranicama za Bar i
          Tivat, da Google vidi jednu firmu na primorju.
        </p>
      </Article>
    </PageShell>
  );
}
