import React from 'react';
import * as downloadStyles from '../components/download.module.scss';
import MitgliedsantragPDF from '../images/Mitgliedsantrag_interaktiv.pdf';
import iconPDF from '../images/pdf.svg';
import { Helmet } from 'react-helmet';

function Download() {

    return (
      
      <>
      <Helmet>
          <title>Downloads | KiTaLa e.V.</title>
          <meta name='description' content='Wichtige Dokumente können hier heruntergeladen werden' />
      </Helmet>

      <main className={downloadStyles.downMain}>
        <h1>Downloads</h1>
        <h2>Wichtige Dokumente und mehr</h2>
        <a href={MitgliedsantragPDF} target="_blank" rel="noopener noreferrer">
          <img className={downloadStyles.pdficon} src={iconPDF} alt="PDF Icon" /> Mitgliedsantrag
        </a>
        <a href='https://www.kreis-steinfurt.de/kv_steinfurt/Ressourcen/Familie,%20Kinder%20&%20Jugendliche/Elternbeitr%C3%A4ge%20f%C3%BCr%20das%20aktuelle%20Kindergartenjahr.pdf' target="_blank" rel="noopener noreferrer">
          <img className={downloadStyles.pdficon} src={iconPDF} alt="PDF Icon" /> Elternbeiträge
        </a>
      </main>
      </>
     
    );
  }
  
  export default Download;