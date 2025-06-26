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
import ChildminderImg from "../assets/images/Tagesmuetter_Gruppe.webp";
import ChildminderImgSmall from "../assets/images/Tagesmuetter_Gruppe_Klein.webp";
import styles from "../styles/mitglieder.module.css";
import Layout from "../components/Layout";

const MemberCard = lazy(() => import("../components/MemberCard")); //Daten werden mit React.lazy() bei Bedarf als const nachgeladen, Suspense als Fallback
const renderLoader = () => <p>Loading ...</p>;

const Members = () => {
    return (
        <>
            <Helmet>
                <title>Mitglieder | KiTaLa e.V.</title>
                <meta
                    name="description"
                    content="Die Members von KiTaLa e.V. stellen sind vor"
                />
                <meta
                    name="image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta
                    name="twitter:image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta property="og:position" content="Members | KiTaLa e.V." />
                <meta
                    property="og:image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta
                    property="og:description"
                    content="Gemeinsam sind wir stärker! Zusammenschluss der Tagesmütter in Ladbergen für Öffentlichkeitsarbeit und Kooperation"
                />
            </Helmet>

            <Layout
                heroSrcBig={ChildminderImg}
                heroSrcSmall={ChildminderImgSmall}
                heroAlt=""
                heroTitle="Mitglieder"
            >
                <div>
                    <h1>Gesichter des Vertrauens</h1>
                    <h2>
                        Hier finden Sie alle Ansprechpartnerinnen unseres
                        Vereins – persönlich, erreichbar und mit ganz viel Herz
                        für Kinder.
                    </h2>
                    <p>
                        Unser Verein lebt von den Menschen, die sich Tag für Tag
                        mit viel Engagement, Fürsorge und Fachwissen für das
                        Wohl der Kinder einsetzen. Ob im Vorstand oder als
                        aktive Tagespflegeperson – jede Einzelne bringt
                        Persönlichkeit, Erfahrung und Herzblut mit ein. Lernen
                        Sie uns kennen – wir freuen uns darauf, Sie und Ihr Kind
                        zu begleiten.
                    </p>
                </div>

                <section className={styles.mitgliederWrapper}>
                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            position="1. Vorsitzende"
                            name="Ramona Hüwelmann"
                            organisation="&bdquo;Zwergenland&rdquo;"
                            address="Westerweg 29"
                            phone="+49 5485 2261"
                            imgSrc={HuewelmannImg}
                            imgAlt="Profilbild von Ramona Hüwelmann"
                            website="zwergenlandladbergen.de"
                        />
                    </Suspense>
                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            position="2. Vorsitzende"
                            name="Tatjana Nabrotzky"
                            organisation="Großtagespflege &bdquo;Waldschnecken&rdquo;"
                            address="Auf Stieneckers 52"
                            phone="+49 176 43848013"
                            imgSrc={NabrotzkyImg}
                            imgAlt="Profilbild von Tatjana Nabrotzky"
                            website="waldschnecken-ladbergen.de"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            position="Kassenwart"
                            name="Oksana Welk"
                            organisation="Großtagespflege &bdquo;Waldschnecken&rdquo;"
                            address="Auf Stieneckers 52"
                            phone="+49 162 1366853"
                            imgSrc={WelkImg}
                            imgAlt="Profilbild von Oksana Welk"
                            website="waldschnecken-ladbergen.de"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            position="Schriftführerin"
                            name="Daniela Richter"
                            organisation="&bdquo;Bienenkörbchen&rdquo;"
                            address="Kramerstraße 11"
                            phone="+49 5485 9539827"
                            imgSrc={RichterImg}
                            imgAlt="Profilbild von Daniela Richter"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Stephanie Olesch"
                            organisation="&bdquo;Schatzkiste&rdquo;"
                            address="Sandkamp 1b"
                            phone="+49 5485 1406"
                            imgSrc={OeleschImg}
                            imgAlt="Foto von Stephanie Olesch"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Saskia Schröerlücke"
                            organisation="&bdquo;Marienkäfer&rdquo;"
                            address="Auf Stieneckers 58"
                            phone="+49 5485 833560"
                            phone2="+49 176 92255280"
                            imgSrc={SchroerlueckeImg}
                            imgAlt="Foto von Saskia Schröerlücke"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Anne Lindemann"
                            organisation="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
                            address="Im Alpenbrock 5"
                            phone="+49 1573 4262072"
                            phone2="+49 5484 1402"
                            imgSrc={LindemannImg}
                            imgAlt="Foto von Anee Lindemann"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Birte Lutterbei"
                            organisation="Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;"
                            address="Im Alpenbrock 5"
                            phone="+49 1577 4668562"
                            phone2="+49 5485 834160"
                            imgSrc={LutterbeiImg}
                            imgAlt="Foto von Birte Lutterbei"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Melanie Tuschewitzki"
                            organisation="&bdquo;Die kleinen Raupen&rdquo;"
                            address="Stieneckers Esch 20"
                            phone="+49 5485 8334407"
                            phone2="+49 157 34236164"
                            imgSrc={TuschewitzkiImg}
                            imgAlt="Foto von Melanie Tuschewitzki"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Marina Koch"
                            organisation="&bdquo;Die Kichererbsen&rdquo;"
                            address="Stieneckers Esch 40"
                            phone="+49 1575 6287339"
                            imgSrc={KochImg}
                            imgAlt="Foto von Marina Koch"
                        />
                    </Suspense>

                    <Suspense fallback={renderLoader()}>
                        <MemberCard
                            name="Meike König"
                            organisation="&bdquo;Moorpiraten&rdquo;"
                            address="Moorstraße 40"
                            phone="+49 5484 962821"
                            imgSrc={KoenigImg}
                            imgAlt="Foto von Meike König"
                        />
                    </Suspense>
                </section>
            </Layout>
        </>
    );
};

export default Members;
