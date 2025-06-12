import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import MitgliedsantragPDF from "../assets/images/Mitgliedsantrag_interaktiv.pdf";
import MitgliedsantragFoerderPDF from "../assets/images/Mitgliedsantrag_Foerdermitglied_interaktiv.pdf";
import iconPDF from "../assets/icons/pdf.svg";
import socialMediaImg from "../assets/images/SocialMediaImg.jpg";
import downloadStyles from "../styles/download.module.css";

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

            <Layout>
                <h1>Downloads</h1>
                <h2>Wichtige Dokumente und mehr</h2>

                <a
                    href={MitgliedsantragPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Mitgliedsantrag"
                >
                    <img
                        className={downloadStyles.pdficon}
                        src={iconPDF}
                        alt="PDF Icon"
                    />{" "}
                    Mitgliedsantrag
                </a>

                <a
                    href={MitgliedsantragFoerderPDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Mitgliedsantrag Fördermitglied"
                >
                    <img
                        className={downloadStyles.pdficon}
                        src={iconPDF}
                        alt="PDF Icon"
                    />{" "}
                    Mitgliedsantrag als Fördermitglied
                </a>

                <a
                    href="https://www.kreis-steinfurt.de/kv_steinfurt/Ressourcen/Familie,%20Kinder%20&%20Jugendliche/Merkblatt%20Elternbeitr%C3%A4ge%20zur%20Kindertagesbetreuung.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Merkblatt Elternbeiträge"
                >
                    <img
                        className={downloadStyles.pdficon}
                        src={iconPDF}
                        alt="PDF Icon"
                    />{" "}
                    Merkblatt Elternbeiträge
                </a>
            </Layout>
        </>
    );
};

export default Download;
