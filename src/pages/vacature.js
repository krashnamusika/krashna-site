import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const Vacature = ({ t }) => (
  <PageTemplate title="Orkestdirigent(e) gezocht voor Krashna Musika">
    <Markdown>{`
## Over Krashna Musika
Het Delfts Studenten Muziekgezelschap (D.S.M.G.) Krashna Musika is het studenten klassieke muziek gezelschap van Delft. De vereniging bestaat uit een symfonie orkest van circa 90 leden, een koor van ca. 50 leden en een kamermuziekafdeling van ca. 60 leden.

Het orkest is één van de vooraanstaande studentenorkesten die al jaren grote symfonische werken neerzet. Zo zijn recent stukken als de Tweede Symfonie van Rachmaninov, het Concert voor Orkest van Bartok en de Planets van Holst gespeeld. Ook worden er geregeld werken met een solist uitgevoerd. Het orkest streeft naar een semi-professioneel muzikaal niveau. Per jaar worden er minstens twee concertprogramma’s ingestudeerd, meestal in samenwerking met het koor waar het orkest een groot symfonisch hoofdwerk speelt onder leiding van de orkestdirigent(e) en een koorwerk in kleinere bezetting onder leiding van de koordirigent (Ruben de Grauw).

Krashna geeft meestal concerten in kerken in de regio Delft/Den Haag/Rotterdam maar speelt ook regelmatig in zalen als de Aula van de TU Delft en het Muziekgebouw aan het IJ. Daarnaast gaan het orkest en koor ongeveer elke twee jaar op tournee en spelen/zingen daar op bijzondere locaties. Zo zijn wij deze zomer naar Bratislava, Brno en Wenen geweest en hebben we twee jaar geleden een tour op zeilboten langs de waddeneilanden gedaan. De laatste 37 jaar heeft het orkest van Krashna met veel plezier onder leiding gestaan van Daan Admiraal. Na zijn overlijden in juli zoekt Krashna dus nu een nieuwe dirigent(e) voor het orkest.

## Functie-omschrijving
Krashna Musika is op zoek naar een dirigent(e) die het orkest van begin tot het eind bij een repetitieproces dirigeert. We repeteren elke week op maandagavond (van 19.30 tot 22.30 uur) en hebben minstens twee concertseries per jaar. Ook wordt er per project een repetitieweekend georganiseerd. De dirigent(e) moet zowel muzikaal als didactisch onderlegd zijn. Omdat we met allemaal amateurmuzikanten spelen is het belangrijk dat de dirigent(e) een actieve rol speelt in het proces van het instuderen van de muziek, dus ook technisch en niet alleen muzikaal. Wij streven naar een hoog muzikaal niveau maar daarnaast is het ook belangrijk dat de dirigent(e) bewust is van het studentenkarakter van het orkest. Daarnaast is een hechte samenwerking met de koordirigent Ruben de Grauw een vereiste.

Ook is de dirigent(e) deel van zowel de auditiecommissie als de programmacommissie. Dit betekent dat hij/zij bij de audities voor het orkest aanwezig is en hij/zij betrokken is bij de keuze voor nieuwe programma’s in samenwerking met de programmacommissie.

De functie is beschikbaar vanaf 11 maart wanneer we ons nieuwe project voor concerten in juni starten. De programmering voor dit project staat al vast. Aanstelling en honorering gebeuren via de TU Delft.

## Kwalificaties
- Bezit van ten minste een Bachelordiploma orkestdirectie, of een aantoonbaar vergelijkbaar niveau;
- Ervaring met het dirigeren van (amateur)symfonieorkesten op hoog niveau, op repetities en concerten;
- Brede kennis van symfonisch repertoire, met name (laat)romantische en twintigste-eeuwse muziek;
- Bewezen vaardigheden in repetitie- en projectplanning;
- Goede beheersing van de Nederlandse en/of Engelse taal;
- Ervaring in het samenwerken met solisten;
- Ervaring in het werken met de doelgroep (studenten en jongeren) is een pré.

## Wij bieden
- Een vaste plek als dirigent(e) bij een goed en enthousiast studentensymfonieorkest;
- Concerten in binnen en buitenland;
- De mogelijkheid om grote stukken uit het symfonisch repertoire uit te voeren.

## Sollicitatieproces
### In te zenden documenten
- Een motivatiebrief\
*In pdf formaat*
- Curriculum Vitae\
*In pdf formaat*
- Als mogelijk recent filmmateriaal van geleide repetities en concerten\
*Link naar online video of mp4 formaat*
- Referenties\
*In pdf formaat, met contactgegevens*

### Verloop van het sollicitatieproces
| | |
|---|---|
| 25 november | Deadline vacature |
| 3 december | Kandidaten uitgenodigd op gesprek |
| 13-16 december | Gesprekken met geselecteerde kandidaten |
| 12 of 19 januari | Proefdirecties met kleine selectie|
| 11 maart | Eerste repetitie nieuwe project |

## Contact
Voor solliciteren en verdere vragen over de sollicitatieprocedure kunt u mailen naar [sollicitaties@krashna.nl](mailto:sollicitaties@krashna.nl). Meer informatie over de vereniging is te vinden op onze website [https://www.krashna.nl](https://www.krashna.nl).
      `}</Markdown>
  </PageTemplate>
)

export default translate('translations')(Vacature)
