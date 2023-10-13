import React, { lazy, Suspense } from "react";
import Layout from "../components/Layout";

const ArtikelGemeinsam = lazy(() => import("../components/Artikel_gemeinsam"));
const RenderLoader = <p>Loading ...</p>;

// Images for Gallery loaded from JSON-Path always put in public folder

function Blog() {
  return (
    <Layout>
      <main>
        <h1>Termine / Veranstaltungen / Blog</h1>
        <h2>Was im Verein so passiert</h2>
        <Suspense fallback={RenderLoader}>
          <ArtikelGemeinsam />
        </Suspense>
      </main>
    </Layout>
  );
}

export default Blog;
