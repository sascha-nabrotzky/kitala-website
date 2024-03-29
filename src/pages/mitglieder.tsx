import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HuewelmannImg from "../assets/images/huewelmann300px.jpg";
import NabrotzkyImg from "../assets/images/nabrotzky300px.jpg";
import WelkImg from "../assets/images/welk300px.jpg";
import RichterImg from "../assets/images/richter300px.jpg";
import KochImg from "../assets/images/Koch_300px.jpg";
import KoenigImg from "../assets/images/Koenig_300px.jpg";
import LindemannImg from "../assets/images/Lindemann_300px.jpg";
import LutterbeiImg from "../assets/images/Lutterbei_300px.jpg";
import OeleschImg from "../assets/images/Olesch_300px.jpg";
import TuschewitzkiImg from "../assets/images/Tuschewitzki_300px.jpg";
import SchroerlueckeImg from "../assets/images/Schroeerluecke_300px.jpg";
import socialMediaImg from "../assets/images/SocialMediaImg.jpg";
import styles from "../styles/mitglieder.module.css";
import Layout from "../components/Layout";

const MitgliedCard = lazy(() => import("../components/MitgliedCard")); //Daten werden mit React.lazy() bei Bedarf als const nachgeladen, Suspense als Fallback
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
        <meta
          name="image"
          content={`https://kitala-ladbergen.de${socialMediaImg}`}
        />
        <meta
          name="twitter:image"
          content={`https://kitala-ladbergen.de${socialMediaImg}`}
        />
        <meta property="og:title" content="Mitglieder | KiTaLa e.V." />
        <meta
          property="og:image"
          content={`https://kitala-ladbergen.de${socialMediaImg}`}
        />
        <meta
          property="og:description"
          content="Gemeinsam sind wir stärker! Zusammenschluss der Tagesmütter in Ladbergen für Öffentlichkeitsarbeit und Kooperation"
        />
      </Helmet>

      <Layout>
        <main>
          <h1>Vorstand und Mitglieder des Vereins</h1>
          <h2>Wir stellen uns vor</h2>
          <section className={styles.mitgliederWrapper}>
            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="1. Vorsitzende"
                name="Ramona Hüwelmann"
                kita="&bdquo;Zwergenland&rdquo;"
                adress="Westerweg 29"
                tel="+49 5485 2261"
                imgSrc={HuewelmannImg}
                imgAlt="Profilbild von Ramona Hüwelmann"
                website="zwergenlandladbergen.de"
              />
            </Suspense>
            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="2. Vorsitzende"
                name="Tatjana Nabrotzky"
                kita="Großtagespflege &bdquo;Waldschnecken&rdquo;"
                adress="Auf Stieneckers 52"
                tel="+49 176 43848013"
                imgSrc={NabrotzkyImg}
                imgAlt="Profilbild von Tatjana Nabrotzky"
                website="waldschnecken-ladbergen.de"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="Kassenwart"
                name="Oksana Welk"
                kita="Großtagespflege &bdquo;Waldschnecken&rdquo;"
                adress="Auf Stieneckers 52"
                tel="+49 162 1366853"
                imgSrc={WelkImg}
                imgAlt="Profilbild von Oksana Welk"
                website="waldschnecken-ladbergen.de"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="Schriftführerin"
                name="Daniela Richter"
                kita="&bdquo;Bienenkörbchen&rdquo;"
                adress="Kramerstraße 11"
                tel="+49 5485 9539827"
                imgSrc={RichterImg}
                imgAlt="Profilbild von Daniela Richter"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Stephanie Olesch"
                kita="&bdquo;Schatzkiste&rdquo;"
                adress="Sandkamp 1b"
                tel="+49 5485 1406"
                imgSrc={OeleschImg}
                imgAlt="Foto von Stephanie Olesch"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Saskia Schröerlücke"
                kita="&bdquo;Marienkäfer&rdquo;"
                adress="Auf Stieneckers 58"
                tel="+49 5485 833560"
                tel2="+49 176 92255280"
                imgSrc={SchroerlueckeImg}
                imgAlt="Foto von Saskia Schröerlücke"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Anne Lindemann"
                kita="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
                adress="Im Alpenbrock 5"
                tel="+49 1573 4262072"
                tel2="+49 5484 1402"
                imgSrc={LindemannImg}
                imgAlt="Foto von Anee Lindemann"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Birte Lutterbei"
                kita="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
                adress="Im Alpenbrock 5"
                tel="+49 1577 4668562"
                tel2="+49 5485 834160"
                imgSrc={LutterbeiImg}
                imgAlt="Foto von Birte Lutterbei"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Melanie Tuschewitzki"
                kita="&bdquo;Die kleinen Raupen&rdquo;"
                adress="Stieneckers Esch 20"
                tel="+49 5485 8334407"
                tel2="+49 157 34236164"
                imgSrc={TuschewitzkiImg}
                imgAlt="Foto von Melanie Tuschewitzki"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Marina Koch"
                kita="&bdquo;Die Kichererbsen&rdquo;"
                adress="Stieneckers Esch 40"
                tel="+49 1575 6287339"
                imgSrc={KochImg}
                imgAlt="Foto von Marina Koch"
              />
            </Suspense>

            <Suspense fallback={renderLoader()}>
              <MitgliedCard
                title="MitgliedCard"
                name="Meike König"
                kita="&bdquo;Moorpiraten&rdquo;"
                adress="Moorstraße 40"
                tel="+49 5484 962821"
                imgSrc={KoenigImg}
                imgAlt="Foto von Meike König"
              />
            </Suspense>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Mitglieder;
