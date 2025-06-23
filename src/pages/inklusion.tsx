import React from "react";
import { Helmet } from "react-helmet-async";
import InklusionJSON from "../content/inklusion.json";
import InterviewQA from "../components/InterviewQA";
import inklusionStyles from "../styles/inklusion.module.css";
import socialMediaImg from "../assets/images/SocialMediaImg.jpg";
import Layout from "../components/Layout";

const Inklusion = () => {
    return (
        <>
            <Helmet>
                <title>Inklusion | KiTaLa e.V.</title>
                <meta
                    name="description"
                    content="Wie wir uns für Inklusion einsetzen"
                />
                <meta
                    name="image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta
                    name="twitter:image"
                    content={`https://kitala-ladbergen.de${socialMediaImg}`}
                />
                <meta property="og:title" content="Inklusion | KiTaLa e.V." />
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
                heroAlt="Inklusion KiTaLa e.V. - Kindertagespflege Ladbergen"
                ariaLabel="Inklusion KiTaLa e.V. - Kindertagespflege Ladbergen"
            >
                <h1>Inklusion</h1>
                <h2>Interview des SKF mit unseren Tagesmüttern</h2>
                <div className={inklusionStyles.imgInklusion}>
                    <img src="" alt="" />
                    <figcaption>Illustration: Sascha Nabrotzky</figcaption>
                </div>

                {InklusionJSON.inkulsionInterview.map(
                    (item: {
                        index: React.Key | null | undefined;
                        inklusionFrage: string;
                        inklusionTagesmutter: string;
                        inklusionAntwort: string;
                    }) => {
                        return (
                            <InterviewQA
                                key={item.index}
                                question={item.inklusionFrage}
                                person={item.inklusionTagesmutter}
                                answer={item.inklusionAntwort}
                            />
                        );
                    }
                )}
            </Layout>
        </>
    );
};

export default Inklusion;
