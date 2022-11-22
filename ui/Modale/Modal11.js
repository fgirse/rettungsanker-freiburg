import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Iframe from 'react-iframe'
import Logo from '../icons/svg/LogoNeu'

function Modal11() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-start justify-start text-slate-200">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md px-4 py-2 text-lg font-medium text-white hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Impressum
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-slate-800/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-24 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:max-w-8xl w-full transform overflow-hidden rounded-2xl border border-gray-500 bg-slate-300 text-left align-middle shadow-xl transition-all lg:p-24">
                  <Dialog.Title
                    as="h3"
                    className="headingF py-2 text-center text-xl font-medium leading-6 text-slate-700 lg:text-9xl"
                  >
                    Impressum
                  </Dialog.Title>

                  <section className="items-between flex flex-col justify-end p-4 text-left text-sm text-gray-900 lg:mt-1 lg:text-justify lg:text-lg xl:py-2">
                    <div className="lg: mx-auto mt-3 flex  flex-col items-center justify-start md:mt-20 md:w-9/12 lg:mx-auto">
                      <Logo className="h-20 w-20 bg-red-900 p-2 lg:h-36 lg:w-[33vw]"></Logo>
                    </div>

                    <h1 className="headingB lg:headingF mx-auto text-center text-[2rem] text-white lg:text-[6rem] lg:text-gray-600"></h1>
                    <div className="impressum">
                      <h1>Impressum</h1>
                      <p>Angaben gemäß § 5 TMG</p>
                      <p>
                        Michael Schreck <br />
                        Adelhauserstrasse 7c
                        <br />
                        79098 Freiburg <br />
                      </p>
                      <p>
                        {' '}
                        <strong className="text-yellow-600">Vertreten durch: </strong>
                        <br />
                        Simon Panizzi
                        <br />
                      </p>
                      <p>
                        <strong className="text-yellow-600">Registereintrag: </strong>
                        <br />
                        Eintragung im Handelsregister.
                        <br />
                        Registergericht: Freiburg
                        <br />
                        Registernummer: 123456
                        <br />
                      </p>
                      <p>
                        <strong className="text-yellow-600">Umsatzsteuer-ID: </strong> <br />
                        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
                        1234.5678.90
                        <br />
                        <br />
                        <strong className="text-yellow-600">Wirtschafts-ID: </strong>
                        <br />
                        9876.5432.10
                        <br />
                      </p>
                      <p>
                        <strong className="text-yellow-600">Haftungsausschluss: </strong>
                        <br />
                        <br />
                        <strong className="text-yellow-600">Haftung für Inhalte</strong>
                        <br />
                        <br />
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                        keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
                        unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                        entfernen.
                        <br />
                        <br />
                        <strong className="text-yellow-600">Haftung für Links</strong>
                        <br />
                        <br />
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                        wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                        keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                        jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                        Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                        jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                        entfernen.
                        <br />
                        <br />
                        <strong className="text-yellow-600">Urheberrecht</strong>
                        <br />
                        <br />
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                        bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
                        privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                        dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                        Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                        aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                        <br />
                        <br />
                        <strong className="text-yellow-600">Datenschutz</strong>
                        <br />
                        <br />
                        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener
                        Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
                        (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt
                        dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne
                        Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
                        Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
                        Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br />
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                        Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                        angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
                        widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
                        rechtliche Schritte im Falle der unverlangten Zusendung von
                        Werbeinformationen, etwa durch Spam-Mails, vor.
                        <br />
                        <br />
                        <br />
                        <strong className="text-yellow-600">Google Analytics</strong>
                        <br />
                        <br />
                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google
                        Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien,
                        die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung
                        der Website durch Sie ermöglicht. Die durch den Cookie erzeugten
                        Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer
                        IP-Adresse) wird an einen Server von Google in den USA übertragen und dort
                        gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der
                        Website auszuwerten, um Reports über die Websiteaktivitäten für die
                        Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und
                        der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
                        Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies
                        gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
                        Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
                        Daten der Google in Verbindung bringen. Sie können die Installation der
                        Cookies durch eine entsprechende Einstellung Ihrer Browser Software
                        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich
                        nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der
                        Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
                        beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                        <br />
                        <br />
                        <strong className="text-yellow-600">Google AdSense</strong>
                        <br />
                        <br />
                        Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google
                        Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies''
                        (Textdateien), die auf Ihrem Computer gespeichert werden und die eine
                        Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense
                        verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur
                        Sammlung von Informationen. Durch die Verwendung des Web Beacons können
                        einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und
                        gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten
                        Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer
                        IP-Adresse) werden an einen Server von Google in den USA übertragen und dort
                        gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der
                        Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die
                        Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen
                        und um weitere mit der Websitenutzung und der Internetnutzung verbundene
                        Dienstleistungen zu erbringen. Auch wird Google diese Informationen
                        gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben
                        oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google
                        wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in
                        Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die
                        Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren
                        Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS
                        Internet-Explorer unter ''Extras &gt; Internetoptionen &gt; Datenschutz &gt;
                        Einstellung''; im Firefox unter ''Extras &gt; Einstellungen &gt; Datenschutz
                        &gt; Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich
                        nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der
                        Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
                        beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                      </p>
                      <br />
                      <spam className="text-[0.66rem]">
                        Impressum vom{' '}
                        <a href="https://www.impressum-generator.de">Impressum Generator</a> der{' '}
                        <a href="https://www.kanzlei-hasselbach.de/">
                          Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
                        </a>
                      </spam>
                    </div>
                  </section>

                  <div className="p-5">
                    <button
                      type="button"
                      className="lg-py-1 inline-flex justify-center rounded-md border border-white bg-green-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:text-[1.66rem]"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal11
