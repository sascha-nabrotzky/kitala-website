import React, { lazy, Suspense } from "react";
import image1 from "../assets/images/Küche.jpg";
import image2 from "../assets/images/Qualitätsaspekte.jpg";
import image3 from "../assets/images/Dokumentation.jpg";
import image4 from "../assets/images/Kosten.jpg";
import Layout from "../components/Layout";

const Accordion = lazy(() => import("../components/Accordion"));
const renderLoader = () => <p>Loading ...</p>;

function Faq() {
  return (
    <Layout>
      <main>
        <h1>Fragen & Antworten</h1>

        <Suspense fallback={renderLoader()}>
          <Accordion
            image={image1}
            title="Was ist Kindertagespflege?"
            text="<p>In der Kindertagespflege werden Kinder im Alter von 0-3 Jahren  in einer kleinen Gruppe von maximal 5 Kindern in einer familiären Atmosphäre professionell betreut. Dieses zeichnet die Kindertagespflege aus. Die Kinder werden in der Regel im Haushalt der Kindertagespflegeperson oder in dafür angemieteten Räumen betreut. Jede Kindertagespflegeperson benötigt eine Pflegeerlaubnis durch das zuständige Jugendamt. Eine Kindertagespflegeperson darf mit der Pflegeerlaubnis 8 Kinder betreuen jedoch nur 5 Kinder gleichzeitig.</p>
                <p>Frühkindliche Bildung und Pädagogik ist ein fester Bestandteil der Kindertagespflege. Die Kindertagespflegepersonen begleiten die Kinder in ihrer Entwicklung. Sie planen pädagogische Angebote, fördern die Bildung und die Entwicklung der Kinder und ermöglichen ihnen eigene Erfahrungen zu sammeln.</p>
                <p>Die Kindertagespflegepersonen arbeiten eng mit dem Jugendamt und dem Sozialen Dienst der katholischen Frauen ( SkF Ibbenbüren ) zusammen. Die Fachberatungen des SkF prüfen die Räumlichkeiten und Sicherheitsvorkehrungen in der Kindertagespflege. Jede Kindertagespflegeperson besucht regelmäßig den Erste-Hilfe-Kurs am Kind und die Hygienebelehrung durch das Gesundheitsamt. Zudem bilden sich die Kindertagespflegepersonen regelmäßig fort.</p>"
          ></Accordion>
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <Accordion
            image={image2}
            title="Qualitätsaspekte der Kindertagespflege"
            text="<h4>Kleine, überschaubare Gruppe</h4>
                <p>Die kleine Gruppengröße erleichtert es den Kindern, untereinander Beziehungen aufzubauen und soziale Erfahrungen zu machen. Gerade für Einzelkinder ist die enge geschwister ähnliche Konstellation mit den anderen Kindern besonders bereichernd.</p>

                <h4>Feste und konstante Bezugsperson</h4>
                Die Kinder haben mit der Kindertagespflegeperson eine konstante und feste Bezugsperson. Diese intensive Betreuung und enge Bindung sind wichtige Grundlagen frühkindlicher Bildungs- und Entwicklungsprozesse. Die enge Bindung zur Bezugsperson gibt den Kindern Sicherheit und Orientierung.</p>
                
                <h4>Individuelle Betreuung</h4>
                <p>Die Kindertagespflegeperson kann individuell auf das jeweilige Kind eingehen und seine Entwicklung begleiten. Das betrifft nicht nur die Betreuungszeiten, sondern natürlich auch Förderangebote. Aber auch auf Unverträglichkeiten, Allergien, religiöse Besonderheiten und vieles mehr kann sie leichter Rücksicht nehmen. Außerdem kann sie den Tagesablauf mit allen Kindern sehr flexibel gestalten.</p> 

                <h4>Familiennahe Strukturen</h4>
                <p>Insbesondere Eltern mit kleinen Kindern legen Wert auf familiennahe Strukturen, kleine Kindergruppen und feste Bezugspersonen - genau das kann die Kindertagespflege besonders gut bieten.</p>

                <h4>Flexible Betreuungszeiten</h4>
                <p>Kindertagespflegepersonen können nicht nur flexibel auf die Bedürfnisse der Kinder eingehen, oft sind sie auch flexibler, wenn Eltern ungewöhnliche oder wechselnde Arbeitszeiten haben oder der Familienalltag kurzfristig mehr Betreuung notwendig macht.</p>
                <h4>Vielfältige Betreuungslösungen</h4>
                <p>Die Kindertagespflege bietet vielfältige Betreuungslösungen: Ob im Haushalt der Kindertagespflegeperson oder in angemieteten Räumen, ob von einer Betreuungsperson allein oder in einer Großtagespflege - es gibt viele verschiedene Möglichkeiten, ihr  Kind gut betreuen zu lassen. Häufig kommen die Kinder dadurch auch einen guten Einblick in den täglichen Haushaltsablauf.</p>
                <h4>Kein Wechsel</h4>
                <p>Die Kinder bei der Kindertagespflegeperson haben nicht nur eine feste Bezugsperson, sondern müssen auch nicht Gruppen wechseln oder sich, bedingt durch Schichtwechsel oder Ausfall, an andere Ansprechpartner/innen gewöhnen.</p>
                <h4>Wenig Lärm</h4>
                <p>Bei der Betreuung  durch eine Kindertagespflegeperson sind die Kinder weniger der lauten Geräuschkulisse anderer Kindergruppen ausgesetzt, was gerade für geräuschempfindliche Kinder hilfreich sein kann.</p>
                <h4>Einbezug der Eltern</h4>
                <p>Zwar gibt es in einer Kita häufig einen Elternvertreter, bei einer Kindertagespflegeperson lässt sich aber aufgrund der wenigen Eltern oftmals schneller eine Einigung erzielen, als in einer Kita. Das schont nicht nur die Nerven der Eltern, sondern auch der Kinder.</p>
                "
          ></Accordion>
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <Accordion
            image={image3}
            title="Bildungsdokumentation/ Portfolio"
            text="<p>Die Bildungsdokumentation, auch genannt Portfolio beinhaltet für den Bildungsprozess relevante Projekte, Fotos, Bilder oder andere Produkte des Kindes. Geäußerte Gedanken u.v.m. finden ihren Platz im Portfolio des Kindes.</p>
                <p>Mit dem Führen eines Portfolios für jedes Bezugskind schärft sich der Blick sowohl für die Persönlichkeit des Kindes als auch für seine Interessen, Vorlieben und Stärken. Eine ständige Reflektion über die Bildungsprozesse eines Kindes ist so möglich. Mit dem Portfolio reflektieren Erwachsene und Kinder gemeinsam Vergangenes. Das Kind spürt die Wertschätzung für Erlebtes und Gelerntes.</p>
                <p>Das Portfolio dient auch als Medium der Erziehungspartnerschaft zwischen Eltern und der Kindertagespflegeperson.
                </p>"
          ></Accordion>
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <Accordion
            image={image4}
            title="Was kostet die Kindertagespflege?"
            text="<p>Der Kostenbeitrag errechnet sich nach dem gemeinsamen Jahresbruttoeinkommen und ist mit dem Kostenbeitrag im Kindergarten identisch. Auch für die Kindertagespflege gilt der Freibetrag für die Betreuung eines Geschwisterkindes. Die Elternbeitragstabelle finden sie in unserem Download-Bereich.
                </p>"
          ></Accordion>
        </Suspense>
      </main>
    </Layout>
  );
}

export default Faq;
