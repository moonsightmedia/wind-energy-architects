import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow section-padding pt-24 md:pt-28 bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              to="/"
              className="text-primary hover:text-primary-dark transition-colors text-sm"
            >
              ← Zurück zur Startseite
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
            Impressum
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                GRAU Engineering GmbH<br />
                Obere Mühle 42<br />
                58644 Iserlohn<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Kontakt
              </h2>
              <p>
                E-Mail: <a href="mailto:info@grau-eng.de" className="text-primary hover:underline">info@grau-eng.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Handelsregister
              </h2>
              <p>
                Registergericht: Amtsgericht Iserlohn<br />
                Registernummer: HRB 9872
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Geschäftsführung
              </h2>
              <p>
                Geschäftsführer: Rafael Grau<br />
                Prokura: Daniel Grau
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Stammkapital
              </h2>
              <p>25.000 €</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [wird nachgereicht]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Rafael Grau<br />
                GRAU Engineering GmbH<br />
                Obere Mühle 42<br />
                58644 Iserlohn
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Haftungsausschluss
              </h2>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6 text-foreground">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverstößen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6 text-foreground">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverstößen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
