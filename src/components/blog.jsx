import React from 'react';
import { Helmet } from 'react-helmet';

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
        <p>Termine/Kalender</p>
        <p>Bildergalerien</p>
        <p>Blog</p>
      </main>
      </>
     
    );
  }
  
  export default Blog;