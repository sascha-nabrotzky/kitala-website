import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

const GalleryAktion1 = lazy(() => import("../components/Gallery_aktion1"));
const ArtikelGemeinsam = lazy(() => import("../components/Artikel_gemeinsam"));
const RenderLoader = <p>Loading ...</p>;

// Images for Gallery loaded from JSON-Path always put in public folder

function Blog() {
  return (
    <>
      <Helmet>
        <title>Termine / Veranstaltungen / Blog | KiTaLa e.V.</title>
        <meta name="description" content="Was im Verein so passiert" />
      </Helmet>

      <main>
        <h1>Termine / Veranstaltungen / Blog</h1>
        <h2>Was im Verein so passiert</h2>

        <Suspense fallback={RenderLoader}>
          <GalleryAktion1 />
        </Suspense>
        <Suspense fallback={RenderLoader}>
          <ArtikelGemeinsam />
        </Suspense>
      </main>
    </>
  );
}

export default Blog;
