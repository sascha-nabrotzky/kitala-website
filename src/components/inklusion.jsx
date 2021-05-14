import React from 'react';
import InklusionJSON from './json/inklusion.json';
import { Helmet } from 'react-helmet';


function Inklusion() {

  return (
  <>
    <Helmet>
          <title>Inklusion | KiTaLa e.V.</title>
          <meta name='description' content='Was Inklusion dem Verein bedeutet' />
    </Helmet>

    <main>
      <h1>Inklusion</h1>
      <h2>Interview des SKF mit unseren Tagesmüttern</h2>

      {InklusionJSON.inkulsionInterview.map ((item) => {
        return (
          <section>
            <h3>{item.inklusionFrage}</h3>
            <p><strong>{item.inklusionTagesmutter}:</strong> {item.inklusionAntwort}</p>
          </section>
        )
      })}

    </main>

  </>
  )
}

export default Inklusion;