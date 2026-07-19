// SUM-FORLØBET: det uregelmæssige verbum "esse" (at være) — sum, es, est,
// sumus, estis, sunt. Bygget som en trinvis progression fra "hvad betyder
// sum overhovedet" til at kunne udfylde hele bøjningstabellen udenad.
// Alle sætninger er skrevet fra bunden til APLOFT.
import { mc, ck, wr, bs } from "../builders";
import type { Task } from "../../types";

const c = "sumesse" as const;

export const SUMESSE_TASKS: Task[] = [
  // --- Trin 1: Hvad betyder "sum"? ---------------------------------------
  mc("latin-sum-1", c, "Hvad betyder det latinske verbum 'esse' i navnemåde (infinitiv)?", ["at have", "at være", "at gøre", "at give"], 1, "'Esse' er navnemåden (infinitiv) af det latinske grundverbum for 'at være'. Det bøjes meget uregelmæssigt."),
  mc("latin-sum-2", c, "'Sum' er 1. person ental af 'esse'. Hvad betyder 'sum'?", ["jeg er", "du er", "han/hun/den er", "vi er"], 0, "'Sum' = 'jeg er'. Det er den form, du bruger, når DU selv er subjektet."),
  mc("latin-sum-3", c, "'Es' er 2. person ental af 'esse'. Hvad betyder 'es'?", ["jeg er", "du er", "han/hun/den er", "de er"], 1, "'Es' = 'du er'. Bemærk at det kun er ét bogstav anderledes end 'est' — nem at forveksle, så øv dig ekstra på den!"),
  mc("latin-sum-4", c, "'Est' er 3. person ental af 'esse'. Hvad betyder 'est'?", ["jeg er", "du er", "han/hun/den er", "I er"], 2, "'Est' = 'han/hun/den er'. Det er den mest brugte form, fordi de fleste latinske sætninger handler om en 'han/hun/den'."),
  mc("latin-sum-5", c, "Hvilket latinsk pronomen svarer til dansk 'jeg' og bruges (valgfrit) sammen med 'sum'?", ["ego", "tu", "is", "nos"], 0, "'Ego' betyder 'jeg'. Det bruges kun til at lægge ekstra vægt på, HVEM der er — verbet 'sum' viser det allerede."),
  mc(
    "latin-sum-6",
    c,
    "Hvorfor skriver man ofte IKKE et selvstændigt pronomen foran 'sum', 'es' eller 'est', selvom dansk altid siger 'jeg er', 'du er'?",
    [
      "Fordi verbets endelse allerede viser, hvem der er subjekt",
      "Fordi latin slet ikke har ord for 'jeg' og 'du'",
      "Fordi det er en stavefejl at skrive pronomenet",
      "Fordi 'esse' ikke kan have et subjekt",
    ],
    0,
    "Latinske verbers endelser ('-m/-o', '-s', '-t' osv.) fortæller i sig selv, hvilken person der er tale om — derfor er selve pronomenet ofte overflødigt.",
  ),
  ck("latin-sum-7", c, "Klik på verbet (udsagnsordet) i sætningen 'Ego sum magister' (Jeg er lærer).", "Ego sum magister", [1], "'Sum' er verbet ('jeg er'). 'Ego' er det valgfrie pronomen, og 'magister' er navneordet, der beskriver subjektet."),
  wr("latin-sum-8", c, "Skriv den latinske form af 'jeg er'.", "Hvordan siger man 'jeg er' på latin?", "sum", "'Jeg er' på latin er 'sum' — 1. person ental af 'esse'.", []),

  // --- Trin 2: Ental i sætninger -------------------------------------------
  wr("latin-sum-9", c, "Skriv den latinske form af 'du er'.", "Hvordan siger man 'du er' på latin?", "es", "'Du er' på latin er 'es' — 2. person ental af 'esse'.", []),
  wr("latin-sum-10", c, "Skriv den latinske form af 'han/hun/den er'.", "Hvordan siger man 'han/hun/den er' på latin?", "est", "'Han/hun/den er' på latin er 'est' — 3. person ental af 'esse'.", []),
  mc("latin-sum-11", c, "'Puella laeta est.' (laeta = glad) Hvad betyder sætningen?", ["Pigen er glad", "Pigen elsker glæden", "Den glade pige løber", "Pigen var glad"], 0, "'Puella' = pigen (subjekt, nominativ), 'laeta' = glad (beskriver pigen), 'est' = er. Ordret: 'Pigen glad er'."),
  mc("latin-sum-12", c, "'Magister bonus est.' (bonus = god) Hvad betyder sætningen?", ["Læreren er god", "Den gode lærer ser", "Læreren har en god bog", "Lærerne er gode"], 0, "'Magister' = læreren, 'bonus' = god, 'est' = er. Latin sætter ofte verbet sidst: 'Læreren god er'."),
  wr("latin-sum-13", c, "Udfyld sætningen med den rigtige form af 'esse'.", "'Puer ___ laetus.' (Drengen er glad — brug 3. person ental af 'esse'.)", "est", "'Puer' er 3. person ental (han), så verbet skal være 'est'.", []),
  wr("latin-sum-14", c, "Udfyld sætningen med den rigtige form af 'esse'.", "'Ego ___ magister.' (Jeg er lærer — brug 1. person ental af 'esse'.)", "sum", "'Ego' er 1. person ental, så verbet skal være 'sum'.", []),
  wr("latin-sum-15", c, "Udfyld sætningen med den rigtige form af 'esse'.", "'Tu ___ bonus.' (Du er god — brug 2. person ental af 'esse'.)", "es", "'Tu' er 2. person ental, så verbet skal være 'es'.", []),
  mc(
    "latin-sum-16",
    c,
    "Hvilken kasus står navneordet 'magister' i, i sætningen 'Ego sum magister' (Jeg er lærer)?",
    ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
    0,
    "Efter 'esse' (et kopulaverbum, ligesom dansk 'er'/'bliver') står navneordet i samme kasus som subjektet — altså nominativ. Det svarer til et subjektsprædikat på dansk.",
  ),

  // --- Trin 3: Flertal -------------------------------------------------------
  mc("latin-sum-17", c, "'Sumus' er 1. person flertal af 'esse'. Hvad betyder 'sumus'?", ["vi er", "I er", "de er", "han er"], 0, "'Sumus' = 'vi er' — 1. person flertal."),
  mc("latin-sum-18", c, "'Estis' er 2. person flertal af 'esse'. Hvad betyder 'estis'?", ["vi er", "I er", "de er", "du er"], 1, "'Estis' = 'I er' — 2. person flertal (flere personer, du taler til)."),
  mc("latin-sum-19", c, "'Sunt' er 3. person flertal af 'esse'. Hvad betyder 'sunt'?", ["vi er", "I er", "de er", "han er"], 2, "'Sunt' = 'de er' — 3. person flertal."),
  wr("latin-sum-20", c, "Skriv den latinske form af 'vi er'.", "Hvordan siger man 'vi er' på latin?", "sumus", "'Vi er' på latin er 'sumus' — 1. person flertal af 'esse'.", []),
  wr("latin-sum-21", c, "Skriv den latinske form af 'I er'.", "Hvordan siger man 'I er' (flertal, til flere personer) på latin?", "estis", "'I er' på latin er 'estis' — 2. person flertal af 'esse'.", []),
  wr("latin-sum-22", c, "Skriv den latinske form af 'de er'.", "Hvordan siger man 'de er' på latin?", "sunt", "'De er' på latin er 'sunt' — 3. person flertal af 'esse'.", []),
  mc("latin-sum-23", c, "'Servi sunt fessi.' (fessi = trætte) Hvad betyder sætningen?", ["Slaverne er trætte", "Slaven er træt", "Vi er trætte", "Slaverne var trætte"], 0, "'Servi' = slaverne (flertal), 'fessi' = trætte, 'sunt' = er (flertal). 'Servi ... sunt' skal stemme overens i tal (begge flertal)."),
  wr("latin-sum-24", c, "Udfyld sætningen med den rigtige form af 'esse'.", "'Nos ___ amici.' (Vi er venner — brug 1. person flertal af 'esse'.)", "sumus", "'Nos' (vi) er 1. person flertal, så verbet skal være 'sumus'.", []),

  // --- Trin 4: Byg hele tabellen selv ----------------------------------------
  wr("latin-sum-25", c, "Skriv formen for 1. person ental (jeg er) af 'esse'.", "1. person ental (jeg er):", "sum", "1. person ental af 'esse' er 'sum'.", []),
  wr("latin-sum-26", c, "Skriv formen for 2. person ental (du er) af 'esse'.", "2. person ental (du er):", "es", "2. person ental af 'esse' er 'es'.", []),
  wr("latin-sum-27", c, "Skriv formen for 3. person ental (han/hun/den er) af 'esse'.", "3. person ental (han/hun/den er):", "est", "3. person ental af 'esse' er 'est'.", []),
  wr("latin-sum-28", c, "Skriv formen for 1. person flertal (vi er) af 'esse'.", "1. person flertal (vi er):", "sumus", "1. person flertal af 'esse' er 'sumus'.", []),
  wr("latin-sum-29", c, "Skriv formen for 2. person flertal (I er) af 'esse'.", "2. person flertal (I er):", "estis", "2. person flertal af 'esse' er 'estis'.", []),
  wr("latin-sum-30", c, "Skriv formen for 3. person flertal (de er) af 'esse'.", "3. person flertal (de er):", "sunt", "3. person flertal af 'esse' er 'sunt'.", []),
  bs("latin-sum-31", c, "Byg den latinske sætning 'Vi er venner' (ordene skal stå i den mest almindelige latinske rækkefølge, med verbet sidst).", ["Nos", "amici", "sumus"], "Latin sætter ofte verbet sidst: 'Nos' (vi) + 'amici' (venner) + 'sumus' (er) = 'Nos amici sumus.'"),
  mc(
    "latin-sum-32",
    c,
    "Hvad er en god huskestrategi for at kunne 'sum, es, est, sumus, estis, sunt' udenad til prøven?",
    [
      "Remse dem højt i fast rækkefølge — ental (sum, es, est), så flertal (sumus, estis, sunt)",
      "Lære dem i en ny, tilfældig rækkefølge hver gang",
      "Springe 'es' og 'estis' over, fordi de ligner hinanden",
      "Det er ikke nødvendigt at kunne dem udenad til prøven",
    ],
    0,
    "En fast remse (ligesom gangetabellen) gør det nemt at hente formen frem i hovedet under en prøve: sum – es – est – sumus – estis – sunt.",
  ),
];
