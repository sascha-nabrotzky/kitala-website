import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

const GalleryAktion1 = lazy(() => import('./gallery_aktion1'));
const renderLoader = () => <p>Loading ...</p>;

// Images for Gallery loaded from JSON-Path always put in public folder

function Blog() {

    return (

      <>
        <Helmet>
            <title>Termine / Veranstaltungen / Blog | KiTaLa e.V.</title>
            <meta name='description' content='Was im Verein so passiert' />
        </Helmet>
    
        <main>
          <h1>Termine / Veranstaltungen / Blog</h1>
          <h2>Was im Verein so passiert</h2>
          <h3>Aktion "Gut betreut in der Kindertagespflege"</h3>
          <Suspense fallback={renderLoader}>
            <GalleryAktion1 /> 
          </Suspense>
        </main>
      </>
     
    );
  }
  
  export default Blog;