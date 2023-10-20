import { Link } from "react-router-dom";
import Blockquote from "../components/Blockquote";
import stepLogo from "../assets/images/StepLogo.svg";
import emailIcon from "../assets/images/email.svg";
import dreiKinder from "../assets/images/dreiKinder.svg";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <Layout>
      <main className={styles.homeMain}>
        <h1>KiTaLa e.V. &ndash; Kindertagespflege Ladbergen</h1>

        <img
          src={dreiKinder}
          className={styles.illustration}
          alt="Illustration dreier Kinder"
        />

        <h3>Die Wichtigkeit der Kindertagespflege</h3>
        <p>
          Die Kindertagespflege ist der erste offizielle Bildungsort den Ihr
          Kind besucht und somit ein wichtiger erster Baustein.{" "}
          <strong>Die ersten drei Lebensjahre</strong> sind eine besonders
          wichtige Zeit für die Entwicklung Eurer Kinder, da in diesem
          Lebensabschnitt die{" "}
          <strong>Grundbausteine für Lern- und Beziehungsfähigkeiten</strong>{" "}
          gelegt werden. <br /> <br />
          Durch Ausprobieren und Nachahmen lernen sie die Welt kennen und zu
          begreifen. Dafür benötigen sie vor allem eine sichere
          Bindungsbeziehung, die ihnen Geborgenheit, Akzeptanz und Sicherheit
          gibt. Dieses steht für uns an erster Stelle.
        </p>

        <Blockquote content="Geborgenheit, Akzeptanz und Sicherheit stehen für uns an erster Stelle" />

        <h3>Was machen wir als Verein?</h3>
        <p>
          Auch der Zusammenschluss der Kindertagespflegepersonen als Verein ist
          hierfür ein wichtiger Punkt. Denn nur gemeinsam können wir viel
          erreichen und das Beste für unsere Schützlinge und auch für uns
          herausholen. Zusätzlich möchten wir auch die Zusammenarbeit mit der
          Gemeinde Ladbergen und dem Jugendamt weiterentwickeln und
          bedarfsgerecht ausbauen.
          <br /> <br />
          Auch ist uns wichtig, dass sie als Eltern mehr Informationen über die
          Arbeit der Kindertagespflegepersonen durch Veranstaltungen und
          Herausgabe und Bereitstellung von Informationsmaterial bekommen.
        </p>

        <aside>
          <h3>Anmeldungen zur Kindertagespflege</h3>
          <p>
            Anmeldungen Ihrer Kinder zur Tagespflege erfolgen online über das
            Elternportal <strong>&bdquo;Step&rdquo;.</strong> <br /> <br />
            Sie können den Verein per E-Mail oder telefonisch, aber auch jedes
            Mitglied einzeln über den{" "}
            <Link to="/mitglieder">Mitgliederbereich</Link> direkt kontaktieren.
          </p>

          <div className={styles.iconWrapper}>
            <a
              href="https://step.kreis-steinfurt.de/de/einrichtungen/liste?amt=Ladbergen&p=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.homeIcon}
                src={stepLogo}
                alt="Logo von Step Steinfurt"
              />
            </a>
            <a href="mailto:kontakt@kitala-ladbergen.de">
              <img
                className={styles.homeIcon}
                src={emailIcon}
                alt="Eine E-Mail schreiben"
              />
            </a>
          </div>
        </aside>
      </main>
    </Layout>
  );
}

export default Home;
