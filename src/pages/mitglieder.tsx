import React, { lazy, Suspense } from "react";
import Mitglied from "../components/mitglied";
import styles from "../styles/mitglieder.module.scss";
import HuewelmannImg from "../images/huewelmann300px.jpg";
import NabrotzkyImg from "../images/nabrotzky300px.jpg";
import WelkImg from "../images/welk300px.jpg";
import RichterImg from "../images/richter300px.jpg";
import { Helmet } from "react-helmet";

// const Mitglied = lazy(() => import("../components/mitglied")); //Daten werden mit React.lazy() bei Bedarf als const nachgeladen, Suspense als Fallback
// const renderLoader = () => <p>Loading ...</p>;

const Mitglieder = () => {
  return (
    <>
      <Helmet>
        <title>Mitglieder | KiTaLa e.V.</title>
        <meta
          name="description"
          content="Die Mitglieder von KiTaLa e.V. stellen sind vor"
        />
      </Helmet>

      <main>
        <h1>Vorstand des Vereins</h1>
        <h2>Wir stellen uns vor</h2>
        <section className={styles.mitgliederWrapper}>
          <Mitglied
            title="1. Vorsitzende"
            name="Ramona Hüwelmann"
            kita="&bdquo;Zwergenland&rdquo;"
            adress="Westerweg 29"
            tel="+49 5485 2261"
            imgSrc={HuewelmannImg}
            imgAlt="Profilbild von Ramona Hüwelmann"
            website="zwergenlandladbergen.de"
          />

          <Mitglied
            title="2. Vorsitzende"
            name="Tatjana Nabrotzky"
            kita="Großtagespflege &bdquo;Waldschnecken&rdquo;"
            adress="Auf Stieneckers 52"
            tel="+49 176 43848013"
            imgSrc={NabrotzkyImg}
            imgAlt="Profilbild von Tatjana Nabrotzky"
            website="waldschnecken-ladbergen.de"
          />

          <Mitglied
            title="Kassenwart"
            name="Oksana Welk"
            kita="Großtagespflege &bdquo;Waldschnecken&rdquo;"
            adress="Auf Stieneckers 52"
            tel="+49 162 1366853"
            imgSrc={WelkImg}
            imgAlt="Profilbild von Oksana Welk"
            website="waldschnecken-ladbergen.de"
          />

          <Mitglied
            title="Schriftführerin"
            name="Daniela Richter"
            kita="&bdquo;Bienenkörbchen&rdquo;"
            adress="Kramerstraße 11"
            tel="+49 5485 9539827"
            imgSrc={RichterImg}
            imgAlt="Profilbild von Daniela Richter"
          />

          <Mitglied
            title="Mitglied"
            name="Stephanie Olesch"
            kita="&bdquo;Schatzkiste&rdquo;"
            adress="Sandkamp 1b"
            tel="+49 5485 1406"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Saskia Schröerlücke"
            kita="&bdquo;Marienkäfer&rdquo;"
            adress="Auf Stieneckers 58"
            tel="+49 5485 833560"
            tel2="+49 176 92255280"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Anne Lindemann"
            kita="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
            adress="Im Alpenbrock 5"
            tel="+49 1573 4262072"
            tel2="+49 5484 1402"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Birte Lutterbei"
            kita="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
            adress="Im Alpenbrock 5"
            tel="+49 1577 4668562"
            tel2="+49 5485 834160"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Melanie Tuschewitzki"
            kita="&bdquo;Die kleinen Raupen&rdquo;"
            adress="Stieneckers Esch 20"
            tel="+49 5485 8334407"
            tel2="+49 157 34236164"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Marina Koch"
            kita="&bdquo;Die Kichererbsen&rdquo;"
            adress="Stieneckers Esch 40"
            tel="+49 1575 6287339"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />

          <Mitglied
            title="Mitglied"
            name="Meike König"
            kita="&bdquo;Moorpiraten&rdquo;"
            adress="Moorstraße 40"
            tel="+49 5484 962821"
            imgSrc="https://via.placeholder.com/300"
            imgAlt="Placeholder"
          />
        </section>
      </main>
    </>
  );
};

export default Mitglieder;
