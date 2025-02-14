import { useRef, useState } from "react";
import "./App.css";
import caens from "./jsons/caen.jsx";

function App() {
  const [rezultatAfis, setRezultatAfis] = useState(false);

  const handleRezAfis = () => {
    setRezultatAfis(!rezultatAfis);
  };

  const [caenuri, setCaenuri] = useState({
    "0111 - Cultivarea cerealelor (excluzând orezul), plantelor leguminoase și a plantelor oleaginoase": false,
    "0112 - Cultivarea orezului": false,
    "0113 - Cultivarea legumelor și a pepenilor, a rădăcinoaselor și tuberculiferelor": false,
    "0114 - Cultivarea trestiei de zahăr": false,
    "0115 - Cultivarea tutunului": false,
    "0116 - Cultivarea plantelor pentru fibre textile": false,
    "0119 - Cultivarea altor plante din culturi nepermanente": false,
    "0121 - Cultivarea strugurilor": false,
    "0122 - Cultivarea fructelor tropicale și subtropicale": false,
    "0123 - Cultivarea fructelor citrice": false,
    "0124 - Cultivarea fructelor semințoase și sâmburoase": false,
    "0125 - Cultivarea altor pomi fructiferi, a arbuștilor fructiferi, căpșunilor și a nuciferelor": false,
    "0126 - Cultivarea fructelor oleaginoase": false,
    "0127 - Cultivarea plantelor pentru prepararea băuturilor": false,
    "0128 - Cultivarea condimentelor, plantelor aromatice, medicinale și a plantelor de uz farmaceutic": false,
    "0129 - Cultivarea altor plante permanente": false,
    "0130 - Cultivarea plantelor pentru înmulțire": false,
    "0141 - Creșterea bovinelor de lapte": false,
    "0142 - Creșterea altor bovine": false,
    "0143 - Creșterea cailor și a altor cabaline": false,
    "0144 - Creșterea cămilelor și a camelidelor": false,
    "0145 - Creșterea ovinelor și caprinelor": false,
    "0146 - Creșterea porcinelor": false,
    "0147 - Creșterea păsărilor": false,
    "0148 - Creșterea altor animale": false,
    "0150 - Activități în ferme mixte (cultura vegetală combinată cu creșterea animalelor)": false,
    "0161 - Activități auxiliare pentru producția vegetală": false,
    "0162 - Activități auxiliare pentru creșterea animalelor": false,
    "0163 - Activități după recoltare și pregătirea semințelor": false,
    "0170 - Vânătoare, capturarea cu capcane a vânatului și activități de servicii anexe vânătorii": false,
    "0210 - Silvicultură și alte activități forestiere": false,
    "0220 - Exploatarea forestieră": false,
    "0230 - Colectarea produselor forestiere nelemnoase din flora spontană": false,
    "0240 - Activități de servicii anexe silviculturii": false,
    "0311 - Pescuitul maritim": false,
    "0312 - Pescuitul în ape dulci": false,
    "0321 - Acvacultura maritimă": false,
    "0322 - Acvacultura în ape dulci": false,
    "0330 - Activități anexe pescuitului și acvaculturii": false,
    "0510 - Extracția cărbunelui superior (PCS => 23865 kJ/kg)": false,
    "0520 - Extracția cărbunelui inferior (PCS < 23865 kJ/kg)": false,
    "0610 - Extracția petrolului brut": false,
    "0620 - Extracția gazelor naturale": false,
    "0710 - Extracția minereurilor feroase": false,
    "0721 - Extracția minereurilor de uraniu și toriu": false,
    "0729 - Extracția altor minereuri metalifere neferoase": false,
    "0811 - Extracția pietrei ornamentale și a pietrei pentru construcții, extracția pietrei calcaroase, ghipsului, cretei și a ardeziei": false,
    "0812 - Extracția pietrișului și nisipului; extracția argilei și caolinului": false,
    "0891 - Extracția mineralelor pentru industria chimică și a îngrășămintelor naturale": false,
    "0892 - Extracția turbei": false,
    "0893 - Extracția sării": false,
    "0899 - Alte activități extractive n.c.a.": false,
    "0910 - Activități de servicii anexe extracției petrolului brut și gazelor naturale": false,
    "0990 - Activități de servicii anexe pentru extracția mineralelor": false,
    "1011 - Prelucrarea și conservarea cărnii": false,
    "1012 - Prelucrarea și conservarea cărnii de pasăre": false,
    "1013 - Fabricarea produselor din carne (inclusiv din carne de pasăre)": false,
    "1020 - Prelucrarea și conservarea peștelui, crustaceelor și moluștelor": false,
    "1031 - Prelucrarea și conservarea cartofilor": false,
    "1032 - Fabricarea sucurilor de fructe și legume": false,
    "1039 - Prelucrarea și conservarea fructelor și legumelor n.c.a.": false,
    "1041 - Fabricarea uleiurilor și grăsimilor": false,
    "1042 - Fabricarea margarinei și a altor produse comestibile similare": false,
    "1051 - Fabricarea produselor lactate și a brânzeturilor": false,
    "1052 - Fabricarea înghețatei": false,
    "1061 - Fabricarea produselor de morărit": false,
    "1062 - Fabricarea amidonului și a produselor din amidon": false,
    "1071 - Fabricarea pâinii; fabricarea prăjiturilor și a produselor proaspete de patiserie": false,
    "1072 - Fabricarea biscuiților și pișcoturilor; fabricarea prăjiturilor și a produselor conservate de patiserie": false,
    "1073 - Fabricarea macaroanelor, tăiețeilor, cușcușului și a altor produse făinoase similare": false,
    "1081 - Fabricarea zahărului": false,
    "1082 - Fabricarea produselor din cacao, a ciocolatei și a produselor zaharoase": false,
    "1083 - Prelucrarea ceaiului și cafelei": false,
    "1084 - Fabricarea condimentelor și ingredientelor": false,
    "1085 - Fabricarea de mâncăruri preparate": false,
    "1086 - Fabricarea preparatelor alimentare omogenizate și alimentelor dietetice": false,
    "1089 - Fabricarea altor produse alimentare n.c.a.": false,
    "1091 - Fabricarea preparatelor pentru hrana animalelor de fermă": false,
    "1092 - Fabricarea preparatelor pentru hrana animalelor de companie": false,
    "1101 - Distilarea, rafinarea și mixarea băuturilor alcoolice": false,
    "1102 - Fabricarea vinurilor din struguri": false,
    "1103 - Fabricarea cidrului și a altor vinuri din fructe": false,
    "1104 - Fabricarea altor băuturi nedistilate, obținute prin fermentare": false,
    "1105 - Fabricarea berii": false,
    "1106 - Fabricarea malțului": false,
    "1107 - Producția de băuturi răcoritoare nealcoolice; producția de ape minerale și alte ape îmbuteliate": false,
    "1200 - Fabricarea produselor din tutun": false,
    "1310 - Pregătirea fibrelor și filarea fibrelor textile": false,
    "1320 - Producția de țesături": false,
    "1330 - Finisarea materialelor textile": false,
    "1391 - Fabricarea de metraje prin tricotare sau croșetare": false,
    "1392 - Fabricarea de articole confecționate din textile (excluzând îmbrăcămintea și lenjeria de corp)": false,
    "1393 - Fabricarea de covoare și mochete": false,
    "1394 - Fabricarea de odgoane, frânghii, sfori și plase": false,
    "1395 - Fabricarea de textile nețesute și articole din acestea, cu excepția confecțiilor de îmbrăcăminte": false,
    "1396 - Fabricarea de articole tehnice și industriale din textile": false,
    "1399 - Fabricarea altor articole textile n.c.a.": false,
    "1410 - Fabricarea articolelor de îmbrăcăminte prin tricotare sau croșetare": false,
    "1421 - Fabricarea articolelor de îmbrăcăminte": false,
    "1422 - Fabricarea de articole de lenjerie de corp": false,
    "1423 - Fabricarea de articole de îmbrăcăminte pentru lucru": false,
    "1424 - Fabricarea articolelor de îmbrăcăminte din piele și blană": false,
    "1429 - Fabricarea altor articole de îmbrăcăminte și accesorii n.c.a.": false,
    "1511 - Tăbăcirea și finisarea pieilor; prepararea și vopsirea blănurilor": false,
    "1512 - Fabricarea articolelor de voiaj și marochinărie și a articolelor de harnașament": false,
    "1520 - Fabricarea încălțămintei": false,
    "1611 - Tăierea și rindeluirea lemnului": false,
    "1612 - Prelucrarea și finisarea lemnului": false,
    "1621 - Fabricarea de furnire și a panourilor din lemn": false,
    "1622 - Fabricarea parchetului asamblat în panouri": false,
    "1623 - Fabricarea altor elemente de dulgherie și tâmplărie, pentru construcții": false,
    "1624 - Fabricarea ambalajelor din lemn": false,
    "1625 - Fabricarea de uși și ferestre din lemn": false,
    "1626 - Fabricarea de combustibili solizi din biomasă vegetală": false,
    "1627 - Finisarea articolelor din lemn": false,
    "1628 - Fabricarea altor produse din lemn; fabricarea articolelor din plută, paie și din alte materiale vegetale împletite": false,
    "1711 - Fabricarea celulozei": false,
    "1712 - Fabricarea hârtiei și cartonului": false,
    "1721 - Fabricarea hârtiei și cartonului ondulat și a ambalajelor din hârtie și carton": false,
    "1722 - Fabricarea produselor de uz gospodăresc și sanitar, din hârtie sau carton": false,
    "1723 - Fabricarea articolelor de papetărie": false,
    "1724 - Fabricarea tapetului": false,
    "1725 - Fabricarea altor articole din hârtie și carton n.c.a.": false,
    "1811 - Tipărirea ziarelor": false,
    "1812 - Alte activități de tipărire n.c.a.": false,
    "1813 - Servicii pregătitoare pentru pretipărire": false,
    "1814 - Legătorie și servicii conexe": false,
    "1820 - Reproducerea înregistrărilor": false,
    "1910 - Fabricarea produselor de cocserie": false,
    "1920 - Fabricarea produselor obținute din prelucrarea țițeiului": false,
    "2011 - Fabricarea gazelor industriale": false,
    "2012 - Fabricarea coloranților și a pigmenților": false,
    "2013 - Fabricarea altor produse chimice anorganice, de bază": false,
    "2014 - Fabricarea altor produse chimice organice, de bază": false,
    "2015 - Fabricarea îngrășămintelor și produselor azotoase": false,
    "2016 - Fabricarea materialelor plastice în forme primare": false,
    "2017 - Fabricarea cauciucului sintetic în forme primare": false,
    "2020 - Fabricarea pesticidelor și a altor produse agrochimice": false,
    "2030 - Fabricarea vopselelor, lacurilor, cernelii tipografice și masticurilor": false,
    "2041 - Fabricarea săpunurilor, detergenților și a produselor de întreținere": false,
    "2042 - Fabricarea parfumurilor și a produselor cosmetice (de toaletă)": false,
    "2051 - Fabricarea biocombustibililor lichizi": false,
    "2059 - Fabricarea altor produse chimice n.c.a.": false,
    "2060 - Fabricarea fibrelor sintetice și artificiale": false,
    "2110 - Fabricarea produselor farmaceutice de bază": false,
    "2120 - Fabricarea preparatelor farmaceutice": false,
    "2211 - Fabricarea anvelopelor și a camerelor de aer; reșaparea și refacerea anvelopelor": false,
    "2212 - Fabricarea altor produse din cauciuc": false,
    "2221 - Fabricarea plăcilor, foliilor, tuburilor și profilelor din material plastic": false,
    "2222 - Fabricarea articolelor de ambalaj din material plastic": false,
    "2223 - Fabricarea de uși și ferestre din material plastic": false,
    "2224 - Fabricarea articolelor din material plastic pentru construcții": false,
    "2225 - Prelucrarea și finisarea articolelor din material plastic": false,
    "2226 - Fabricarea altor produse din material plastic": false,
    "2311 - Fabricarea sticlei plate": false,
    "2312 - Prelucrarea și fasonarea sticlei plate": false,
    "2313 - Fabricarea articolelor din sticlă": false,
    "2314 - Fabricarea fibrelor din sticlă": false,
    "2315 - Fabricarea de sticlărie tehnică": false,
    "2320 - Fabricarea de produse refractare": false,
    "2331 - Fabricarea plăcilor și dalelor din ceramică": false,
    "2332 - Fabricarea cărămizilor, țiglelor și altor produse pentru construcții, din argilă arsă": false,
    "2341 - Fabricarea articolelor ceramice pentru uz gospodăresc și ornamental": false,
    "2342 - Fabricarea de obiecte sanitare din ceramică": false,
    "2343 - Fabricarea izolatorilor și pieselor izolante din ceramică": false,
    "2344 - Fabricarea altor produse tehnice din ceramică": false,
    "2345 - Fabricarea altor produse ceramice n.c.a.": false,
    "2351 - Fabricarea cimentului": false,
    "2352 - Fabricarea varului și ipsosului": false,
    "2361 - Fabricarea produselor din beton pentru construcții": false,
    "2362 - Fabricarea produselor din ipsos pentru construcții": false,
    "2363 - Fabricarea betonului": false,
    "2364 - Fabricarea mortarului": false,
    "2365 - Fabricarea produselor din azbociment": false,
    "2366 - Fabricarea altor articole din beton, ciment și ipsos": false,
    "2370 - Tăierea, fasonarea și finisarea pietrei": false,
    "2391 - Fabricarea de produse abrazive": false,
    "2399 - Fabricarea altor produse din minerale nemetalice n.c.a.": false,
    "2410 - Producția de metale feroase sub forme primare și de feroaliaje": false,
    "2420 - Producția de tuburi, țevi, profile tubulare și accesorii pentru acestea, din oțel": false,
    "2431 - Tragere la rece a barelor": false,
    "2432 - Laminare la rece a benzilor înguste": false,
    "2433 - Producția de profile obținute la rece": false,
    "2434 - Trefilarea firelor la rece": false,
    "2441 - Producția metalelor prețioase": false,
    "2442 - Metalurgia aluminiului": false,
    "2443 - Producția plumbului, zincului și cositorului": false,
    "2444 - Metalurgia cuprului": false,
    "2445 - Producția altor metale neferoase": false,
    "2446 - Prelucrarea combustibililor nucleari": false,
    "2451 - Turnarea fontei": false,
    "2452 - Turnarea oțelului": false,
    "2453 - Turnarea metalelor neferoase ușoare": false,
    "2454 - Turnarea altor metale neferoase": false,
    "2511 - Fabricarea de construcții metalice și părți componente ale structurilor metalice": false,
    "2512 - Fabricarea de uși și ferestre din metal": false,
    "2521 - Producția de radiatoare și cazane pentru încălzire centrală; producția de generatoare de abur și boilere": false,
    "2522 - Producția de rezervoare, cisterne și containere metalice": false,
    "2530 - Fabricarea armamentului și muniției": false,
    "2540 - Fabricarea produselor metalice obținute prin deformare plastică; metalurgia pulberilor": false,
    "2551 - Acoperirea metalelor": false,
    "2552 - Tratamente termice ale metalelor": false,
    "2553 - Operațiuni de mecanică generală": false,
    "2561 - Fabricarea produselor de tăiat": false,
    "2562 - Fabricarea articolelor de feronerie": false,
    "2563 - Fabricarea uneltelor": false,
    "2591 - Fabricarea de recipienți, containere și alte produse similare din oțel": false,
    "2592 - Fabricarea ambalajelor metalice ușoare": false,
    "2593 - Fabricarea articolelor din fire metalice; fabricarea de lanțuri și arcuri": false,
    "2594 - Fabricarea de șuruburi, buloane și alte articole filetate; fabricarea de nituri și șaibe": false,
    "2599 - Fabricarea altor articole din metal n.c.a.": false,
    "2611 - Fabricarea componentelor electronice": false,
    "2612 - Fabricarea subansamblurilor electronice (module)": false,
    "2620 - Fabricarea calculatoarelor și a echipamentelor periferice": false,
    "2630 - Fabricarea echipamentelor de comunicații": false,
    "2640 - Fabricarea produselor electronice de larg consum": false,
    "2651 - Fabricarea de instrumente și dispozitive pentru măsură, verificare, control, navigație": false,
    "2652 - Producția de ceasuri": false,
    "2660 - Fabricarea de echipamente pentru radiologie, electrodiagnostic și electroterapie": false,
    "2670 - Fabricarea de instrumente optice, suporți magnetici și optici; fabricarea de echipamente fotografice": false,
    "2711 - Fabricarea motoarelor, generatoarelor și transformatoarelor electrice": false,
    "2712 - Fabricarea aparatelor de distribuție și control al electricității": false,
    "2720 - Fabricarea de acumulatori și baterii": false,
    "2731 - Fabricarea de cabluri cu fibră optică": false,
    "2732 - Fabricarea altor fire și cabluri electrice și electronice": false,
    "2733 - Fabricarea dispozitivelor de conexiune pentru fire și cabluri electrice și electronice": false,
    "2740 - Fabricarea de echipamente electrice de iluminat": false,
    "2751 - Fabricarea de aparate electrocasnice": false,
    "2752 - Fabricarea de echipamente casnice neelectrice": false,
    "2790 - Fabricarea altor echipamente electrice": false,
    "2811 - Fabricarea de motoare și turbine (cu excepția celor pentru avioane, autovehicule și motociclete)": false,
    "2812 - Fabricarea de motoare hidraulice": false,
    "2813 - Fabricarea de pompe și compresoare": false,
    "2814 - Fabricarea de articole de robinetărie": false,
    "2815 - Fabricarea lagărelor, angrenajelor, cutiilor de viteză și a elementelor mecanice de transmisie": false,
    "2821 - Fabricarea cuptoarelor, furnalelor și arzătoarelor": false,
    "2822 - Fabricarea echipamentelor de ridicat și manipulat": false,
    "2823 - Fabricarea mașinilor și echipamentelor de birou (exceptând fabricarea calculatoarelor și a echipamentelor periferice)": false,
    "2824 - Fabricarea mașinilor-unelte portabile acționate electric": false,
    "2825 - Fabricarea echipamentelor de ventilație și frigorifice, exceptând echipamentele de uz casnic": false,
    "2829 - Fabricarea altor mașini și utilaje de utilizare generală n.c.a.": false,
    "2830 - Fabricarea mașinilor și utilajelor pentru agricultură și exploatări forestiere": false,
    "2841 - Fabricarea utilajelor și a mașinilor-unelte pentru prelucrarea metalului": false,
    "2842 - Fabricarea altor mașini-unelte n.c.a.": false,
    "2891 - Fabricarea utilajelor pentru metalurgie": false,
    "2892 - Fabricarea utilajelor pentru extracție și construcții": false,
    "2893 - Fabricarea utilajelor pentru prelucrarea produselor alimentare, băuturilor și tutunului": false,
    "2894 - Fabricarea utilajelor pentru industria textilă, a îmbrăcămintei și a pielăriei": false,
    "2895 - Fabricarea utilajelor pentru industria hârtiei și cartonului": false,
    "2896 - Fabricarea utilajelor pentru prelucrarea maselor plastice și a cauciucului": false,
    "2897 - Fabricarea mașinilor și utilajelor pentru fabricația aditivă (care utilizează tehnologia de fabricație aditivă)": false,
    "2899 - Fabricarea altor mașini și utilaje specifice n.c.a.": false,
    "2910 - Fabricarea autovehiculelor de transport rutier": false,
    "2920 - Producția de caroserii pentru autovehicule; fabricarea de remorci și semiremorci": false,
    "2931 - Fabricarea de echipamente electrice și electronice pentru autovehicule și pentru motoare de autovehicule": false,
    "2932 - Fabricarea altor piese și accesorii pentru autovehicule și pentru motoare de autovehicule": false,
    "3011 - Construcția de nave civile și structuri plutitoare": false,
    "3012 - Construcția de ambarcațiuni sportive și de agrement": false,
    "3013 - Construcția de nave și vase militare": false,
    "3020 - Fabricarea materialului rulant": false,
    "3031 - Fabricarea de aeronave și nave spațiale civile": false,
    "3032 - Fabricarea de aeronave și nave spațiale militare": false,
    "3040 - Fabricarea vehiculelor militare de luptă": false,
    "3091 - Fabricarea de motociclete": false,
    "3092 - Fabricarea de biciclete și de vehicule pentru invalizi": false,
    "3099 - Fabricarea altor mijloace de transport n.c.a.": false,
    "3100 - Fabricarea de mobilă": false,
    "3211 - Baterea monedelor": false,
    "3212 - Fabricarea bijuteriilor și articolelor similare din metale și pietre prețioase": false,
    "3213 - Fabricarea imitațiilor de bijuterii și articole similare": false,
    "3220 - Fabricarea instrumentelor muzicale": false,
    "3230 - Fabricarea articolelor pentru sport": false,
    "3240 - Fabricarea jocurilor și jucăriilor": false,
    "3250 - Fabricarea de dispozitive, aparate și instrumente medicale stomatologice": false,
    "3291 - Fabricarea măturilor și periilor": false,
    "3299 - Fabricarea altor produse manufacturiere n.c.a.": false,
    "3311 - Repararea și întreținerea articolelor fabricate din metal": false,
    "3312 - Repararea și întreținerea mașinilor": false,
    "3313 - Repararea și întreținerea echipamentelor electronice și optice": false,
    "3314 - Repararea și întreținerea echipamentelor electrice": false,
    "3315 - Repararea și întreținerea navelor și bărcilor civile": false,
    "3316 - Repararea și întreținerea aeronavelor și navelor spațiale civile": false,
    "3317 - Repararea și întreținerea altor echipamente civile de transport n.c.a.": false,
    "3318 - Repararea și întreținerea vehiculelor militare de luptă, a navelor, vaselor, aeronavelor și navelor spațiale militare": false,
    "3319 - Repararea și întreținerea altor echipamente": false,
    "3320 - Instalarea mașinilor și echipamentelor industriale": false,
    "3511 - Producția de energie electrică din resurse neregenerabile": false,
    "3512 - Producția de energie electrică din resurse regenerabile": false,
    "3513 - Transportul energiei electrice": false,
    "3514 - Distribuția energiei electrice": false,
    "3515 - Comercializarea energiei electrice": false,
    "3516 - Depozitarea energiei electrice": false,
    "3521 - Producția gazelor": false,
    "3522 - Distribuția combustibililor gazoși, prin conducte": false,
    "3523 - Comercializarea combustibililor gazoși, prin conducte": false,
    "3524 - Depozitarea gazelor, ca parte a serviciilor de furnizare": false,
    "3530 - Furnizarea de abur și aer condiționat": false,
    "3540 - Activități ale agenților și brokerilor din domeniul energiei electrice și al gazelor naturale": false,
    "3600 - Captarea, tratarea și distribuția apei": false,
    "3700 - Colectarea și epurarea apelor uzate": false,
    "3811 - Colectarea deșeurilor nepericuloase": false,
    "3812 - Colectarea deșeurilor periculoase": false,
    "3821 - Recuperarea materialelor reciclabile": false,
    "3822 - Producția de energie (electrică sau termică) prin tratarea deșeurilor (inclusiv prin incinerare)": false,
    "3823 - Alte activități de tratare a deșeurilor": false,
    "3831 - Incinerarea deșeurilor fără producție de energie": false,
    "3832 - Activități ale gropilor de gunoi sau ale depozitelor permanente de deșeuri": false,
    "3833 - Alte activități de eliminare a deșeurilor": false,
    "3900 - Activități și servicii de decontaminare": false,
    "4100 - Lucrări de construcții ale clădirilor rezidențiale și nerezidențiale": false,
    "4211 - Lucrări de construcții ale drumurilor și autostrăzilor": false,
    "4212 - Lucrări de construcții ale căilor ferate de suprafață și subterane": false,
    "4213 - Construcția de poduri și tuneluri": false,
    "4221 - Lucrări de construcții ale proiectelor utilitare pentru fluide": false,
    "4222 - Lucrări de construcții ale proiectelor utilitare pentru electricitate și telecomunicații": false,
    "4291 - Construcții hidrotehnice": false,
    "4299 - Lucrări de construcții ale altor proiecte inginerești n.c.a.": false,
    "4311 - Lucrări de demolare a construcțiilor": false,
    "4312 - Lucrări de pregătire a terenului": false,
    "4313 - Lucrări de foraj și sondaj pentru construcții": false,
    "4321 - Lucrări de instalații electrice": false,
    "4322 - Lucrări de instalații sanitare, de încălzire și de aer condiționat": false,
    "4323 - Lucrări de izolații": false,
    "4324 - Alte lucrări de instalații pentru construcții": false,
    "4331 - Lucrări de ipsoserie": false,
    "4332 - Lucrări de tâmplărie și dulgherie": false,
    "4333 - Lucrări de pardosire și placare a pereților": false,
    "4334 - Lucrări de vopsitorie, zugrăveli și montări de geamuri": false,
    "4335 - Alte lucrări de finisare": false,
    "4341 - Lucrări de învelitori, șarpante și terase la construcții": false,
    "4342 - Alte lucrări speciale de construcții pentru clădiri": false,
    "4350 - Lucrări speciale de construcții pentru proiecte de geniu civil": false,
    "4360 - Servicii de intermediere pentru lucrări speciale de construcții": false,
    "4391 - Activități de zidărie": false,
    "4399 - Alte lucrări speciale de construcții n.c.a.": false,
    "4611 - Intermedieri în comerțul cu materii prime agricole, animale vii, materii prime textile și cu semifabricate": false,
    "4612 - Intermedieri în comerțul cu combustibili, minereuri, metale și produse chimice pentru industrie": false,
    "4613 - Intermedieri în comerțul cu material lemnos și materiale de construcții": false,
    "4614 - Intermedieri în comerțul cu mașini, echipamente industriale, nave și avioane": false,
    "4615 - Intermedieri în comerțul cu mobilă, articole de menaj și de fierărie": false,
    "4616 - Intermedieri în comerțul cu textile, confecții din blană, încălțăminte și articole din piele": false,
    "4617 - Intermedieri în comerțul cu produse alimentare, băuturi și tutun": false,
    "4618 - Intermedieri în comerțul specializat în vânzarea produselor cu caracter specific n.c.a.": false,
    "4619 - Intermedieri în comerțul cu produse diverse": false,
    "4621 - Comerț cu ridicata al cerealelor, semințelor, furajelor și tutunului neprelucrat": false,
    "4622 - Comerț cu ridicata al florilor și al plantelor": false,
    "4623 - Comerț cu ridicata al animalelor vii": false,
    "4624 - Comerț cu ridicata al blănurilor, pieilor brute și al pieilor prelucrate": false,
    "4631 - Comerț cu ridicata al fructelor și legumelor": false,
    "4632 - Comerț cu ridicata al cărnii și produselor din carne, pește și produse din pește, crustacee și moluște": false,
    "4633 - Comerț cu ridicata al produselor lactate, ouălor, uleiurilor și grăsimilor comestibile": false,
    "4634 - Comerț cu ridicata al băuturilor": false,
    "4635 - Comerț cu ridicata al produselor din tutun": false,
    "4636 - Comerț cu ridicata al zahărului, ciocolatei și produselor zaharoase": false,
    "4637 - Comerț cu ridicata cu cafea, ceai, cacao și condimente": false,
    "4638 - Comerț cu ridicata specializat al altor alimente": false,
    "4639 - Comerț cu ridicata nespecializat de produse alimentare, băuturi și tutun": false,
    "4641 - Comerț cu ridicata al produselor textile": false,
    "4642 - Comerț cu ridicata al îmbrăcăminții și încălțămintei": false,
    "4643 - Comerț cu ridicata al aparatelor electrice de uz gospodăresc, al aparatelor de radio și televizoarelor": false,
    "4644 - Comerț cu ridicata al produselor din ceramică, sticlărie și produse de întreținere": false,
    "4645 - Comerț cu ridicata al produselor cosmetice și de parfumerie": false,
    "4646 - Comerț cu ridicata al produselor farmaceutice și medicale": false,
    "4647 - Comerț cu ridicata al mobilei (inclusiv de birou și pentru magazine), covoarelor și al articolelor de iluminat": false,
    "4648 - Comerț cu ridicata al ceasurilor și bijuteriilor": false,
    "4649 - Comerț cu ridicata al altor bunuri de uz gospodăresc": false,
    "4650 - Comerț cu ridicata al echipamentului informatic și de telecomunicații": false,
    "4661 - Comerț cu ridicata al mașinilor agricole, echipamentelor și furniturilor": false,
    "4662 - Comerț cu ridicata al mașinilor-unelte": false,
    "4663 - Comerț cu ridicata al mașinilor pentru industria minieră și construcții": false,
    "4664 - Comerț cu ridicata al altor mașini și echipamente": false,
    "4671 - Comerț cu ridicata al autovehiculelor": false,
    "4672 - Comerț cu ridicata al pieselor și accesoriilor pentru autovehicule": false,
    "4673 - Comerț cu ridicata al motocicletelor; comerț cu ridicata al pieselor și accesoriilor pentru motociclete": false,
    "4681 - Comerț cu ridicata al combustibililor solizi, lichizi și gazoși și al produselor derivate": false,
    "4682 - Comerț cu ridicata al metalelor și minereurilor metalice": false,
    "4683 - Comerț cu ridicata al materialului lemnos și al materialelor de construcție și echipamentelor sanitare": false,
    "4684 - Comerț cu ridicata al echipamentelor și furniturilor de fierărie pentru instalații sanitare și de încălzire": false,
    "4685 - Comerț cu ridicata al produselor chimice": false,
    "4686 - Comerț cu ridicata al altor produse intermediare": false,
    "4687 - Comerț cu ridicata al deșeurilor și resturilor": false,
    "4689 - Comerț cu ridicata specializat al altor produse n.c.a.": false,
    "4690 - Comerț cu ridicata nespecializat": false,
    "4711 - Comerț cu amănuntul nespecializat, cu vânzare predominantă de produse alimentare, băuturi și tutun": false,
    "4712 - Comerț cu amănuntul nespecializat, cu vânzare predominantă de produse nealimentare": false,
    "4721 - Comerț cu amănuntul al fructelor și legumelor proaspete": false,
    "4722 - Comerț cu amănuntul al cărnii și al produselor din carne": false,
    "4723 - Comerț cu amănuntul al peștelui, crustaceelor și moluștelor": false,
    "4724 - Comerț cu amănuntul al pâinii, produselor de patiserie și produselor zaharoase": false,
    "4725 - Comerț cu amănuntul al băuturilor": false,
    "4726 - Comerț cu amănuntul al produselor din tutun": false,
    "4727 - Comerț cu amănuntul al altor produse alimentare": false,
    "4730 - Comerț cu amănuntul al carburanților pentru autovehicule": false,
    "4740 - Comerț cu amănuntul al echipamentului informatic și de telecomunicații": false,
    "4751 - Comerț cu amănuntul al textilelor": false,
    "4752 - Comerț cu amănuntul al articolelor de fierărie, al materialelor de construcții, al articolelor din sticlă și al celor pentru vopsit": false,
    "4753 - Comerț cu amănuntul al covoarelor, carpetelor, tapetelor și al altor acoperitoare de podea": false,
    "4754 - Comerț cu amănuntul al articolelor și aparatelor electrocasnice": false,
    "4755 - Comerț cu amănuntul al mobilei, al articolelor de iluminat și al altor articole de uz casnic n.c.a.": false,
    "4761 - Comerț cu amănuntul al cărților": false,
    "4762 - Comerț cu amănuntul al ziarelor și articolelor de papetărie": false,
    "4763 - Comerț cu amănuntul al echipamentelor sportive": false,
    "4764 - Comerț cu amănuntul al jocurilor și jucăriilor": false,
    "4769 - Comerț cu amănuntul de bunuri culturale și recreative n.c.a.": false,
    "4771 - Comerț cu amănuntul al îmbrăcăminții": false,
    "4772 - Comerț cu amănuntul al încălțămintei și articolelor din piele": false,
    "4773 - Comerț cu amănuntul al produselor farmaceutice": false,
    "4774 - Comerț cu amănuntul al articolelor medicale și ortopedice": false,
    "4775 - Comerț cu amănuntul al produselor cosmetice și de parfumerie": false,
    "4776 - Comerț cu amănuntul al florilor, plantelor și semințelor; comerț cu amănuntul al animalelor de companie și al hranei pentru acestea": false,
    "4777 - Comerț cu amănuntul al ceasurilor și bijuteriilor": false,
    "4778 - Comerț cu amănuntul al altor bunuri noi": false,
    "4779 - Comerț cu amănuntul al bunurilor de ocazie": false,
    "4781 - Comerț cu amănuntul al autovehiculelor": false,
    "4782 - Comerț cu amănuntul al pieselor și accesoriilor pentru autovehicule": false,
    "4783 - Comerț cu amănuntul al motocicletelor; comerț cu amănuntul al pieselor și accesoriilor pentru motociclete": false,
    "4791 - Intermedieri în comerțul cu amănuntul nespecializat": false,
    "4792 - Intermedieri în comerțul cu amănuntul specializat": false,
    "4911 - Transport de pasageri pe căi ferate grele/magistrale": false,
    "4912 - Alte transporturi de pasageri pe căi ferate ușoare": false,
    "4920 - Transporturi de marfă pe calea ferată": false,
    "4931 - Transporturi terestre de pasageri, pe bază de grafic": false,
    "4932 - Transporturi terestre de pasageri, ocazionale": false,
    "4933 - Transporturi terestre de pasageri cu vehicule cu șofer, pe bază de comandă": false,
    "4934 - Transporturi de pasageri cu funiculare, teleferice și schilifturi": false,
    "4939 - Alte transporturi terestre de călători n.c.a.": false,
    "4941 - Transporturi rutiere de mărfuri": false,
    "4942 - Servicii de mutare": false,
    "4950 - Transporturi prin conducte": false,
    "5010 - Transporturi maritime și costiere de pasageri": false,
    "5020 - Transporturi maritime și costiere de marfă": false,
    "5030 - Transportul de pasageri pe căi navigabile interioare": false,
    "5040 - Transportul de marfă pe căi navigabile interioare": false,
    "5110 - Transporturi aeriene de pasageri": false,
    "5121 - Transporturi aeriene de marfă": false,
    "5122 - Transporturi spațiale": false,
    "5210 - Depozitări": false,
    "5221 - Activități de servicii anexe pentru transporturi terestre": false,
    "5222 - Activități de servicii anexe transporturilor pe apă": false,
    "5223 - Activități de servicii anexe transporturilor aeriene": false,
    "5224 - Manipulări": false,
    "5225 - Activități de servicii logistice pentru transporturi": false,
    "5226 - Alte activități anexe transporturilor": false,
    "5231 - Activități de intermediere pentru transportul de marfă": false,
    "5232 - Activități de intermediere pentru transportul de pasageri": false,
    "5310 - Activități poștale desfășurate sub obligativitatea serviciului universal": false,
    "5320 - Alte activități poștale și de curier": false,
    "5330 - Servicii de intermediere pentru activități poștale și de curier": false,
    "5510 - Hoteluri și alte facilități de cazare similare": false,
    "5520 - Facilități de cazare pentru vacanțe și perioade de scurtă durată": false,
    "5530 - Parcuri pentru rulote, campinguri și tabere": false,
    "5540 - Intermedieri pentru servicii de cazare": false,
    "5590 - Alte servicii de cazare": false,
    "5611 - Restaurante": false,
    "5612 - Activități ale unităților mobile de alimentație": false,
    "5621 - Activități de alimentație (catering) pentru evenimente": false,
    "5622 - Alte servicii de alimentație n.c.a.": false,
    "5630 - Baruri și alte activități de servire a băuturilor": false,
    "5640 - Intermedieri pentru servicii de alimentație și de servire a băuturilor": false,
    "5811 - Activități de editare a cărților": false,
    "5812 - Activități de editare a ziarelor": false,
    "5813 - Activități de editare a revistelor și periodicelor": false,
    "5819 - Alte activități de editare": false,
    "5821 - Activități de editare a jocurilor de calculator": false,
    "5829 - Activități de editare a altor produse software": false,
    "5911 - Activități de producție cinematografică, video și de programe de televiziune": false,
    "5912 - Activități postproducție cinematografică, video și de programe de televiziune": false,
    "5913 - Activități de distribuție a filmelor cinematografice, video și a programelor de televiziune": false,
    "5914 - Proiecția de filme cinematografice": false,
    "5920 - Activități de realizare a înregistrărilor audio și activități de editare muzicală": false,
    "6010 - Activități de radiodifuziune, activități de distribuție de programe audio": false,
    "6020 - Activități de difuzare a programelor de televiziune, activități de distribuție de programe video": false,
    "6031 - Activități ale agențiilor de știri": false,
    "6039 - Activități de distribuție a altor conținuturi": false,
    "6110 - Activități de telecomunicații prin rețele cu cablu, prin rețele fără cablu și prin satelit": false,
    "6120 - Activități de revânzare a serviciilor de telecomunicații și servicii de intermediere pentru telecomunicații": false,
    "6190 - Alte activități de telecomunicații": false,
    "6210 - Activități de realizare a softului la comandă (software orientat client)": false,
    "6220 - Activități de consultanță în tehnologia informației și de management (gestiune și exploatare) al mijloacelor de calcul": false,
    "6290 - Alte activități de servicii privind tehnologia informației": false,
    "6310 - Prelucrarea datelor, administrarea paginilor web și activități conexe": false,
    "6391 - Activități ale portalurilor web": false,
    "6392 - Alte activități de servicii informaționale n.c.a.": false,
    "6411 - Activități ale băncii centrale (naționale)": false,
    "6419 - Alte activități de intermedieri monetare": false,
    "6421 - Activități ale holdingurilor": false,
    "6422 - Activități ale canalelor de finanțare": false,
    "6431 - Activități ale fondurilor de investiții de pe piața monetară și ale fondurilor de investiții din afara pieței monetare": false,
    "6432 - Fonduri mutuale și alte entități financiare similare": false,
    "6491 - Leasing financiar": false,
    "6492 - Alte activități de creditare": false,
    "6499 - Alte intermedieri financiare n.c.a., exceptând activități de asigurări și fonduri de pensii": false,
    "6511 - Activități de asigurări de viață": false,
    "6512 - Alte activități de asigurări (exceptând asigurările de viață)": false,
    "6520 - Activități de reasigurare": false,
    "6530 - Activități ale fondurilor de pensii (cu excepția celor din sistemul public de asigurări sociale)": false,
    "6611 - Administrarea piețelor financiare": false,
    "6612 - Activități de intermediere a tranzacțiilor financiare": false,
    "6619 - Activități auxiliare intermedierilor financiare, exceptând activități de asigurări și fonduri de pensii": false,
    "6621 - Activități de evaluare a riscului de asigurare și a pagubelor": false,
    "6622 - Activități ale agenților și brokerilor de asigurări": false,
    "6629 - Alte activități auxiliare de asigurări și fonduri de pensii": false,
    "6630 - Activități de administrare a fondurilor": false,
    "6811 - Cumpărarea și vânzarea de bunuri imobiliare proprii": false,
    "6812 - Dezvoltare (promovare) imobiliară": false,
    "6820 - Închirierea și subînchirierea bunurilor imobiliare proprii sau închiriate": false,
    "6831 - Servicii de intermediere a tranzacțiilor imobiliare": false,
    "6832 - Alte activități pentru tranzacții imobiliare pe bază de comision sau contract": false,
    "6910 - Activități juridice": false,
    "6920 - Activități de contabilitate și audit financiar; consultanță în domeniul fiscal": false,
    "7010 - Activități ale direcțiilor (centralelor), birourilor administrative centralizate": false,
    "7020 - Activități de consultanță în afaceri și management": false,
    "7111 - Activități de arhitectură": false,
    "7112 - Activități de inginerie și consultanță tehnică legate de acestea": false,
    "7120 - Activități de testări și analize tehnice": false,
    "7210 - Cercetare-dezvoltare în științe naturale și inginerie": false,
    "7220 - Cercetare-dezvoltare în științe sociale și umaniste": false,
    "7311 - Activități ale agențiilor de publicitate": false,
    "7312 - Servicii de reprezentare media": false,
    "7320 - Activități de studiere a pieței și de sondare a opiniei publice": false,
    "7330 - Activități în domeniul relațiilor publice și al comunicării": false,
    "7411 - Activități de design industrial și vestimentar": false,
    "7412 - Design grafic și activități de comunicare vizuală": false,
    "7413 - Activități de design de interior": false,
    "7414 - Alte activități de design specializat": false,
    "7420 - Activități fotografice": false,
    "7430 - Activități de traducere scrisă și orală (interpreți)": false,
    "7491 - Activități de brokeraj în materie de brevete și servicii de marketing": false,
    "7499 - Alte activități profesionale, științifice și tehnice n.c.a.": false,
    "7500 - Activități veterinare": false,
    "7711 - Activități de închiriere și leasing cu autoturisme și autovehicule rutiere ușoare": false,
    "7712 - Activități de închiriere și leasing cu autovehicule rutiere grele": false,
    "7721 - Activități de închiriere și leasing cu bunuri recreaționale și echipament sportiv": false,
    "7722 - Activități de închiriere și leasing cu alte bunuri personale și gospodărești n.c.a.": false,
    "7731 - Activități de închiriere și leasing cu mașini și echipamente agricole": false,
    "7732 - Activități de închiriere și leasing cu mașini și echipamente pentru construcții": false,
    "7733 - Activități de închiriere și leasing cu mașini și echipamente de birou (inclusiv calculatoare)": false,
    "7734 - Activități de închiriere și leasing cu echipamente de transport pe apă": false,
    "7735 - Activități de închiriere și leasing cu echipamente de transport aerian": false,
    "7739 - Activități de închiriere și leasing cu alte mașini, echipamente și bunuri tangibile n.c.a.": false,
    "7740 - Leasing cu bunuri intangibile (cu excepția lucrărilor care fac obiectul drepturilor de autor)": false,
    "7751 - Servicii de intermediere pentru închirierea și leasingul autoturismelor, autorulotelor și remorcilor": false,
    "7752 - Servicii de intermediere pentru închirierea și leasingul altor bunuri corporale și bunuri intangibile (exceptând financiare)": false,
    "7810 - Activități ale agențiilor de plasare a forței de muncă": false,
    "7820 - Activități ale agențiilor de plasare temporară a forței de muncă și furnizarea altor resurse umane": false,
    "7911 - Activități ale agențiilor turistice": false,
    "7912 - Activități ale tur-operatorilor": false,
    "7990 - Alte servicii de rezervare și asistență turistică": false,
    "8001 - Activități de investigații și servicii private de protecție": false,
    "8009 - Alte activități de protecție n.c.a.": false,
    "8110 - Activități de servicii-suport combinate": false,
    "8121 - Activități generale de curățenie a clădirilor": false,
    "8122 - Activități specializate de curățenie": false,
    "8123 - Alte activități de curățenie": false,
    "8130 - Activități de întreținere peisagistică": false,
    "8210 - Activități de secretariat și servicii-suport": false,
    "8220 - Activități ale centrelor de intermediere telefonică (call center)": false,
    "8230 - Activități de organizare a expozițiilor, târgurilor și congreselor": false,
    "8240 - Activități de intermediere pentru servicii-suport pentru întreprinderi n.c.a.": false,
    "8291 - Activități ale agențiilor de colectare și ale birourilor (oficiilor) de raportare a creditului": false,
    "8292 - Activități de ambalare": false,
    "8299 - Alte activități de servicii-suport pentru întreprinderi n.c.a.": false,
    "8411 - Activități de administrație publică generală": false,
    "8412 - Reglementarea activităților organismelor care prestează servicii în domeniul îngrijirii sănătății, învățământului, culturii și al altor activități sociale, exceptând protecția socială": false,
    "8413 - Reglementarea și eficientizarea activităților economice": false,
    "8421 - Activități de afaceri externe": false,
    "8422 - Activități de apărare națională": false,
    "8423 - Activități de justiție": false,
    "8424 - Activități de ordine publică și de protecție civilă": false,
    "8425 - Activități de luptă împotriva incendiilor și de prevenire a acestora": false,
    "8430 - Activități de protecție socială obligatorie": false,
    "8510 - Învățământ preșcolar": false,
    "8520 - Învățământ primar": false,
    "8531 - Învățământ secundar general": false,
    "8532 - Învățământ secundar, tehnic sau profesional": false,
    "8533 - Învățământ postsecundar, nonuniversitar": false,
    "8540 - Învățământ superior universitar": false,
    "8551 - Învățământ în domeniul sportiv și recreațional": false,
    "8552 - Învățământ în domeniul cultural (muzică, teatru, dans, arte plastice etc.)": false,
    "8553 - Școli de conducere (pilotaj)": false,
    "8559 - Alte forme de învățământ n.c.a.": false,
    "8561 - Activități de intermediere pentru cursuri și tutori (îndrumători, profesori)": false,
    "8569 - Activități de servicii-suport pentru învățământ": false,
    "8610 - Activități de asistență spitalicească": false,
    "8621 - Activități de asistență medicală generală": false,
    "8622 - Activități de asistență medicală specializată": false,
    "8623 - Activități de asistență stomatologică": false,
    "8691 - Servicii de diagnostic imagistic și activități ale laboratoarelor medicale": false,
    "8692 - Transportul pacienților cu ambulanța": false,
    "8693 - Activități ale psihologilor și psihoterapeuților, cu excepția medicilor": false,
    "8694 - Activități ale infirmierelor și moașelor": false,
    "8695 - Activități de fizioterapie": false,
    "8696 - Activități de medicină tradițională, complementară și alternativă": false,
    "8697 - Servicii de intermediere pentru servicii medicale, stomatologice și pentru alte servicii referitoare la sănătatea umană": false,
    "8699 - Alte activități referitoare la sănătatea umană n.c.a.": false,
    "8710 - Activități ale centrelor de îngrijire medicală": false,
    "8720 - Activități ale centrelor de recuperare psihică și de dezintoxicare, exclusiv spitale": false,
    "8730 - Activități ale căminelor de bătrâni și ale căminelor pentru persoane cu dizabilități aflate în incapacitate de a se îngriji singure": false,
    "8791 - Activități de intermediere pentru servicii de îngrijire la domiciliu": false,
    "8799 - Alte activități de asistență socială, cu cazare n.c.a.": false,
    "8810 - Activități de asistență socială, fără cazare, pentru bătrâni și pentru persoane cu dizabilități aflate în incapacitate de a se îngriji singure": false,
    "8891 - Activități de îngrijire zilnică pentru copii": false,
    "8899 - Alte activități de asistență socială, fără cazare, n.c.a.": false,
    "9011 - Activități de creație literară și compoziție muzicală": false,
    "9012 - Activități de creație în domeniul artelor vizuale": false,
    "9013 - Alte activități de creație artistică": false,
    "9020 - Activități de interpretare artistică (spectacole)": false,
    "9031 - Activități de gestionare a sălilor și amplasamentelor de spectacole": false,
    "9039 - Alte activități-suport pentru creație și interpretare artistică": false,
    "9111 - Activități ale bibliotecilor": false,
    "9112 - Activități ale arhivelor": false,
    "9121 - Activități ale muzeelor și colecțiilor": false,
    "9122 - Activități ale siturilor și monumentelor istorice": false,
    "9130 - Activități de conservare, restaurare și alte activități-suport pentru patrimoniul cultural": false,
    "9141 - Activități ale grădinilor botanice și zoologice": false,
    "9142 - Activități ale rezervațiilor naturale": false,
    "9200 - Activități de jocuri de noroc și pariuri": false,
    "9311 - Activități ale bazelor sportive": false,
    "9312 - Activități ale cluburilor sportive": false,
    "9313 - Activități ale centrelor de fitness": false,
    "9319 - Alte activități sportive n.c.a": false,
    "9321 - Activități ale parcurilor tematice și de distracții": false,
    "9329 - Alte activități recreative și distractive n.c.a.": false,
    "9411 - Activități ale organizațiilor economice și patronale": false,
    "9412 - Activități ale organizațiilor profesionale": false,
    "9420 - Activități ale sindicatelor salariaților": false,
    "9491 - Activități ale organizațiilor religioase": false,
    "9492 - Activități ale organizațiilor politice": false,
    "9499 - Activități ale altor organizații n.c.a.": false,
    "9510 - Repararea și întreținerea calculatoarelor și a echipamentelor de comunicații": false,
    "9521 - Repararea și întreținerea aparatelor electronice de uz casnic": false,
    "9522 - Repararea și întreținerea dispozitivelor de uz gospodăresc și a echipamentelor pentru casă și grădină": false,
    "9523 - Repararea și întreținerea încălțămintei și a articolelor din piele": false,
    "9524 - Repararea și întreținerea mobilei și a furniturilor casnice": false,
    "9525 - Repararea și întreținerea ceasurilor și a bijuteriilor": false,
    "9529 - Repararea și întreținerea articolelor de uz personal și gospodăresc n.c.a.": false,
    "9531 - Repararea și întreținerea autovehiculelor": false,
    "9532 - Repararea și întreținerea motocicletelor": false,
    "9540 - Servicii de intermediere pentru repararea și întreținerea calculatoarelor, a articolelor personale și de uz gospodăresc, a autovehiculelor și motocicletelor": false,
    "9610 - Spălarea și curățarea articolelor textile și a produselor din blană": false,
    "9621 - Activități de coafură și frizerie": false,
    "9622 - Activități de tratament și înfrumusețare": false,
    "9623 - Activități ale centrelor spa, saunelor și băilor de abur": false,
    "9630 - Activități de pompe funebre și similare": false,
    "9640 - Activități de intermediere pentru servicii personale": false,
    "9691 - Activități de servicii personale la domiciliu": false,
    "9699 - Alte servicii personale n.c.a.": false,
    "9700 - Activități ale gospodăriilor private în calitate de angajator de personal casnic": false,
    "9810 - Activități ale gospodăriilor private de producere de bunuri destinate consumului propriu": false,
    "9820 - Activități ale gospodăriilor private de producere de servicii pentru scopuri proprii": false,
    "9900 - Activități ale organizațiilor și organismelor extrateritoriale": false,
  });
  const [grupe, setGrupe] = useState({
    "011 - Cultivarea plantelor nepermanente": false,
    "012 - Cultivarea plantelor din culturi permanente": false,
    "013 - Cultivarea plantelor pentru înmulțire": false,
    "014 - Creșterea animalelor": false,
    "015 - Activități în ferme mixte (cultura vegetală combinată cu creșterea animalelor)": false,
    "016 - Activități auxiliare agriculturii și activități după recoltare": false,
    "017 - Vânătoare, capturarea cu capcane a vânatului și activități de servicii anexe vânătorii": false,
    "021 - Silvicultură și alte activități forestiere": false,
    "022 - Exploatarea forestieră": false,
    "023 - Colectarea produselor forestiere nelemnoase din flora spontană": false,
    "024 - Activități de servicii anexe silviculturii": false,
    "031 - Pescuitul": false,
    "032 - Acvacultura": false,
    "033 - Activități anexe pescuitului și acvaculturii": false,
    "051 - Extracția cărbunelui superior (PCS => 23865 kJ/kg)": false,
    "052 - Extracția cărbunelui inferior (PCS < 23865 kJ/kg)": false,
    "061 - Extracția petrolului brut": false,
    "062 - Extracția gazelor naturale": false,
    "071 - Extracția minereurilor feroase": false,
    "072 - Extracția minereurilor metalifere neferoase": false,
    "081 - Extracția pietrei, nisipului și argilei": false,
    "089 - Alte activități extractive n.c.a.": false,
    "091 - Activități de servicii anexe extracției petrolului brut și gazelor naturale": false,
    "099 - Activități de servicii anexe pentru extracția mineralelor": false,
    "101 - Producția, prelucrarea și conservarea cărnii și a produselor din carne": false,
    "102 - Prelucrarea și conservarea peștelui, crustaceelor și moluștelor": false,
    "103 - Prelucrarea și conservarea fructelor și legumelor": false,
    "104 - Fabricarea uleiurilor și a grăsimilor vegetale și animale": false,
    "105 - Fabricarea produselor lactate": false,
    "106 - Fabricarea produselor de morărit, a amidonului și produselor din amidon": false,
    "107 - Fabricarea produselor de brutărie și a produselor făinoase": false,
    "108 - Fabricarea altor produse alimentare": false,
    "109 - Fabricarea preparatelor pentru hrana animalelor": false,
    "110 - Fabricarea băuturilor": false,
    "120 - Fabricarea produselor din tutun": false,
    "131 - Pregătirea fibrelor și filarea fibrelor textile": false,
    "132 - Producția de țesături": false,
    "133 - Finisarea materialelor textile": false,
    "139 - Fabricarea altor articole textile": false,
    "141 - Fabricarea articolelor de îmbrăcăminte prin tricotare sau croșetare": false,
    "142 - Fabricarea altor articole de îmbrăcăminte și accesorii": false,
    "151 - Tăbăcirea și finisarea pieilor; fabricarea articolelor de voiaj și marochinărie și a articolelor de harnașament; prepararea și vopsirea blănurilor": false,
    "152 - Fabricarea încălțămintei": false,
    "161 - Tăierea și rindeluirea lemnului": false,
    "162 - Fabricarea produselor din lemn, plută, paie și din alte materiale vegetale": false,
    "171 - Fabricarea celulozei, hârtiei și cartonului": false,
    "172 - Fabricarea articolelor din hârtie și carton": false,
    "181 - Tipărire și activități de servicii conexe tipăririi": false,
    "182 - Reproducerea înregistrărilor": false,
    "191 - Fabricarea produselor de cocserie": false,
    "192 - Fabricarea produselor obținute din prelucrarea țițeiului": false,
    "201 - Fabricarea produselor chimice de bază, a îngrășămintelor și produselor azotoase; fabricarea materialelor plastice și a cauciucului sintetic, în forme primare": false,
    "202 - Fabricarea pesticidelor și a altor produse agrochimice": false,
    "203 - Fabricarea vopselelor, lacurilor, cernelii tipografice și masticurilor": false,
    "204 - Fabricarea săpunurilor, detergenților și a produselor de întreținere, cosmetice și de parfumerie": false,
    "205 - Fabricarea altor produse chimice": false,
    "206 - Fabricarea fibrelor sintetice și artificiale": false,
    "211 - Fabricarea produselor farmaceutice de bază": false,
    "212 - Fabricarea preparatelor farmaceutice": false,
    "221 - Fabricarea articolelor din cauciuc": false,
    "222 - Fabricarea articolelor din material plastic": false,
    "231 - Fabricarea sticlei și a articolelor din sticlă": false,
    "232 - Fabricarea de produse refractare": false,
    "233 - Fabricarea materialelor de construcții din argilă": false,
    "234 - Fabricarea altor articole din ceramică și porțelan": false,
    "235 - Fabricarea cimentului, varului și ipsosului": false,
    "236 - Fabricarea articolelor din beton, ciment și ipsos": false,
    "237 - Tăierea, fasonarea și finisarea pietrei": false,
    "239 - Fabricarea produselor abrazive și a altor produse din minerale nemetalice n.c.a.": false,
    "241 - Producția de metale feroase sub forme primare și de feroaliaje": false,
    "242 - Producția de tuburi, țevi, profile tubulare și accesorii pentru acestea, din oțel": false,
    "243 - Fabricarea altor produse prin prelucrarea primară a oțelului": false,
    "244 - Producția metalelor prețioase și a altor metale neferoase": false,
    "245 - Turnarea metalelor": false,
    "251 - Fabricarea de construcții metalice": false,
    "252 - Producția de rezervoare, cisterne și containere metalice; producția de radiatoare și cazane pentru încălzire centrală": false,
    "253 - Fabricarea armamentului și muniției": false,
    "254 - Fabricarea produselor metalice obținute prin deformare plastică; metalurgia pulberilor": false,
    "255 - Tratarea și acoperirea metalelor; operațiuni de mecanică generală pe bază de plată sau contract": false,
    "256 - Producția de unelte și articole de fierărie": false,
    "259 - Fabricarea altor produse prelucrate din metal": false,
    "261 - Fabricarea componentelor electronice": false,
    "262 - Fabricarea calculatoarelor și a echipamentelor periferice": false,
    "263 - Fabricarea echipamentelor de comunicații": false,
    "264 - Fabricarea produselor electronice de larg consum": false,
    "265 - Fabricarea de echipamente de măsură, verificare, control și navigație; producția de ceasuri": false,
    "266 - Fabricarea de echipamente pentru radiologie, electrodiagnostic și electroterapie": false,
    "267 - Fabricarea de instrumente optice, suporți magnetici și optici; fabricarea de echipamente fotografice": false,
    "271 - Fabricarea motoarelor electrice, generatoarelor și transformatoarelor electrice și a aparatelor de distribuție și control a electricității": false,
    "272 - Fabricarea de acumulatori și baterii": false,
    "273 - Fabricarea de fire și cabluri; fabricarea dispozitivelor de conexiune pentru acestea": false,
    "274 - Fabricarea de echipamente electrice de iluminat": false,
    "275 - Fabricarea de echipamente casnice": false,
    "279 - Fabricarea altor echipamente electrice": false,
    "281 - Fabricarea de mașini și utilaje de utilizare generală": false,
    "282 - Fabricarea altor mașini și utilaje de utilizare generală": false,
    "283 - Fabricarea mașinilor și utilajelor pentru agricultură și exploatări forestiere": false,
    "284 - Fabricarea utilajelor pentru prelucrarea metalului și a mașinilor-unelte": false,
    "289 - Fabricarea altor mașini și utilaje cu destinație specifică": false,
    "291 - Fabricarea autovehiculelor de transport rutier": false,
    "292 - Producția de caroserii pentru autovehicule; fabricarea de remorci și semiremorci": false,
    "293 - Producția de piese și accesorii pentru autovehicule și pentru motoare de autovehicule": false,
    "301 - Construcția de nave și bărci": false,
    "302 - Fabricarea materialului rulant": false,
    "303 - Fabricarea de aeronave și nave spațiale": false,
    "304 - Fabricarea vehiculelor militare de luptă": false,
    "309 - Fabricarea altor echipamente de transport n.c.a.": false,
    "310 - Fabricarea de mobilă": false,
    "321 - Fabricarea bijuteriilor, imitațiilor de bijuterii și articolelor similare": false,
    "322 - Fabricarea instrumentelor muzicale": false,
    "323 - Fabricarea articolelor pentru sport": false,
    "324 - Fabricarea jocurilor și jucăriilor": false,
    "325 - Fabricarea de dispozitive, aparate și instrumente medicale și stomatologice": false,
    "329 - Alte activități industriale": false,
    "331 - Repararea și întreținerea articolelor fabricate din metal, a mașinilor și echipamentelor": false,
    "332 - Instalarea mașinilor și echipamentelor industriale": false,
    "351 - Producția, transportul și distribuția energiei electrice": false,
    "352 - Producția gazelor; distribuția combustibililor gazoși prin conducte": false,
    "353 - Furnizarea de abur și aer condiționat": false,
    "354 - Activități ale agenților și brokerilor din domeniul energiei electrice și al gazelor naturale": false,
    "360 - Captarea, tratarea și distribuția apei": false,
    "370 - Colectarea și epurarea apelor uzate": false,
    "381 - Colectarea deșeurilor": false,
    "382 - Recuperarea materialelor": false,
    "383 - Eliminarea deșeurilor": false,
    "390 - Activități și servicii de decontaminare": false,
    "410 - Lucrări de construcții ale clădirilor rezidențiale și nerezidențiale": false,
    "421 - Lucrări de construcții ale drumurilor și a căilor ferate": false,
    "422 - Lucrări de construcții ale proiectelor utilitare": false,
    "429 - Lucrări de construcții ale altor proiecte inginerești": false,
    "431 - Lucrări de demolare și de pregătire a terenului": false,
    "432 - Lucrări de instalații electrice și tehnico-sanitare și alte lucrări de instalații pentru construcții": false,
    "433 - Lucrări de finisare": false,
    "434 - Lucrări speciale de construcții pentru clădiri": false,
    "435 - Lucrări speciale de construcții pentru proiecte de geniu civil": false,
    "436 - Servicii de intermediere pentru lucrări speciale de construcții": false,
    "439 - Alte lucrări speciale de construcții": false,
    "461 - Activități de intermediere în comerțul cu ridicata": false,
    "462 - Comerț cu ridicata al produselor agricole brute și al animalelor vii": false,
    "463 - Comerț cu ridicata al produselor alimentare, al băuturilor și al tutunului": false,
    "464 - Comerț cu ridicata al bunurilor de consum": false,
    "465 - Comerț cu ridicata al echipamentului informatic și de telecomunicații": false,
    "466 - Comerț cu ridicata al altor mașini, echipamente și furnituri": false,
    "467 - Comerț cu ridicata al autovehiculelor și motocicletelor; comerț cu ridicata al pieselor și accesoriilor pentru autovehicule și motociclete": false,
    "468 - Comerț cu ridicata specializat al altor produse": false,
    "469 - Comerț cu ridicata nespecializat": false,
    "471 - Comerț cu amănuntul nespecializat": false,
    "472 - Comerț cu amănuntul al produselor alimentare, băuturilor și al produselor din tutun": false,
    "473 - Comerț cu amănuntul al carburanților pentru autovehicule": false,
    "474 - Comerț cu amănuntul al echipamentului informatic și de telecomunicații": false,
    "475 - Comerț cu amănuntul al altor produse casnice": false,
    "476 - Comerț cu amănuntul de bunuri culturale și recreative": false,
    "477 - Comerț cu amănuntul al altor bunuri, cu excepția autovehiculelor și motocicletelor": false,
    "478 - Comerț cu amănuntul al autovehiculelor și motocicletelor; comerț cu amănuntul al pieselor și accesoriilor pentru autovehicule și motociclete": false,
    "479 - Activități de intermediere în comerțul cu amănuntul": false,
    "491 - Transporturi de călători pe calea ferată": false,
    "492 - Transporturi de marfă pe calea ferată": false,
    "493 - Alte transporturi terestre de călători": false,
    "494 - Transporturi rutiere de mărfuri și servicii de mutare": false,
    "495 - Transporturi prin conducte": false,
    "501 - Transporturi maritime și costiere de pasageri": false,
    "502 - Transporturi maritime și costiere de marfă": false,
    "503 - Transporturi de pasageri pe căi navigabile interioare": false,
    "504 - Transportul de marfă pe căi navigabile interioare": false,
    "511 - Transporturi aeriene de pasageri": false,
    "512 - Transporturi aeriene de marfă și transporturi spațiale": false,
    "521 - Depozitări": false,
    "522 - Activități anexe pentru transporturi": false,
    "523 - Activități de intermediere pentru transporturi": false,
    "531 - Activități poștale desfășurate sub obligativitatea serviciului universal": false,
    "532 - Alte activități poștale și de curier": false,
    "533 - Servicii de intermediere pentru activități poștale și de curier": false,
    "551 - Hoteluri și alte facilități de cazare similare": false,
    "552 - Facilități de cazare pentru vacanțe și perioade de scurtă durată": false,
    "553 - Parcuri pentru rulote, campinguri și tabere": false,
    "554 - Intermedieri pentru servicii de cazare": false,
    "559 - Alte servicii de cazare": false,
    "561 - Restaurante": false,
    "562 - Activități de alimentație (catering) pentru evenimente și alte servicii de alimentație": false,
    "563 - Baruri și alte activități de servire a băuturilor": false,
    "564 - Intermedieri pentru servicii de alimentație și de servire a băuturilor": false,
    "581 - Activități de editare a cărților, ziarelor, revistelor și alte activități de editare": false,
    "582 - Activități de editare a produselor software": false,
    "591 - Activități de producție cinematografică, video și de programe de televiziune": false,
    "592 - Activități de realizare a înregistrărilor audio și activități de editare muzicală": false,
    "601 - Activități de radiodifuziune, activități de distribuție de programe audio": false,
    "602 - Activități de difuzare a programelor de televiziune, activități de distribuție de programe video": false,
    "603 - Activități ale agențiilor de știri și de distribuție a altor conținuturi": false,
    "611 - Activități de telecomunicații prin rețele cu cablu, prin rețele fără cablu și prin satelit": false,
    "612 - Activități de revânzare a serviciilor de telecomunicații și servicii de intermediere pentru telecomunicații": false,
    "619 - Alte activități de telecomunicații": false,
    "621 - Activități de programare": false,
    "622 - Activități de consultanță în tehnologia informației și de management (gestiune și exploatare) almijloacelor de calcul": false,
    "629 - Alte activități de servicii privind tehnologia informației": false,
    "631 - Prelucrarea datelor, administrarea paginilor web și activități conexe": false,
    "639 - Activități ale portalurilor web și alte activități de servicii informaționale": false,
    "641 - Intermediere monetară": false,
    "642 - Activități ale holdingurilor și canalelor de finanțare": false,
    "643 - Activități ale fondurilor de investiții; fonduri mutuale și alte entități financiare similare": false,
    "649 - Alte activități de intermedieri financiare, exceptând activități de asigurări și fonduri de pensii": false,
    "651 - Activități de asigurări": false,
    "652 - Activități de reasigurare": false,
    "653 - Activități ale fondurilor de pensii (cu excepția celor din sistemul public de asigurări sociale)": false,
    "661 - Activități auxiliare intermedierilor financiare, cu excepția activităților de asigurări și fonduri de pensii": false,
    "662 - Activități auxiliare de asigurări și fonduri de pensii": false,
    "663 - Activități de administrare a fondurilor": false,
    "681 - Cumpărarea și vânzarea de bunuri imobiliare proprii și dezvoltare imobiliară": false,
    "682 - Închirierea și subînchirierea bunurilor imobiliare proprii sau închiriate": false,
    "683 - Activități imobiliare pe bază de comision sau contract": false,
    "691 - Activități juridice": false,
    "692 - Activități de contabilitate și audit financiar; consultanță în domeniul fiscal": false,
    "701 - Activități ale direcțiilor (centralelor), birourilor administrative centralizate": false,
    "702 - Activități de consultanță în afaceri și management": false,
    "711 - Activități de arhitectură, inginerie și servicii de consultanță tehnică legate de acestea": false,
    "712 - Activități de testări și analize tehnice": false,
    "721 - Cercetare-dezvoltare în științe naturale și inginerie": false,
    "722 - Cercetare-dezvoltare în științe sociale și umaniste": false,
    "731 - Publicitate": false,
    "732 - Activități de studiere a pieței și de sondare a opiniei publice": false,
    "733 - Activități în domeniul relațiilor publice și al comunicării": false,
    "741 - Activități de design specializat": false,
    "742 - Activități fotografice": false,
    "743 - Activități de traducere scrisă și orală (interpreți)": false,
    "749 - Alte activități profesionale, științifice și tehnice n.c.a.": false,
    "750 - Activități veterinare": false,
    "771 - Activități de închiriere și leasing cu autovehicule": false,
    "772 - Activități de închiriere și leasing cu bunuri personale și gospodărești": false,
    "773 - Activități de închiriere și leasing cu alte mașini, echipamente și bunuri tangibile": false,
    "774 - Leasing cu bunuri intangibile (cu excepția lucrărilor care fac obiectul drepturilor de autor)": false,
    "775 - Servicii de intermediere pentru închirierea și leasingul de bunuri corporale și bunuri intangibile (exceptând financiare)": false,
    "781 - Activități ale agențiilor de plasare a forței de muncă": false,
    "782 - Activități ale agențiilor de plasare temporară a forței de muncă și furnizarea altor resurse umane": false,
    "791 - Activități ale agențiilor turistice și ale tur-operatorilor": false,
    "799 - Alte servicii de rezervare și asistență turistică": false,
    "800 - Activități de investigații și protecție": false,
    "811 - Activități de servicii-suport combinate": false,
    "812 - Activități de curățenie": false,
    "813 - Activități de întreținere peisagistică": false,
    "821 - Activități de secretariat și servicii-suport": false,
    "822 - Activități ale centrelor de intermediere telefonică (call center)": false,
    "823 - Activități de organizare a expozițiilor, târgurilor și congreselor": false,
    "824 - Activități de intermediere pentru servicii-suport pentru întreprinderi n.c.a.": false,
    "829 - Activități de servicii-suport pentru întreprinderi n.c.a.": false,
    "841 - Administrație publică generală, economică și socială": false,
    "842 - Activități de servicii pentru societate": false,
    "843 - Activități de protecție socială obligatorie": false,
    "851 - Învățământ preșcolar": false,
    "852 - Învățământ primar": false,
    "853 - Învățământ secundar": false,
    "854 - Învățământ superior": false,
    "855 - Alte forme de învățământ": false,
    "856 - Activități de servicii-suport pentru învățământ": false,
    "861 - Activități de asistență spitalicească": false,
    "862 - Activități de asistență medicală ambulatorie și stomatologică": false,
    "869 - Alte activități referitoare la sănătatea umană": false,
    "871 - Activități ale centrelor de îngrijire medicală": false,
    "872 - Activități ale centrelor de recuperare psihică și de dezintoxicare, exclusiv spitale": false,
    "873 - Activități ale căminelor de bătrâni și ale căminelor pentru persoane cu dizabilități aflate în incapacitate de a se îngriji singure": false,
    "879 - Alte activități de asistență socială, cu cazare": false,
    "881 - Activități de asistență socială, fără cazare, pentru bătrâni și pentru persoane cu dizabilități aflate în incapacitate de a se îngriji singure": false,
    "889 - Alte activități de asistență socială, fără cazare": false,
    "901 - Activități de creație artistică": false,
    "902 - Activități de interpretare artistică (spectacole)": false,
    "903 - Activități-suport pentru creație și interpretare artistică": false,
    "911 - Activități ale bibliotecilor și arhivelor": false,
    "912 - Activități ale muzeelor, colecțiilor, siturilor și monumentelor istorice": false,
    "913 - Activități de conservare, restaurare și alte activități-suport pentru patrimoniul cultural": false,
    "914 - Activități ale grădinilor botanice, zoologice și ale rezervațiilor naturale": false,
    "920 - Activități de jocuri de noroc și pariuri": false,
    "931 - Activități sportive": false,
    "932 - Alte activități recreative și distractive": false,
    "941 - Activități ale organizațiilor economice, patronale și profesionale": false,
    "942 - Activități ale sindicatelor salariaților": false,
    "949 - Alte activități asociative": false,
    "951 - Repararea și întreținerea calculatoarelor și a echipamentelor de comunicații": false,
    "952 - Repararea și întreținerea articolelor personale și de uz gospodăresc": false,
    "953 - Repararea și întreținerea autovehiculelor și motocicletelor": false,
    "954 - Servicii de intermediere pentru repararea și întreținerea calculatoarelor, a articolelor personale și de uz gospodăresc, a autovehiculelor și motocicletelor": false,
    "961 - Spălarea și curățarea articolelor textile și a produselor din blană": false,
    "962 - Coafură, activități de înfrumusețare, tratamente spa și alte activități similare": false,
    "963 - Activități de pompe funebre și similare": false,
    "964 - Activități de intermediere pentru servicii personale": false,
    "969 - Alte servicii personale": false,
    "970 - Activități ale gospodăriilor private în calitate de angajator de personal casnic": false,
    "981 - Activități ale gospodăriilor private de producere de bunuri destinate consumului propriu": false,
    "982 - Activități ale gospodăriilor private de producere de servicii pentru scopuri proprii": false,
    "990 - Activități ale organizațiilor și organismelor extrateritoriale": false,
  });
  const [diviziuni, setDiviziuni] = useState({
    "01 - Agricultură, vânătoare și servicii anexe": false,
    "02 - Silvicultură și exploatare forestieră": false,
    "03 - Pescuitul și acvacultura": false,
    "05 - Extracția cărbunelui superior și inferior": false,
    "06 - Extracția petrolului brut și a gazelor naturale": false,
    "07 - Extracția minereurilor metalifere": false,
    "08 - Alte activități extractive": false,
    "09 - Activități de servicii anexe extracției": false,
    "10 - Industria alimentară": false,
    "11 - Fabricarea băuturilor": false,
    "12 - Fabricarea produselor din tutun": false,
    "13 - Fabricarea produselor textile": false,
    "14 - Fabricarea articolelor de îmbrăcăminte": false,
    "15 - Tăbăcirea și finisarea pieilor; fabricarea articolelor de voiaj și marochinărie, harnașamentelor și încălțămintei; prepararea și vopsirea blănurilor": false,
    "16 - Prelucrarea lemnului, fabricarea produselor din lemn și plută, cu excepția mobilei; fabricarea articolelor din paie și din alte materiale vegetale împletite": false,
    "17 - Fabricarea hârtiei și a produselor din hârtie": false,
    "18 - Tipărire și reproducerea pe suporți a înregistrărilor": false,
    "19 - Fabricarea produselor de cocserie și a produselor obținute din prelucrarea țițeiului": false,
    "20 - Fabricarea substanțelor și a produselor chimice": false,
    "21 - Fabricarea produselor farmaceutice de bază și a preparatelor farmaceutice": false,
    "22 - Fabricarea produselor din cauciuc și mase plastice": false,
    "23 - Fabricarea altor produse din minerale nemetalice": false,
    "24 - Industria metalurgică": false,
    "25 - Industria construcțiilor metalice și a produselor din metal, exclusiv mașini, utilaje și instalații": false,
    "26 - Fabricarea calculatoarelor și a produselor electronice și optice": false,
    "27 - Fabricarea echipamentelor electrice": false,
    "28 - Fabricarea de mașini, utilaje și echipamente n.c.a.": false,
    "29 - Fabricarea autovehiculelor de transport rutier, a remorcilor și semiremorcilor": false,
    "30 - Fabricarea altor mijloace de transport": false,
    "31 - Fabricarea de mobilă": false,
    "32 - Alte activități industriale": false,
    "33 - Repararea, întreținerea și instalarea mașinilor și echipamentelor": false,
    "35 - Producția și furnizarea de energie electrică și termică, gaze, apă caldă și aer condiționat": false,
    "36 - Captarea, tratarea și distribuția apei": false,
    "37 - Colectarea și epurarea apelor uzate": false,
    "38 - Colectarea, tratarea și eliminarea deșeurilor; activități de recuperare a materialelor reciclabile": false,
    "39 - Activități și servicii de decontaminare": false,
    "41 - Construcții de clădiri": false,
    "42 - Lucrări de geniu civil": false,
    "43 - Lucrări speciale de construcții": false,
    "46 - Comerț cu ridicata": false,
    "47 - Comerț cu amănuntul": false,
    "49 - Transporturi terestre și transporturi prin conducte": false,
    "50 - Transporturi pe apă": false,
    "51 - Transporturi aeriene": false,
    "52 - Depozitare și activități auxiliare pentru transporturi": false,
    "53 - Activități de poștă și de curier": false,
    "55 - Hoteluri și alte facilități de cazare": false,
    "56 - Restaurante și alte activități de servicii de alimentație": false,
    "58 - Activități de editare": false,
    "59 - Activități de producție cinematografică, video și de programe de televiziune; înregistrări audio și activități de editare muzicală": false,
    "60 - Activități de difuzare și transmitere de programe, agenții de știri și alte activități de distribuție de conținut": false,
    "61 - Telecomunicații": false,
    "62 - Activități de programare și activități de consultanță în tehnologia informației": false,
    "63 - Activități ale portalurilor web, prelucrarea datelor, administrarea paginilor web și activități conexe": false,
    "64 - Intermedieri financiare, cu excepția activităților de asigurări și ale fondurilor de pensii": false,
    "65 - Activități de asigurări, reasigurări și ale fondurilor de pensii (cu excepția celor din sistemul public de asigurări sociale)": false,
    "66 - Activități auxiliare pentru intermedieri financiare, activități de asigurare și fonduri de pensii": false,
    "68 - Tranzacții imobiliare": false,
    "69 - Activități juridice și de contabilitate": false,
    "70 - Activități ale direcțiilor (centralelor), birourilor administrative centralizate; activități de management și de consultanță în management": false,
    "71 - Activități de arhitectură și inginerie; activități de testări și analiză tehnică": false,
    "72 - Cercetare-dezvoltare": false,
    "73 - Publicitate, activități de studiere a pieței și relații publice": false,
    "74 - Alte activități profesionale, științifice și tehnice": false,
    "75 - Activități veterinare": false,
    "77 - Activități de închiriere și leasing": false,
    "78 - Activități de servicii privind forța de muncă": false,
    "79 - Activități ale agențiilor turistice și a tur-operatorilor; alte servicii de rezervare și asistență turistică": false,
    "80 - Activități de investigații și protecție": false,
    "81 - Activități de peisagistică și servicii pentru clădiri": false,
    "82 - Activități de secretariat, servicii-suport și alte activități de servicii prestate în principal întreprinderilor": false,
    "84 - Administrație publică și apărare; asigurări sociale din sistemul public": false,
    "85 - Învățământ": false,
    "86 - Activități referitoare la sănătatea umană": false,
    "87 - Servicii combinate de îngrijire medicală și asistență socială, cu cazare": false,
    "88 - Activități de asistență socială, fără cazare": false,
    "90 - Activități de creație și interpretare artistică": false,
    "91 - Activități ale bibliotecilor, arhivelor, muzeelor și alte activități culturale": false,
    "92 - Activități de jocuri de noroc și pariuri": false,
    "93 - Activități sportive, recreative și distractive": false,
    "94 - Activități asociative diverse": false,
    "95 - Repararea și întreținerea calculatoarelor, a articolelor personale și de uz gospodăresc, a autovehiculelor și motocicletelor": false,
    "96 - Alte activități de servicii": false,
    "97 - Activități ale gospodăriilor private în calitate de angajator de personal casnic": false,
    "98 - Activități ale gospodăriilor private de producere de bunuri și servicii destinate consumului propriu": false,
    "99 - Activități ale organizațiilor și organismelor extrateritoriale": false,
  });
  const [searchSectiune, setSearchSectiune] = useState({
    "A - Agricultură, silvicultură și pescuit": false,
    "B - Industria extractivă": false,
    "C - Industria prelucrătoare": false,
    "D - Producția și furnizarea de energie electrică și termică, gaze, apă caldă și aer condiționat": false,
    "E - Distribuția apei; salubritate, gestionarea deșeurilor, activități de decontaminare": false,
    "F - Construcții": false,
    "G - Comerț cu ridicata și cu amănuntul": false,
    "H - Transport și depozitare": false,
    "I - Hoteluri și restaurante": false,
    "J - Activități de editare; difuzarea de programe de radio și televiziune; activități de producție și distribuție de conținuturi": false,
    "K - Telecomunicații; activități de programare și de consultanță în tehnologia informației; alte servicii informaționale": false,
    "L - Intermedieri financiare și asigurări": false,
    "M - Tranzacții imobiliare": false,
    "N - Activități profesionale, științifice și tehnice": false,
    "O - Activități de servicii administrative și activități de servicii-suport": false,
    "P - Administrație publică și apărare; asigurări sociale din sistemul public": false,
    "Q - Învățământ": false,
    "R - Sănătate și asistență socială": false,
    "S - Activități de spectacole, culturale, sportive și recreative": false,
    "T - Alte activități de servicii": false,
    "U - Activități ale gospodăriilor private în calitate de angajator de personal casnic": false,
    "V - Activități ale organizațiilor și organismelor extrateritoriale": false,
  });
  const [portie, setPortie] = useState({
    sectiune: false,
    diviziune: false,
    grupa: false,
    caenuri: false,
  });
  const [searchTerm, setSearchTerm] = useState(""); // State for the search bar input
  const [searchDiviziune, setSearchDiviziune] = useState(""); // Search for Diviziune
  const [searchGrupe, setSearchGrupe] = useState("");
  const [searchCaenuri, setSearchCaenuri] = useState("");
  const [rezultat, setRezultat] = useState({
    sectiune_rezultat: [],
    diviziune_rezultat: [],
    grupa_rezultat: [],
    caen_rezultat: [],
  });

  const handleRezultat = () => {
    setRezultat((prevState) => ({
      ...prevState,
      sectiune_rezultat: Object.keys(searchSectiune).filter(
        (key) => searchSectiune[key] === true
      ),
      diviziune_rezultat: Object.keys(diviziuni).filter(
        (key) => diviziuni[key] === true
      ),
      grupa_rezultat: Object.keys(grupe).filter((key) => grupe[key] === true),
      caen_rezultat: Object.keys(caenuri).filter(
        (key) => caenuri[key] === true
      ),
    }));
    handleRezAfis();
    setPortie({
      sectiune: false,
      diviziune: false,
      grupa: false,
      caenuri: false,
    });
  };

  const handleSearchSectiune = (sectiune) => {
    setSearchSectiune((prevState) => ({
      ...prevState,
      [sectiune]: !prevState[sectiune],
    }));
  };

  const handleDiviziune = (diviziune) => {
    setDiviziuni((prevState) => ({
      ...prevState,
      [diviziune]: !prevState[diviziune],
    }));
  };

  const handleGrupa = (grupa) => {
    setGrupe((prevState) => ({
      ...prevState,
      [grupa]: !prevState[grupa],
    }));
  };

  const handleCaen = (caen) => {
    setCaenuri((prevState) => ({
      ...prevState,
      [caen]: !prevState[caen],
    }));
  };

  const handleToggleAllSectiuni = (value) => {
    setSearchSectiune((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = value;
      });
      return newState;
    });
  };

  const handleToggleAllDiviziuni = (value) => {
    setDiviziuni((prevState) => {
      const newState = { ...prevState };

      filteredDiviziuni.forEach((diviziune) => {
        if (newState.hasOwnProperty(diviziune)) {
          newState[diviziune] = value;
        }
      });
      return newState;
    });
  };

  const handleToggleAllGrupe = (value) => {
    setGrupe((prevState) => {
      const newState = { ...prevState };

      filteredGrupe.forEach((grupa) => {
        if (newState.hasOwnProperty(grupa)) {
          newState[grupa] = value;
        }
      });

      return newState;
    });
  };
  const handleToggleAllCaenuri = (value) => {
    setCaenuri((prevState) => {
      const newState = { ...prevState };

      filteredCaen.forEach((caen) => {
        if (newState.hasOwnProperty(caen)) {
          newState[caen] = value;
        }
      });

      return newState;
    });
  };

  const handlePortie = (selectedPortie) => {
    setPortie((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === selectedPortie ? !prevState[key] : false;
        return acc;
      }, {});

      return newState;
    });
    setRezultatAfis(false);
  };

  const uniqueDiviziuni = Array.from(
    new Set(
      caens
        .filter((item) => searchSectiune[item.Sectiunea])
        .map((item) => item.Diviziunea)
    )
  );

  const uniqueGrupe = Array.from(
    new Set(
      caens
        .filter((item) => diviziuni[item.Diviziunea])
        .map((item) => item.Grupa)
    )
  );

  const uniqueCaen = Array.from(
    new Set(
      caens.filter((item) => grupe[item.Grupa]).map((item) => item.Codul_caen)
    )
  );

  const filteredSectiuni = [
    ...new Set(caens.map((caen) => caen.Sectiunea)),
  ].filter((sectiune) =>
    sectiune.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDiviziuni = uniqueDiviziuni.filter((diviziune) =>
    diviziune.toLowerCase().includes(searchDiviziune.toLowerCase())
  );

  const filteredGrupe = uniqueGrupe.filter((grupa) =>
    grupa.toLowerCase().includes(searchGrupe.toLowerCase())
  );

  const filteredCaen = uniqueCaen.filter((caen) =>
    caen.toLowerCase().includes(searchCaenuri.toLowerCase())
  );

  const rezultatRef = useRef(null);

  const handleCopyContent = () => {
    const maxLength = Math.max(
      rezultat.sectiune_rezultat.length,
      rezultat.diviziune_rezultat.length,
      rezultat.grupa_rezultat.length,
      rezultat.caen_rezultat.length
    );

    let rows = [];
    rows.push(["Sectiune", "Diviziune", "Grupa", "Caen"].join("\t")); // Header row

    for (let i = 0; i < maxLength; i++) {
      let row = [
        rezultat.sectiune_rezultat[i] || "", // Avoid undefined values
        rezultat.diviziune_rezultat[i] || "",
        rezultat.grupa_rezultat[i] || "",
        rezultat.caen_rezultat[i] || "",
      ];
      rows.push(row.join("\t")); // Join values with a tab for Excel columns
    }

    const textToCopy = rows.join("\n"); // Join rows with new line

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Content copied in Excel format!");
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleCopyContentCaen = () => {
    const maxLength = Math.max(rezultat.caen_rezultat.length);

    let rows = [];
    rows.push(["Caen"].join("\t")); // Header row

    for (let i = 0; i < maxLength; i++) {
      let row = [rezultat.caen_rezultat[i] || ""];
      rows.push(row.join("\t")); // Join values with a tab for Excel columns
    }

    const textToCopy = rows.join("\n"); // Join rows with new line

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Caen copied in Excel format!");
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="layout">
      <div className="navbar">
        <button onClick={() => handlePortie("sectiune")}>Sectiune</button>
        <button onClick={() => handlePortie("diviziune")}>Diviziune</button>
        <button onClick={() => handlePortie("grupa")}>Grupa</button>
        <button onClick={() => handlePortie("caenuri")}>Caen</button>
        <button
          onClick={handleRezultat}
          style={{ marginTop: "50px" }}
          className="result-btn"
        >
          Rezultat
        </button>
        <button onClick={handleCopyContent} className="copy-btn">
          Copiaza tot
        </button>
        <button onClick={handleCopyContentCaen} className="copy-btn">
          Copiaza Cod Caen
        </button>
      </div>
      <div className="content-layout">
        <div className="portie">
          <div>
            {portie.sectiune && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Search Sectiune..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button onClick={() => handleToggleAllSectiuni(true)}>
                      Select all
                    </button>
                    <button onClick={() => handleToggleAllSectiuni(false)}>
                      Clear
                    </button>
                  </div>
                </div>
                {filteredSectiuni.map((sectiune) => (
                  <div className="option" key={sectiune}>
                    <div
                      className="check"
                      onClick={() => handleSearchSectiune(sectiune)}
                      style={{
                        backgroundColor: searchSectiune[sectiune]
                          ? "#646cff"
                          : "",
                      }}
                    ></div>
                    <p>{sectiune}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.diviziune && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Diviziunea..."
                    value={searchDiviziune}
                    onChange={(e) => setSearchDiviziune(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button onClick={() => handleToggleAllDiviziuni(true)}>
                      Select all
                    </button>
                    <button onClick={() => handleToggleAllDiviziuni(false)}>
                      Clear
                    </button>
                  </div>
                </div>
                {filteredDiviziuni.map((diviziune, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleDiviziune(diviziune)}
                      style={{
                        backgroundColor: diviziuni[diviziune] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{diviziune}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.grupa && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Grupa..."
                    value={searchGrupe}
                    onChange={(e) => setSearchGrupe(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button onClick={() => handleToggleAllGrupe(true)}>
                      Select all
                    </button>
                    <button onClick={() => handleToggleAllGrupe(false)}>
                      Clear
                    </button>
                  </div>
                </div>
                {filteredGrupe.map((grupa, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleGrupa(grupa)}
                      style={{
                        backgroundColor: grupe[grupa] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{grupa}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="portie">
          <div>
            {portie.caenuri && (
              <div className="modal">
                <div className="modal-header">
                  <input
                    type="text"
                    placeholder="Grupa..."
                    value={searchCaenuri}
                    onChange={(e) => setSearchCaenuri(e.target.value)}
                    style={{
                      margin: "10px 0",
                      padding: "5px",
                      width: "50%",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <div>
                    <button onClick={() => handleToggleAllCaenuri(true)}>
                      Select all
                    </button>
                    <button onClick={() => handleToggleAllCaenuri(false)}>
                      Clear
                    </button>
                  </div>
                </div>
                {filteredCaen.map((caen, index) => (
                  <div className="option" key={index}>
                    <div
                      className="check"
                      onClick={() => handleCaen(caen)}
                      style={{
                        backgroundColor: caenuri[caen] ? "#646cff" : "",
                      }}
                    ></div>
                    <p>{caen}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="rezultat" ref={rezultatRef}>
            {rezultatAfis && (
              <>
                <div className="sectiune">
                  <h3>Sectiune</h3>
                  {rezultat.sectiune_rezultat.map((sec, key) => (
                    <p key={key}>{sec}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Diviziune</h3>
                  {rezultat.diviziune_rezultat.map((div, key) => (
                    <p key={key}>{div}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Grupa</h3>
                  {rezultat.grupa_rezultat.map((grp, key) => (
                    <p key={key}>{grp}</p>
                  ))}
                </div>
                <div className="sectiune">
                  <h3>Caen</h3>
                  {rezultat.caen_rezultat.map((cn, key) => (
                    <p key={key}>{cn}</p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
