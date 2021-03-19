import React from 'react';
import * as downloadStyles from '../components/download.module.scss';
import MitgliedsantragPDF from '../images/Mitgliedsantrag_interaktiv.pdf';
import iconPDF from '../images/pdf.svg';

function Download() {

    return (
  
      <main>
        <h1>Download</h1>
        <h2>PDF-Dokumente und mehr</h2>
        <a href={MitgliedsantragPDF} target="_blank" rel="noopener noreferrer">
          <img className={downloadStyles.pdficon} src={iconPDF} alt="PDF Icon" /> Mitgliedsantrag
          </a>
      </main>
     
    );
  }
  
  export default Download;