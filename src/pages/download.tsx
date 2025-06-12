import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import DownloadCard from "../components/DownloadCard";
import MitgliedsantragPDF from "../assets/images/Mitgliedsantrag_interaktiv.pdf";
import MitgliedsantragFoerderPDF from "../assets/images/Mitgliedsantrag_Foerdermitglied_interaktiv.pdf";
import socialMediaImg from "../assets/images/SocialMediaImg.jpg";

const Download = () => {
    return (
        <>
            <Helmet>
                <title>Downloads | KiTaLa e.V.</title>
                <meta
                    name="description"
                    content="Wichtige Dokumente können hier heruntergeladen werden"
                />
                <meta
                    name="image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta
                    name="twitter:image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta property="og:title" content="Downloads | KiTaLa e.V." />
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
                heroSrc="/images/hero.jpg"
                heroAlt="Downloads KiTaLa e.V. - Kindertagespflege Ladbergen"
                ariaLabel="Downloads KiTaLa e.V. - Kindertagespflege Ladbergen"
            >
                <h1>Downloads</h1>
                <h2>Wichtige Dokumente und mehr</h2>

                <DownloadCard
                    href={MitgliedsantragPDF}
                    label="Mitgliedsantrag"
                    aria-label="Download Mitgliedsantrag"
                />
                <DownloadCard
                    href={MitgliedsantragFoerderPDF}
                    label="Mitgliedsantrag als Fördermitglied"
                    aria-label="Download Mitgliedsantrag Fördermitglied"
                />
                <DownloadCard
                    href="https://www.kreis-steinfurt.de/kv_steinfurt/Ressourcen/Familie,%20Kinder%20&%20Jugendliche/Merkblatt%20Elternbeitr%C3%A4ge%20zur%20Kindertagesbetreuung.pdf"
                    label="Merkblatt Elternbeiträge"
                    aria-label="Download Merkblatt Elternbeiträge"
                />
            </Layout>
        </>
    );
};

export default Download;
