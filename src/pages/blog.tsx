import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import socialMediaImg from "../assets/images/SocialMediaImg.jpg";

const ArtikelGemeinsam = lazy(() => import("../components/Artikel_gemeinsam"));
const RenderLoader = <p>Loading ...</p>;

// Images for Gallery loaded from JSON-Path always put in public folder

function Blog() {
  return (
    <>
      <Helmet>
        <title>Aktionen | KiTaLa e.V.</title>
        <meta name="description" content="Was im Verein so passiert" />
        <meta name="image" content={socialMediaImg} />
        <meta name="twitter:image" content={socialMediaImg} />
        <meta property="og:image" content={socialMediaImg} />
      </Helmet>

      <Layout>
        <main>
          <h1>Termine und Veranstaltungen</h1>
          <h2>Was im Verein so passiert</h2>
          <Suspense fallback={RenderLoader}>
            <ArtikelGemeinsam />
          </Suspense>
        </main>
      </Layout>
    </>
  );
}

export default Blog;
