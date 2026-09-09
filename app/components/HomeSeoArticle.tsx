import Link from "next/link";
import { CITY_PAGES, SERVICE_PAGES } from "@/lib/seo.config";

export function HomeSeoArticle() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 px-6 py-20 text-base leading-7 text-white/80">
      <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        Umjetna inteligencija i digitalna rješenja za firme u Crnoj Gori.
      </h1>
      <p>
        AI SKY je tim koji uvodi umjetnu inteligenciju u stvaran rad crnogorskih firmi. Ne prodajemo apstraktne
        prezentacije. Gradimo asistente, tokove i integracije koje odgovaraju na pozive, poruke i dokumente dok
        vaš tim radi sa gostima, klijentima ili teretom. Sjedište i prva tačka kontakta su u Dobroj Vodi, a projekti
        pokrivaju crnogorsko primorje: Bar, Budvu, Kotor, Tivat, Herceg Novi i šire.
      </p>
      <p>
        Crna Gora je malo tržište sa visokim sezonskim špicama. Hotel u Budvi za tri ljetnja mjeseca primi više
        upita nego zimi za cijelu godinu. Luka Bar živi u ritmu brodova i dokumentacije. Kancelarija u Dobroj Vodi
        mora da prati zakone, fakture i klijente koji pišu na crnogorskom, srpskom i engleskom. Zato AI ovdje nije
        „modni dodatak“, nego način da isti broj ljudi iznese veći obim posla bez gubitka tona brenda.
      </p>
      <h2 className="pt-4 text-2xl font-medium text-white">Šta radimo drugačije od generičkog chatbota</h2>
      <p>
        Mnoge firme su već probale besplatnog asistenta na sajtu i odustale jer je davao pogrešne cijene ili nije
        znao radno vrijeme. Naš pristup kreće od vaših izvora: cjenovnik, PDF ugovora, FAQ, interne procedure,
        kanal na Viberu ili email. Tek onda biramo model, glas i kanal. Ako trebate glasovnog agenta na sajtu,
        povezujemo ga sa postojećim CRM-om ili tabelom. Ako trebate tihu automatizaciju u pozadini, radimo{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-implementacija">
          AI implementaciju
        </Link>{" "}
        u softver koji već koristite.
      </p>
      <p>
        Posebno pazimo na jezik. Gost u hotelu očekuje odgovor na crnogorskom ili engleskom, ne na mješavini. B2B
        klijent u Baru očekuje precizan termin, PIB i rok, ne liriku. Asistent koji „halucinira“ cijenu noćenja
        ili broj bertha u luci skuplje košta od toga da ga uopšte nemate. Zato uvodimo granice: šta smije da kaže,
        kada predaje čovjeku, i kako se loguje razgovor.
      </p>
      <h2 className="pt-4 text-2xl font-medium text-white">Dvije jasne usluge</h2>
      <p>
        Prva je implementacija: analiza procesa, izbor modela, povezivanje sa bazom, obuka tima, mjerenje. Druga je{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/usluge/ai-asistent">
          AI asistent
        </Link>
        : glas ili tekst koji prima rezervacije, filtrira leadove i odgovara van radnog vremena. Oba proizvoda dijele
        istu disciplinu oko podataka i iste lokalne reference — Crna Gora nije isti kontekst kao veliko EU tržište.
        Nema smisla kopirati prompt iz Berlina i očekivati da razumije PDV, sezonu i način na koji se ovdje zakazuje
        sastanak.
      </p>
      <p>
        Radimo sa malim i srednjim firmama koje nemaju interni data-tim. To znači kratke cikluse, jasne vlasnike
        procesa i dokumentaciju na jeziku koji računovođa i recepcija mogu da čitaju. Ako projekat zahtijeva
        integraciju sa hotelijerskim PMS-om, ERP-om ili email sandučetom, planiramo to na početku, ne kao iznenađenje
        u trećem mjesecu.
      </p>
      <h2 className="pt-4 text-2xl font-medium text-white">Gdje nas koriste u Crnoj Gori</h2>
      <p>
        U{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/crna-gora/bar">
          Baru
        </Link>{" "}
        sjedište je u Dobroj Vodi, a fokus na kancelarijama, administraciji i luci: predračuni, upiti, status tereta.{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/crna-gora/budva">
          Budva
        </Link>{" "}
        treba brze odgovore na Booking i Instagram u julu.{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/crna-gora/kotor">
          Kotor
        </Link>{" "}
        treba višejezičnost kad kružer spusti hiljade gostiju u Stari grad.{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/crna-gora/tivat">
          Tivat
        </Link>{" "}
        živi od marine i premium gosta koji očekuje odgovor u minutama.{" "}
        <Link className="text-white underline decoration-white/30 underline-offset-4" href="/crna-gora/herceg-novi">
          Herceg Novi
        </Link>{" "}
        ima drugi ritam Boke: Igalo, granica i duži boravak, ne noćni špic Budve.
      </p>
      <p>
        Svaki od tih gradova ima drugi ritam i drugi skup grešaka koje AI ne smije da napravi. Zato ne radimo jednu
        univerzalnu stranicu sa zamijenjenim imenom grada. Za svaku lokaciju opisujemo stvarne use-case-ove: šta
        asistent smije da rezerviše, šta mora da eskalira, i koji dokumenti ulaze u bazu znanja.
      </p>
      <h2 className="pt-4 text-2xl font-medium text-white">Kako izgleda prvi korak</h2>
      <p>
        Možete odmah razgovarati sa agentom na vrhu ove stranice — to je isti glasovni sloj koji kasnije možemo
        prilagoditi vašem brendu. Ako više volite pisanu formu, pišite na kontakt email iz podnožja. U prvom razgovoru
        tražimo: koji kanal boli (telefon, chat, email), koji jezik gosti koriste, i koji sistem već imate. Od toga
        nastaje kratak plan, ne višemjesečni workshop bez isporuke.
      </p>
      <p>
        Digitalna rješenja ovdje znače i jednostavne stvari koje često fale: forma koja ne gubi lead, webhook ka
        Telegramu ili CRM-u, sitemap i stranice koje Google može da indeksira na crnogorskom. SEO i AI nisu odvojeni
        svjetovi. Ako vas gost ne nađe, asistent nema kome da odgovori. Ako vas nađe, asistent mora da zna cijenu,
        lokaciju i pravilo otkazivanja.
      </p>
      <p>
        AI SKY ostaje lokalni partner: Dobra Voda kao adresa, Crna Gora kao tržište, obala kao sezonski stres-test.
        Kad uđete u sezonu, sistem mora da izdrži. Kad sezona padne, ne smije da postane mrtav trošak. Zato mjerimo
        odgovore, predaje čovjeku i vrijeme do prve korisne akcije, ne broj „sviđanja“ na demo snimku.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        {SERVICE_PAGES.map((page) => (
          <li key={page.path}>
            <Link className="text-white underline decoration-white/30 underline-offset-4" href={page.path}>
              {page.heading}
            </Link>
          </li>
        ))}
        {CITY_PAGES.map((page) => (
          <li key={page.path}>
            <Link className="text-white underline decoration-white/30 underline-offset-4" href={page.path}>
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
