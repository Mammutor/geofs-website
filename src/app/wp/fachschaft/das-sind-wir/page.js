import styles from "@/app/page.module.css"

import Image from "next/image"
import Fachschaft from "@/img/fachschaft.jpg"

export default function () {

    const rollen = {
        _comment: "für die Rollen sind role, names und description alle required!!!",
        wahldatum: "29. Juni 2022",
        protokoll: "https://geofs.uni-muenster.de/wp/wp-content/uploads/protokolle/2022/2022_06_29_FSV_Protokoll_konstituierendeSitzung.pdf",
        roles: [
            {
                role: "1. Vorsitzender",
                names: "Severin Krohne",
                description: "In meinem zweiten Semester in der Fachschaft wurde ich zum neuen 1. Vorsitzenden gewählt. Ich lade zu den wöchentlichen Sitzungen ein und kümmere mich darum, dass die Fachschaftsarbeit reibunglos klappt."
            },
            {
                role: "3. Vorsitzender",
                names: "Felix Wenzel",
                description: "Stellvertretender Vorsitzender."
            },
            {
                role: "Finanzwart",
                names: "Timo Lietmeyer, Adrian Spork",
                description: "Auch wenn wir der Arbeit in der Fachschaft unentgeltlich nachgehen, so bleibt das Thema der Finanzen in der Fachschaft nicht ganz außen vor. Geld sprudelt aus ominösen Quellen, es wird gewaschen und getrocknet, gedruckt und kopiert. Über diesen Prozess der unfairen Verteilung geringer Summen behalten wir stets den Überblick."
            },
            {
                role: "Ersti-Beauftragte",
                names: "Emil Erlenkötter, Lukas Bäcker, Jan Stenkamp, Thomas Kujawa",
                description: "Als Ersti-Beauftragte ist es nicht nur unsere Aufgabe und große Freude, alle Erstis in der O-Woche und auf dem Erstiwochenende zu bespaßen und ihnen alle Illusionen der seriösen und vorbildlichen Studenten in den höheren Semestern zu rauben, wir helfen auch gerne allen Neulingen, wenn sie Fragen oder Unklarheiten haben oder einfach nur die nächstbeste Kneipe in Münster finden wollen."
            },
            {
                role: "Bachelor-Beauftragte",
                names: "Josefina Balzer, Alexander Pilz",
                description: "Ansprechpartner für alle Bachelorstudierenden."
            },
            {
                role: "Master-Beauftragte",
                names: "Jonas Hurst, Tom Niers",
                description: "Ansprechpartner für alle Masterstudierenden."
            },
            {
                role: "Lernstoffbeauftragte",
                names: "Felix Wenzel, Timo Lietmeyer",
                description: "Ich kümmere mich dieses Jahr um unsere Altklausursammlung, ordne sie neu und versuche sie aktuell zu halten. Deswegen würde ich mich über neue Klausurmitschriften o.ä. freuen.",
            },
            {
                role: "Kassenprüfer",
                names: "Alexander Pilz",
                description: "Ich überprüfe, ob der Gelddrucker das Semester über gut von den Finanzwarten bedient wurde, und entlaste sie, sofern sie dafür gesorgt haben, dass die Faschaft für jegliche Aktionen stets flüssig war."
            },
            {
                role: "Logistiker",
                names: "Severin Krohne, Timo Lietmeyer, Adrian Spork",
                description: "Alles steigt und fällt mit der Logistik! Damit niemand auf dem Trockenen sitzen oder Hunger schieben muss, kümmern wir uns um eure Versorgung!"
            },
            {
                role: "FK",
                names: "Rotierendes System",
                description: "In einem rotierendem System vertreten wir die Fachschaft Geoinformatik einmal die Woche bei der Fachschaftenkonferenz, um uns mit den anderen Fachschaften der Uni auszutauschen und unsere Fachschaft so immer auf dem Laufenden zu halten."
            },
            {
                role: "NaWi-FK und so",
                names: "Felix Wenzel, Alexander Pilz, Timo Lietmeyer",
                description: "Die NaWi-FK ist ein monatliches Treffen der naturwissenschaftlichen Fachschaften. Hier tauschen wir uns also z.B. mit der Fachschaft Mathe/Info, den Physikern etc. aus."
            },
            {
                role: "Newsletter-Beauftragter",
                names: "Timo Lietmeyer",
                description: "Hier werden in der Regel großartige Newsletter geschrieben um euch mit allen (wichtigen/interessanten) Infos rund um die Uni, Jobangebote und natürlich diverse Partys durchzufüttern."
            },
            {
                role: "Website-Beauftragte",
                names: "Tom Niers, Alexander Pilz",
                description: "Wir geben unser Bestes, diese Webseite aktuell zu halten und euch über alles wichtige zu informieren!"
            },
            {
                role: "Öffentlichkeits-Beauftragte",
                names: "Josefina Balzer, Thomas Kujawa, Alexander Pilz, Emil Erlenkötter",
                description: "Wir geben unser Bestes, euch in den sozialen Netzwerken mit Infos über unsere Arbeit und natürlich von uns organisierte Veranstaltungen zu versorgen."
            },
            {
                role: "Paintmaster",
                names: "Emil Erlenkötter, Lukas Bäcker",
                description: "Wir holen sämtliche Kreativität und krasse Bildbearbeitungswerkzeuge aus der Trickkiste und kümmern uns als „Paintmaster“ um die diversen Plakate, die vor jeder Fachschafts-Veranstaltung das GEO verschönern."
            },
            {
                role: "Merchandise",
                names: "Adrian Spork, Felix Wenzel, Emil Erlenkötter",
                description: "Wir  machen die coolen Pullis und T-Shirts!"
            },
            {
                role: "Raumwart",
                names: "Thomas Kujawa, Severin Krohne",
                description: "Ich kümmere mich um unseren Fachschaftsraum – Ordnung muss einfach sein."
            },
            {
                role: "SfVuFvfSuoS",
                names: "Alexander Pilz",
                description: "Diese fancy Abkürzung steht für „Sonderbeauftragter für Verbreitung und Förderung von freier Software und offenen Standards“ — hooray!"
            },
            {
                role: "Admins",
                names: "Alexander Pilz, Adrian Spork",
                description: "Wir kümmern uns um alles, was unter geofs.uni-muenster.de läuft sowie die Hardware der Fachschaft."
            },
            {
                role: "Weihnachts-AK-Beauftragte",
                names: "Judith Bresser, Thomas Kujawa, Emil Erlenkötter",
                description: "Wir kümmern uns um die Organisation der weihnachtlichen Veranstaltungen wie z.B. das Baumschmücken oder die große Weihnachtsfeier im Hörsaal."
            },
            {
                role: "Fachschaftsfahrt-Beauftragte",
                names: "Judith Bresser, Alexander Pilz",
                description: "Wir kümmern uns um die Organisation der Fachschaftsfahrt. Jedes Jahr fahren die beiden Fachschaften Geoinformatik und GeoLök auf Fachschaftsfahrt um sich zu vernetzen und Veranstaltungen zu planen."
            },
            {
                role: "Geoparty-Beauftragte",
                names: "Nick Jakuschona, Thomas Kujawa",
                description: "Wir veranstalten einmal im Semester die legändere Geoparty."
            },
            {
                role: "Vernetzungs-Beauftragter",
                names: "Alexander Pilz",
                description: "Wir sorgen dafür, dass sich Fachschaftler und Studierende am Fachbereich 14 (Geowissenschaften) durch gemeinsame Aktionen besser kennenlernen."
            },
            {
                role: "Schlüsselbeauftragter",
                names: "Adrian Spork",
                description: "Wir kümmern uns darum, dass alle aktiven Fachschaftler Zugang zum Fachschaftsraum haben."
            },
            {
                role: "GeoScienceDay-Beauftragte",
                names: "Jan Stenkamp, Tom Niers, Josefina Balzer",
                description: "Jedes Jahr findet am Fachbereich 14 (Geowissenschaften) ein Tag statt, an dem zunächst mal keine Lehre stattfindet (Whoop Whoop). Der Grund dafür ist, dass sich an diesem Tag alle Beteiligten am FB 14 durch gemeinsame Aktionen wie Vorträge, Science Slam, Grillen etc. besser kennen lernen sollen. Wir kümmern uns um die Organisation dieses Tages und vor allem darum, dass ihr jederzeit mit Flüssigkeiten versorgt seid (findet im Hochsommer statt, da soll man viel Wasser trinken ;))."
            },
            {
                role: "Software-Praktikum-Beauftragter",
                names: "Alexander Pilz",
                description: "Jedes Jahr wird gegen Ende der vorlesungsfreien Zeit im Wintersemester ein Kurs der Fachschaft veranstaltet, in dem ihr in einer Art Praktikum zwei Wochen aktiv an einem Softwareprojekt arbeiten könnt. Ich kümmere mich darum, dass bei der Organisation des Kurses alles reibungslos verläuft. Mehr Infos dazu findet ihr hier."
            },
            {
                role: "Advanced-GIS-Beauftragte",
                names: "Josefina Balzer, Michael Brüggemann",
                description: "Jedes Jahr wird gegen Ende der vorlesungsfreien Zeit im Sommersemester ein Kurs von der Fachschaft veranstaltet, in dem ihr eure Kenntnisse in Geoinformationssystem vertiefen könnt. Ich kümmere mich darum, dass bei der Organisation alles reibungslos verläuft. Mehr Infos dazu findet ihr hier."
            },
            {
                role: "Gleichstellungsbeauftragte",
                names: "Timo Lietmeyer, Judith Bresser",
                description: "Wir versuchen die Gleichstellung in der FS und im Fachbereich 14 auf struktureller und personeller Ebene zu verbessern."
            },
            {
                role: "Wahlbeauftragte",
                names: "Felix Wenzel, Severin Krohne",
                description: "Alljährlich haben alle Studierende der Geoinformatik die Möglichkeit die Fachschaftsvertretung zu wählen, die dann wiederum die hier aufgeführten Beauftragten wählt. Ich kümmere, dass rechtzeitig Kandidaten für die Wahl gefunden werden und dass jeder rechtzeitig Bescheid weiß, wann die Wahl stattfindet."
            },
            {
                role: "Vollversammlung-Beauftragte",
                names: "Severin Krohne, Judith Bresser",
                description: "Einmal im Jahr kommen alle Studierenden der Geoinformatik an der WWU zur Vollversammlung zusammen. Bei dieser Versammlung gibt die Fachschaft einen Rückblick auf das vergangene Semester, erzählt von zukünftigen Veranstaltungen und zudem ist Platz für weitere spontane Themen, welche den Studierenden auf dem Herzen legen. Nicht zu vergessen: Am Ende gibts HotDogs für alle!!!"
            },
            {
                role: "Entleihwart",
                names: "Adrian Spork",
                description: "Mittlerweile hat die Fachschaft ein größeres Sammelsorium an Gegenständen angesammelt, die man sich leihen kann, dazu zählen z.B. Ladekabel, ein Mikrofon, eine Biergartenkombination etc. Wer Interesse hat sich eine der genannten Gegenstände einmal auszuleihen, kann sich gerne bei mir melden."
            },
            {
                role: "Studiendekan-Treffen-Beauftragte",
                names: "Alexander Pilz, Judith Bresser",
                description: "Wir treffen uns mehrere Male im Semester mit dem Studiendekan des Fachbereichs 14. In diesen Treffen besprechen wir alle relevanten Themen, die von Studierenden an uns herangetragen wurden."
            },
            {
                role: "Collaboration-Workshop-Beauftragte",
                names: "Felix Wenzel, Judith Bresser",
                description: "Wir setzten uns dafür ein, dass es in naher Zukunft einen Learnweb-Kurs geben wird, in dem Inhalte wie GIT, Kanban, Docker, Agile Methoden, Teamwork (Retroperspektive) und Shared Storage gelehrt werden. Beim Collaboration Workshop handelt es sich um einen Kurs, der durch Qualitätsverbesserungsmittel finanziert wird."
            },
            {
                role: "BkB",
                names: "Severin Krohne, Lukas Bäcker, Tom Niers, Jan Stenkamp",
                description: "Wir kümmern uns darum, dass den FSlern und Studierenden der Geoinformatik zu jeder Zeit genügend Boonekamp zur Verfügung steht."
            },
        ]
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Der Fachschaftsrat</h1>
            <Image src={Fachschaft} style={{maxWidth: "100%", height: "auto"}} alt="Gruppenbild der Fachschaft vorm Geo"/>
            <div className={styles.Textblock}>
                Die Posten des Fachschaftsrates (und dazu am besten passenden Personen) werden von der
                Fachschaftsvertretung gewählt.
            </div>
            <h3 className={styles.VerySmallHeading}>
                Am {rollen.wahldatum} ist der aktuelle Fachschaftsrat gewählt worden. Das Protokoll
                gibt’s <a href={rollen.protokoll}>hier</a>.
            </h3>
            {rollen.roles.map(role => <Role role={role.role} names={role.names} description={role.description}/>)}
        </>
    )
}

const Role = ({role, names, description}) => {
    return (
        <>
            <h2 className={styles.SmallHeading}>{role}: {names}</h2>
            <div className={styles.Textblock}>{description}</div>
        </>
    )
}