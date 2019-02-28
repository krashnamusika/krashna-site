import React from 'react'
import DaanAdmiraalImage from '../daan-admiraal.jpg'

const InMemoriamSection = ({}) => {
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <div
        className="container d-flex flex-column align-center h-100"
        style={{
          minHeight: '100vh',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <div className="my-auto">
          <h2 className="text-center mb-3">In Memoriam: Daan Admiraal</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-10">
              <img src={DaanAdmiraalImage} className="img-fluid mb-4" />
            </div>
            <div className="col-md-8 col-12">
              <p>
                Tot ons grote verdriet is onze orkestdirigent, Daan Admiraal, op
                22 juli op 69-jarige leeftijd onverwacht in zijn geliefde
                Zwitserland overleden. Daan was 37 jaar lang dirigent van Delfts
                Studenten Muziekgezelschap Krashna Musika. Vanaf zijn aanstellen
                in 1981, toen hij, amper ouder dan sommige musici, voor koor en
                orkest kwam te staan, tot aan zijn dood, heeft hij zich
                onafgebroken ingezet om iedereen naar zijn of haar beste kunnen
                te laten presteren. Dit niet alleen met passie en vakmanschap,
                maar ook met een gezonde dosis eigenwijsheid en een soms
                onnavolgbaar gevoel voor humor. Menig repetitie heeft
                stilgelegen van het lachen omdat hij onbewust het hele orkest
                stuiptrekkingen had bezorgd, of bewust met een gevatte opmerking
                aan iedereen duidelijk maakte hoe de muziek wel zou hebben
                moeten klinken. Daan zorgde ervoor om zichzelf nooit voor het
                orkest te plaatsen. Altijd ten dienste van het geheel wist hij
                het orkest in staat te stellen de essentie van vele bekende en
                minder bekende 19de en 20ste-eeuwse werken over te brengen op
                het publiek. Alleen tijdens de naar hem vernoemde jaarlijkse
                voetbalwedstrijd tussen het koor en het orkest wist hij de
                aandacht op hemzelf te vestigen door ons vanaf de zijlijn luid
                aan te moedigen, en ons op het hart te drukken de vingers van
                enkele essentiële instrumentalisten heel te laten.
              </p>

              <p>
                Met Daan beleefde Krashna vele hoogtepunten door de jaren heen.
                Opera’s zoals François Guyon en Carmen, symfonieën van Mahler,
                de Sacre van Stravinsky. Daan leidde Krashna er feilloos door
                heen, eerst als leeftijdsgenoot, later als vaderfiguur, altijd
                als vriend. Daan hield van werken met ons, en wij hielden van
                werken met hem. Daan zal vreselijk gemist worden door ons en de
                vele anderen die hij in zijn leven geïnspireerd heeft, in onze
                muziek zal hij altijd voortleven. Voor velen waren de repetities
                op maandag het hoogtepunt van de week dus namens Krashna, in de
                woorden van Daan:
              </p>

              <p>Daan, fijne vakantie! En tot maandag!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InMemoriamSection
