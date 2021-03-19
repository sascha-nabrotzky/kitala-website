import React from 'react';
import * as homeStyles from '../components/home.module.scss';
import stepLogo from '../images/StepLogo.svg'

function Home() {

    return (
  
      <main className={homeStyles.main}>
        <h1>Kindertagespflege in Ladbergen</h1>
        <h2>Was der Verein macht</h2>
        <p>Die Kindertagespflege ist der erste offizielle Bildungsort den Ihr Kind besucht und somit ein wichtiger erster Baustein. Die ersten drei Lebensjahre sind eine besonders wichtige Zeit für die Entwicklung Eurer Kinder, da in diesem Lebensabschnitt die Grundbausteine für Lern- und Beziehungsfähigkeiten gelegt werden. Durch Ausprobieren und Nachahmen lernen sie die Welt kennen und zu begreifen. Dafür benötigen sie vor allem eine sichere Bindungsbeziehung, die ihnen Geborgenheit, Akzeptanz und Sicherheit gibt. Dieses steht für uns an erster Stelle. Auch der Zusammenschluss der Kindertagespflegepersonen als Verein ist hierfür ein wichtiger Punkt. Denn nur gemeinsam können wir viel erreichen und das Beste für unsere Schützlinge und auch für uns herausholen. Zusätzlich möchten wir auch die Zusammenarbeit mit der Gemeinde Ladbergen und dem Jugendamt weiterentwickeln und bedarfsgerecht ausbauen.</p>
        <aside>
          <a href="https://step.kreis-steinfurt.de/de/einrichtungen/liste?amt=Ladbergen&p=1" target="_blank" rel="noreferrer noopener">
            <img src={stepLogo} alt="Logo von Step Steinfurt"/>
          </a>
        </aside>
      </main>
     
    );
  }
  
  export default Home;