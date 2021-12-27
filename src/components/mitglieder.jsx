import React, { lazy, Suspense } from "react";
import mitgliederStyles from "../components/mitglieder.module.scss";
import HuewelmannImg from "../images/huewelmann300px.jpg";
import NabrotzkyImg from "../images/nabrotzky300px.jpg";
import WelkImg from "../images/welk300px.jpg";
import RichterImg from "../images/richter300px.jpg";
import { Helmet } from "react-helmet";

const Mitglied = lazy(() => import("./mitglied")); //Daten werden mit React.lazy() bei Bedarf als const nachgeladen, Suspense als Fallback
const renderLoader = () => <p>Loading ...</p>;

function Mitglieder() {
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
        <section className={mitgliederStyles.mitgliederRow}>
          <Suspense fallback={renderLoader()}>
            <Mitglied
              title="1. Vorsitzende"
              name="Ramona Hüwelmann"
              kita="&bdquo;Zwergenland&rdquo;"
              adress="Westerweg 29"
              tel="+49 5485 2261"
              imgSrc={HuewelmannImg}
              imgAlt="Profilbild von Ramona Hüwelmann"
            />
          </Suspense>

          <Suspense fallback={renderLoader()}>
            <Mitglied
              title="2. Vorsitzende"
              name="Tatjana Nabrotzky"
              kita="&bdquo;Löwenzähnchen&rdquo;"
              adress="Koldefeld 11"
              tel="+49 5485 207979"
              imgSrc={NabrotzkyImg}
              imgAlt="Profilbild von Tatjana Nabrotzky"
            />
          </Suspense>
        </section>

        <section className={mitgliederStyles.mitgliederRow}>
          <Suspense fallback={renderLoader()}>
            <Mitglied
              title="Kassenwart"
              name="Oksana Welk"
              kita="&bdquo;Gänseblümchen&rdquo;"
              adress="Koldefeld 5"
              tel="+49 5485 834954"
              imgSrc={WelkImg}
              imgAlt="Profilbild von Oksana Welk"
            />
          </Suspense>

          <Suspense fallback={renderLoader()}>
            <Mitglied
              title="Schriftführerin"
              name="Daniela Richter"
              kita="&bdquo;Das Mäusenest&rdquo;"
              adress="Kramerstraße 11"
              tel="+49 5485 9539827"
              imgSrc={RichterImg}
              imgAlt="Profilbild von Daniela Richter"
            />
          </Suspense>
        </section>
      </main>
    </>
  );
}

export default Mitglieder;
