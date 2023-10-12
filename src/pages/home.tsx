import React from "react";
import homeStyles from "../styles/home.module.scss";
import Blockquote from "../components/Blockquote";
import stepLogo from "../images/StepLogo.svg";
import emailIcon from "../images/email.svg";
import socialMediaImg from "../images/SocialmediaImg.jpg";
import dreiKinder from "../images/dreiKinder.svg";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Über den Verein | KiTaLa e.V. - Kindertagespflege Ladbergen
        </title>
        <meta name="image" content={socialMediaImg} />
        <meta name="twitter:image" content={socialMediaImg} />
        <meta property="og:image" content={socialMediaImg} />
      </Helmet>

      <main className={homeStyles.homeMain}>
        <h1>KiTaLa e.V. &ndash; Kindertagespflege Ladbergen</h1>

        <img
          src={dreiKinder}
          className={homeStyles.illustration}
          alt="Illustration dreier Kinder"
        />

        <h3>Was machen wir als Verein?</h3>
        <p>
          Die Kindertagespflege ist der erste offizielle Bildungsort den Ihr
          Kind besucht und somit ein wichtiger erster Baustein. Die ersten drei
          Lebensjahre sind eine besonders wichtige Zeit für die Entwicklung
          Eurer Kinder, da in diesem Lebensabschnitt die Grundbausteine für
          Lern- und Beziehungsfähigkeiten gelegt werden. Durch Ausprobieren und
          Nachahmen lernen sie die Welt kennen und zu begreifen. Dafür benötigen
          sie vor allem eine sichere Bindungsbeziehung, die ihnen Geborgenheit,
          Akzeptanz und Sicherheit gibt. Dieses steht für uns an erster Stelle.
        </p>

        <Blockquote content="Geborgenheit, Akzeptanz und Sicherheit stehen für uns an erster Stelle" />

        <p>
          Auch der Zusammenschluss der Kindertagespflegepersonen als Verein ist
          hierfür ein wichtiger Punkt. Denn nur gemeinsam können wir viel
          erreichen und das Beste für unsere Schützlinge und auch für uns
          herausholen. Zusätzlich möchten wir auch die Zusammenarbeit mit der
          Gemeinde Ladbergen und dem Jugendamt weiterentwickeln und
          bedarfsgerecht ausbauen.
        </p>
        <p>
          Auch ist uns wichtig, dass sie als Eltern mehr Informationen über die
          Arbeit der Kindertagespflegepersonen durch Veranstaltungen und
          Herausgabe und Bereitstellung von Informationsmaterial bekommen.
        </p>

        <aside>
          <h3>Anmeldungen zur Tagespflege</h3>
          <p>
            Anmeldungen Ihrer Kinder zur Tagespflege erfolgen online über das
            Elternportal &bdquo;Step&rdquo;. Sie können uns aber auch direkt per
            E-Mail oder telefonisch kontaktieren.
          </p>

          <div className={homeStyles.iconWrapper}>
            <a
              href="https://step.kreis-steinfurt.de/de/einrichtungen/liste?amt=Ladbergen&p=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={homeStyles.homeIcon}
                src={stepLogo}
                alt="Logo von Step Steinfurt"
              />
            </a>
            {
              <a href="mailto:kontakt@kitala-ladbergen.de">
                <img
                  className={homeStyles.homeIcon}
                  src={emailIcon}
                  alt="Eine E-Mail schreiben"
                />
              </a>
            }
          </div>
        </aside>
      </main>
    </>
  );
}

export default Home;
