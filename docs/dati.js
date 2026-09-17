window.DATI = {
 "generato": "13/09/2026 22:03",
 "lega": {
  "_fonte": "Opzioni di Lega su leghe.fantacalcio.it/san-lorenzo-26-27/settings, lette il 13/09/2026 tra le 16:55 e le 17:05. Solo l'admin puo' modificarle: se cambiano, rileggile dal sito.",
  "nome_lega": "San Lorenzo 26 27",
  "url_lega": "https://leghe.fantacalcio.it/san-lorenzo-26-27",
  "piattaforma": "Leghe Fantacalcio.it",
  "formato": "Classic",
  "competizione": "calendario a scontri diretti, 35 giornate (vedi config/calendario-lega.json)",
  "stagione": "2026-27",
  "partecipanti": 8,
  "budget": 500,
  "slot_per_ruolo": {
   "P": 3,
   "D": 8,
   "C": 8,
   "A": 6
  },
  "panchina": "libera, 14 giocatori",
  "rose_visibili": true,
  "under_obbligatori": false,
  "termine_schieramento": "5 minuti prima del calcio d'inizio della prima partita della giornata",
  "_nota_termine": "Opzione 'Timeout inserimento formazione' = 5 minuti. Confermato da Armando il 13/09/2026: il blocco scatta 5 minuti prima della PRIMA partita della giornata di Serie A, per tutta la formazione.",
  "formazioni_nascoste": true,
  "formazione_non_schierata": "recupera formazione precedente",
  "moduli_ammessi": [
   "3-4-3",
   "3-5-2",
   "4-3-3",
   "4-4-2",
   "4-5-1",
   "5-3-2",
   "5-4-1"
  ],
  "sostituzioni_automatiche": 5,
  "tipo_sostituzioni": "Traditional",
  "_nota_sostituzioni": "Traditional: i cambi avvengono solo tra pari ruolo, mai cambio modulo. Riserva d'ufficio disattivata.",
  "switch": "Plus",
  "_nota_switch": "Consente di scambiare un titolare con la riserva indicata se non scende in campo dal primo minuto. PLUS: la riserva indicata puo' essere di ruolo diverso, con eventuale cambio di modulo.",
  "modificatore_difesa": true,
  "modificatore_difesa_dettaglio": {
   "includi_portiere": true,
   "applicazione": "propria squadra",
   "tabella_media_voto": [
    {
     "da": null,
     "a": 6,
     "bonus": 0
    },
    {
     "da": 6,
     "a": 6.25,
     "bonus": 1
    },
    {
     "da": 6.25,
     "a": 6.5,
     "bonus": 2
    },
    {
     "da": 6.5,
     "a": 6.75,
     "bonus": 3
    },
    {
     "da": 6.75,
     "a": 7,
     "bonus": 4.5
    },
    {
     "da": 7,
     "a": null,
     "bonus": 6
    }
   ]
  },
  "_nota_modificatori": "Testo del sito: si applica schierando almeno 4 difensori; calcolo sul voto senza bonus/malus; con 'includi portiere' la media e' su portiere + 3 migliori difensori. Non si applica se in campo non ci sono almeno 4 voti validi di difensori (piu' il portiere); se dopo le sostituzioni restano 3 difensori non si applica; i 6 politici valgono come voti validi, le riserve d'ufficio in difesa no. 'da' incluso, 'a' escluso.",
  "modificatore_portiere": false,
  "modificatore_centrocampo": false,
  "modificatore_attacco": false,
  "modificatore_modulo": false,
  "fattore_rendimento": false,
  "fattore_fairplay": false,
  "fattore_capitano": false,
  "punteggi": {
   "gol_segnato": 3,
   "gol_subito": -1,
   "rigore_segnato": 3,
   "rigore_sbagliato": -3,
   "rigore_parato": 3,
   "assist": 1,
   "assist_gold": 1,
   "assist_soft": 0,
   "player_of_the_match": 1,
   "ammonizione": -0.5,
   "espulsione": -1,
   "autogol": -2,
   "porta_inviolata_portiere": 1,
   "gol_vittoria": 0,
   "gol_pareggio": 0
  },
  "differenzia_punteggi_per_ruolo": false,
  "fonte_voti": "Fantacalcio",
  "ammonito_senza_voto": "non sostituito, fantavoto 5.5",
  "soglie_gol": {
   "primo_gol": 66,
   "passo": 5,
   "_nota": "66 = 1 gol, 71 = 2, 76 = 3, 81 = 4, 86 = 5, ... poi un gol ogni 5 punti in piu'."
  },
  "limita_vittoria": false,
  "limita_pareggio": false,
  "autogol_squadra": false,
  "preferenze": {
   "modulo_preferito": "4-3-3",
   "avvisa_diffidati": true,
   "avvisa_doppi_impegni": true
  }
 },
 "rosa": {
  "stagione": "2026-27",
  "aggiornato": "13/09/2026",
  "squadra_fanta": "FC Tremoooooon",
  "allenatori": "Armando e Mirko (gestione condivisa)",
  "fonte": "in/PHOTO-2026-09-04-23-02-42.jpg (riepilogo rose post-asta fatto da un compagno di lega, 04/09/2026). Nessun export della console d'asta.",
  "_note": "quotazione, fm_scorsa, presenze_scorsa e rigorista non presenti nella fonte: lasciati null, non stimati. mv_foto/fm_foto e fvm sono i valori come appaiono nella foto del 04/09/2026. Rosa confermata da Armando il 13/09/2026.",
  "crediti_spesi": 484,
  "crediti_residui": 16,
  "giocatori": [
   {
    "nome": "Svilar",
    "squadra": "Roma",
    "ruolo": "P",
    "pagato": 40,
    "quotazione": null,
    "fvm": 43,
    "mv_foto": 6.25,
    "fm_foto": 6.25,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Maignan",
    "squadra": "Milan",
    "ruolo": "P",
    "pagato": 30,
    "quotazione": null,
    "fvm": 26,
    "mv_foto": 6.0,
    "fm_foto": 5.5,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Torriani",
    "squadra": "Milan",
    "ruolo": "P",
    "pagato": 1,
    "quotazione": null,
    "fvm": 1,
    "mv_foto": 0.0,
    "fm_foto": 0.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Dimarco",
    "squadra": "Inter",
    "ruolo": "D",
    "pagato": 65,
    "quotazione": null,
    "fvm": 120,
    "mv_foto": 6.25,
    "fm_foto": 6.25,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Gila",
    "squadra": "Milan",
    "ruolo": "D",
    "pagato": 15,
    "quotazione": null,
    "fvm": 16,
    "mv_foto": 6.5,
    "fm_foto": 6.5,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa",
    "nota": "Squadra corretta da Armando il 13/09/2026 (nella foto del 04/09 era Lazio). Trasferimento Lazio -> Milan ufficiale a luglio 2026: eurosport.it, lazialita.com."
   },
   {
    "nome": "Spinazzola",
    "squadra": "Napoli",
    "ruolo": "D",
    "pagato": 10,
    "quotazione": null,
    "fvm": 13,
    "mv_foto": 5.75,
    "fm_foto": 5.5,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Rrahmani",
    "squadra": "Napoli",
    "ruolo": "D",
    "pagato": 8,
    "quotazione": null,
    "fvm": 26,
    "mv_foto": 6.25,
    "fm_foto": 6.75,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Valle",
    "squadra": "Como",
    "ruolo": "D",
    "pagato": 8,
    "quotazione": null,
    "fvm": 11,
    "mv_foto": 6.0,
    "fm_foto": 6.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Zappacosta",
    "squadra": "Atalanta",
    "ruolo": "D",
    "pagato": 8,
    "quotazione": null,
    "fvm": 10,
    "mv_foto": 6.0,
    "fm_foto": 6.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Mina",
    "squadra": "Cagliari",
    "ruolo": "D",
    "pagato": 1,
    "quotazione": null,
    "fvm": 10,
    "mv_foto": 0.0,
    "fm_foto": 0.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Valdepenas",
    "squadra": "Fiorentina",
    "ruolo": "D",
    "pagato": 1,
    "quotazione": null,
    "fvm": 8,
    "mv_foto": 5.0,
    "fm_foto": 5.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa",
    "nota": "Ruolo D confermato da Armando il 13/09/2026 (anche sul sito della lega e' tra i difensori). Una notizia letta dalla routine del 13/09 lo indicava come secondo portiere della Fiorentina: probabile confusione con un omonimo, non cambiare ruolo."
   },
   {
    "nome": "McTominay",
    "squadra": "Napoli",
    "ruolo": "C",
    "pagato": 72,
    "quotazione": null,
    "fvm": 110,
    "mv_foto": 5.75,
    "fm_foto": 5.75,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Barella",
    "squadra": "Inter",
    "ruolo": "C",
    "pagato": 25,
    "quotazione": null,
    "fvm": 41,
    "mv_foto": 6.5,
    "fm_foto": 7.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Zaniolo",
    "squadra": "Udinese",
    "ruolo": "C",
    "pagato": 17,
    "quotazione": null,
    "fvm": 40,
    "mv_foto": 6.5,
    "fm_foto": 6.5,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Bernardeschi",
    "squadra": "Bologna",
    "ruolo": "C",
    "pagato": 16,
    "quotazione": null,
    "fvm": 14,
    "mv_foto": 6.5,
    "fm_foto": 6.5,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Baldanzi",
    "squadra": "Genoa",
    "ruolo": "C",
    "pagato": 6,
    "quotazione": null,
    "fvm": 14,
    "mv_foto": 5.75,
    "fm_foto": 5.75,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Samardzic",
    "squadra": "Atalanta",
    "ruolo": "C",
    "pagato": 4,
    "quotazione": null,
    "fvm": 22,
    "mv_foto": 6.5,
    "fm_foto": 8.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Perrone",
    "squadra": "Como",
    "ruolo": "C",
    "pagato": 4,
    "quotazione": null,
    "fvm": 17,
    "mv_foto": 6.0,
    "fm_foto": 6.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Isaksen",
    "squadra": "Lazio",
    "ruolo": "C",
    "pagato": 1,
    "quotazione": null,
    "fvm": 11,
    "mv_foto": 6.0,
    "fm_foto": 6.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Scamacca",
    "squadra": "Atalanta",
    "ruolo": "A",
    "pagato": 54,
    "quotazione": null,
    "fvm": 55,
    "mv_foto": 5.75,
    "fm_foto": 5.75,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Woltemade",
    "squadra": "Juventus",
    "ruolo": "A",
    "pagato": 35,
    "quotazione": null,
    "fvm": 80,
    "mv_foto": 0.0,
    "fm_foto": 0.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Berardi",
    "squadra": "Sassuolo",
    "ruolo": "A",
    "pagato": 31,
    "quotazione": null,
    "fvm": 53,
    "mv_foto": 7.0,
    "fm_foto": 10.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Beto",
    "squadra": "Fiorentina",
    "ruolo": "A",
    "pagato": 19,
    "quotazione": null,
    "fvm": 25,
    "mv_foto": 0.0,
    "fm_foto": 0.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Dovbyk",
    "squadra": "Bologna",
    "ruolo": "A",
    "pagato": 12,
    "quotazione": null,
    "fvm": 26,
    "mv_foto": 5.25,
    "fm_foto": 5.25,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   },
   {
    "nome": "Neres",
    "squadra": "Napoli",
    "ruolo": "A",
    "pagato": 1,
    "quotazione": null,
    "fvm": 10,
    "mv_foto": 0.0,
    "fm_foto": 0.0,
    "fm_scorsa": null,
    "presenze_scorsa": null,
    "rigorista": null,
    "stato": "in rosa"
   }
  ]
 },
 "calendario": {
  "lega": "San Lorenzo 26 27",
  "competizione": "San Lorenzo 26/27 (id 25843), calendario a scontri diretti",
  "fonte": "leghe.fantacalcio.it/san-lorenzo-26-27/view/competition/25843/fixtures — letto il 13/09/2026 intorno alle 17:10",
  "_note": "Ogni partita e' [prima squadra, seconda squadra] nell'ordine mostrato dal sito. serie_a = giornata di Serie A su cui si gioca la giornata di lega: verificato su tutte le 35 giornate, e' sempre lega + 2. Giorno e ora delle partite di Serie A NON sono qui: vanno letti sul web a ogni giro. Aggiornato solo il risultato della 1a giornata; la 2a era in corso alla lettura.",
  "nostra_squadra": "FC Tremoooooon",
  "giornate": [
   {
    "lega": 1,
    "serie_a": 3,
    "partite": [
     [
      "Red Bull Salisburro",
      "Berlusca Dortmund"
     ],
     [
      "FC Tremoooooon",
      "I LEONI DI JEP"
     ],
     [
      "BEVERLY INPS 1926",
      "Azzurrissimo"
     ],
     [
      "FC IAMO CALCIO",
      "The Tabacchins"
     ]
    ],
    "risultati": [
     "1-1 (70-66)",
     "1-4 (68-81)",
     "2-1 (72-67.5)",
     "3-3 (79-77.5)"
    ]
   },
   {
    "lega": 2,
    "serie_a": 4,
    "stato": "in corso al 13/09/2026 17:04",
    "partite": [
     [
      "Berlusca Dortmund",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "BEVERLY INPS 1926"
     ],
     [
      "Azzurrissimo",
      "FC Tremoooooon"
     ],
     [
      "I LEONI DI JEP",
      "Red Bull Salisburro"
     ]
    ]
   },
   {
    "lega": 3,
    "serie_a": 5,
    "partite": [
     [
      "FC Tremoooooon",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "Berlusca Dortmund"
     ],
     [
      "FC IAMO CALCIO",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 4,
    "serie_a": 6,
    "partite": [
     [
      "Red Bull Salisburro",
      "BEVERLY INPS 1926"
     ],
     [
      "Berlusca Dortmund",
      "FC Tremoooooon"
     ],
     [
      "The Tabacchins",
      "Azzurrissimo"
     ],
     [
      "I LEONI DI JEP",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 5,
    "serie_a": 7,
    "partite": [
     [
      "FC Tremoooooon",
      "Red Bull Salisburro"
     ],
     [
      "BEVERLY INPS 1926",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "I LEONI DI JEP"
     ],
     [
      "Azzurrissimo",
      "Berlusca Dortmund"
     ]
    ]
   },
   {
    "lega": 6,
    "serie_a": 8,
    "partite": [
     [
      "Red Bull Salisburro",
      "Azzurrissimo"
     ],
     [
      "Berlusca Dortmund",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "I LEONI DI JEP"
     ],
     [
      "FC IAMO CALCIO",
      "FC Tremoooooon"
     ]
    ]
   },
   {
    "lega": 7,
    "serie_a": 9,
    "partite": [
     [
      "FC Tremoooooon",
      "BEVERLY INPS 1926"
     ],
     [
      "The Tabacchins",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "FC IAMO CALCIO"
     ],
     [
      "I LEONI DI JEP",
      "Berlusca Dortmund"
     ]
    ]
   },
   {
    "lega": 8,
    "serie_a": 10,
    "partite": [
     [
      "Berlusca Dortmund",
      "Red Bull Salisburro"
     ],
     [
      "I LEONI DI JEP",
      "FC Tremoooooon"
     ],
     [
      "Azzurrissimo",
      "BEVERLY INPS 1926"
     ],
     [
      "The Tabacchins",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 9,
    "serie_a": 11,
    "partite": [
     [
      "FC IAMO CALCIO",
      "Berlusca Dortmund"
     ],
     [
      "BEVERLY INPS 1926",
      "The Tabacchins"
     ],
     [
      "FC Tremoooooon",
      "Azzurrissimo"
     ],
     [
      "Red Bull Salisburro",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 10,
    "serie_a": 12,
    "partite": [
     [
      "The Tabacchins",
      "FC Tremoooooon"
     ],
     [
      "Berlusca Dortmund",
      "BEVERLY INPS 1926"
     ],
     [
      "Red Bull Salisburro",
      "FC IAMO CALCIO"
     ],
     [
      "I LEONI DI JEP",
      "Azzurrissimo"
     ]
    ]
   },
   {
    "lega": 11,
    "serie_a": 13,
    "partite": [
     [
      "BEVERLY INPS 1926",
      "Red Bull Salisburro"
     ],
     [
      "FC Tremoooooon",
      "Berlusca Dortmund"
     ],
     [
      "Azzurrissimo",
      "The Tabacchins"
     ],
     [
      "FC IAMO CALCIO",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 12,
    "serie_a": 14,
    "partite": [
     [
      "Red Bull Salisburro",
      "FC Tremoooooon"
     ],
     [
      "FC IAMO CALCIO",
      "BEVERLY INPS 1926"
     ],
     [
      "I LEONI DI JEP",
      "The Tabacchins"
     ],
     [
      "Berlusca Dortmund",
      "Azzurrissimo"
     ]
    ]
   },
   {
    "lega": 13,
    "serie_a": 15,
    "partite": [
     [
      "Azzurrissimo",
      "Red Bull Salisburro"
     ],
     [
      "The Tabacchins",
      "Berlusca Dortmund"
     ],
     [
      "I LEONI DI JEP",
      "BEVERLY INPS 1926"
     ],
     [
      "FC Tremoooooon",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 14,
    "serie_a": 16,
    "partite": [
     [
      "BEVERLY INPS 1926",
      "FC Tremoooooon"
     ],
     [
      "Red Bull Salisburro",
      "The Tabacchins"
     ],
     [
      "FC IAMO CALCIO",
      "Azzurrissimo"
     ],
     [
      "Berlusca Dortmund",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 15,
    "serie_a": 17,
    "partite": [
     [
      "Red Bull Salisburro",
      "Berlusca Dortmund"
     ],
     [
      "FC Tremoooooon",
      "I LEONI DI JEP"
     ],
     [
      "BEVERLY INPS 1926",
      "Azzurrissimo"
     ],
     [
      "FC IAMO CALCIO",
      "The Tabacchins"
     ]
    ]
   },
   {
    "lega": 16,
    "serie_a": 18,
    "partite": [
     [
      "Berlusca Dortmund",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "BEVERLY INPS 1926"
     ],
     [
      "Azzurrissimo",
      "FC Tremoooooon"
     ],
     [
      "I LEONI DI JEP",
      "Red Bull Salisburro"
     ]
    ]
   },
   {
    "lega": 17,
    "serie_a": 19,
    "partite": [
     [
      "FC Tremoooooon",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "Berlusca Dortmund"
     ],
     [
      "FC IAMO CALCIO",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 18,
    "serie_a": 20,
    "partite": [
     [
      "Red Bull Salisburro",
      "BEVERLY INPS 1926"
     ],
     [
      "Berlusca Dortmund",
      "FC Tremoooooon"
     ],
     [
      "The Tabacchins",
      "Azzurrissimo"
     ],
     [
      "I LEONI DI JEP",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 19,
    "serie_a": 21,
    "partite": [
     [
      "FC Tremoooooon",
      "Red Bull Salisburro"
     ],
     [
      "BEVERLY INPS 1926",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "I LEONI DI JEP"
     ],
     [
      "Azzurrissimo",
      "Berlusca Dortmund"
     ]
    ]
   },
   {
    "lega": 20,
    "serie_a": 22,
    "partite": [
     [
      "Red Bull Salisburro",
      "Azzurrissimo"
     ],
     [
      "Berlusca Dortmund",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "I LEONI DI JEP"
     ],
     [
      "FC IAMO CALCIO",
      "FC Tremoooooon"
     ]
    ]
   },
   {
    "lega": 21,
    "serie_a": 23,
    "partite": [
     [
      "FC Tremoooooon",
      "BEVERLY INPS 1926"
     ],
     [
      "The Tabacchins",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "FC IAMO CALCIO"
     ],
     [
      "I LEONI DI JEP",
      "Berlusca Dortmund"
     ]
    ]
   },
   {
    "lega": 22,
    "serie_a": 24,
    "partite": [
     [
      "Berlusca Dortmund",
      "Red Bull Salisburro"
     ],
     [
      "I LEONI DI JEP",
      "FC Tremoooooon"
     ],
     [
      "Azzurrissimo",
      "BEVERLY INPS 1926"
     ],
     [
      "The Tabacchins",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 23,
    "serie_a": 25,
    "partite": [
     [
      "FC IAMO CALCIO",
      "Berlusca Dortmund"
     ],
     [
      "BEVERLY INPS 1926",
      "The Tabacchins"
     ],
     [
      "FC Tremoooooon",
      "Azzurrissimo"
     ],
     [
      "Red Bull Salisburro",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 24,
    "serie_a": 26,
    "partite": [
     [
      "The Tabacchins",
      "FC Tremoooooon"
     ],
     [
      "Berlusca Dortmund",
      "BEVERLY INPS 1926"
     ],
     [
      "Red Bull Salisburro",
      "FC IAMO CALCIO"
     ],
     [
      "I LEONI DI JEP",
      "Azzurrissimo"
     ]
    ]
   },
   {
    "lega": 25,
    "serie_a": 27,
    "partite": [
     [
      "BEVERLY INPS 1926",
      "Red Bull Salisburro"
     ],
     [
      "FC Tremoooooon",
      "Berlusca Dortmund"
     ],
     [
      "Azzurrissimo",
      "The Tabacchins"
     ],
     [
      "FC IAMO CALCIO",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 26,
    "serie_a": 28,
    "partite": [
     [
      "Red Bull Salisburro",
      "FC Tremoooooon"
     ],
     [
      "FC IAMO CALCIO",
      "BEVERLY INPS 1926"
     ],
     [
      "I LEONI DI JEP",
      "The Tabacchins"
     ],
     [
      "Berlusca Dortmund",
      "Azzurrissimo"
     ]
    ]
   },
   {
    "lega": 27,
    "serie_a": 29,
    "partite": [
     [
      "Azzurrissimo",
      "Red Bull Salisburro"
     ],
     [
      "The Tabacchins",
      "Berlusca Dortmund"
     ],
     [
      "I LEONI DI JEP",
      "BEVERLY INPS 1926"
     ],
     [
      "FC Tremoooooon",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 28,
    "serie_a": 30,
    "partite": [
     [
      "BEVERLY INPS 1926",
      "FC Tremoooooon"
     ],
     [
      "Red Bull Salisburro",
      "The Tabacchins"
     ],
     [
      "FC IAMO CALCIO",
      "Azzurrissimo"
     ],
     [
      "Berlusca Dortmund",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 29,
    "serie_a": 31,
    "partite": [
     [
      "Red Bull Salisburro",
      "Berlusca Dortmund"
     ],
     [
      "FC Tremoooooon",
      "I LEONI DI JEP"
     ],
     [
      "BEVERLY INPS 1926",
      "Azzurrissimo"
     ],
     [
      "FC IAMO CALCIO",
      "The Tabacchins"
     ]
    ]
   },
   {
    "lega": 30,
    "serie_a": 32,
    "partite": [
     [
      "Berlusca Dortmund",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "BEVERLY INPS 1926"
     ],
     [
      "Azzurrissimo",
      "FC Tremoooooon"
     ],
     [
      "I LEONI DI JEP",
      "Red Bull Salisburro"
     ]
    ]
   },
   {
    "lega": 31,
    "serie_a": 33,
    "partite": [
     [
      "FC Tremoooooon",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "Berlusca Dortmund"
     ],
     [
      "FC IAMO CALCIO",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "I LEONI DI JEP"
     ]
    ]
   },
   {
    "lega": 32,
    "serie_a": 34,
    "partite": [
     [
      "Red Bull Salisburro",
      "BEVERLY INPS 1926"
     ],
     [
      "Berlusca Dortmund",
      "FC Tremoooooon"
     ],
     [
      "The Tabacchins",
      "Azzurrissimo"
     ],
     [
      "I LEONI DI JEP",
      "FC IAMO CALCIO"
     ]
    ]
   },
   {
    "lega": 33,
    "serie_a": 35,
    "partite": [
     [
      "FC Tremoooooon",
      "Red Bull Salisburro"
     ],
     [
      "BEVERLY INPS 1926",
      "FC IAMO CALCIO"
     ],
     [
      "The Tabacchins",
      "I LEONI DI JEP"
     ],
     [
      "Azzurrissimo",
      "Berlusca Dortmund"
     ]
    ]
   },
   {
    "lega": 34,
    "serie_a": 36,
    "partite": [
     [
      "Red Bull Salisburro",
      "Azzurrissimo"
     ],
     [
      "Berlusca Dortmund",
      "The Tabacchins"
     ],
     [
      "BEVERLY INPS 1926",
      "I LEONI DI JEP"
     ],
     [
      "FC IAMO CALCIO",
      "FC Tremoooooon"
     ]
    ]
   },
   {
    "lega": 35,
    "serie_a": 37,
    "partite": [
     [
      "FC Tremoooooon",
      "BEVERLY INPS 1926"
     ],
     [
      "The Tabacchins",
      "Red Bull Salisburro"
     ],
     [
      "Azzurrissimo",
      "FC IAMO CALCIO"
     ],
     [
      "I LEONI DI JEP",
      "Berlusca Dortmund"
     ]
    ]
   }
  ]
 },
 "rose": {
  "lega": "San Lorenzo 26 27",
  "stagione": "2026-27",
  "fonte": "leghe.fantacalcio.it/san-lorenzo-26-27/view/rosters — letto il 13/09/2026 tra le 16:51 e le 17:04 (account di Armando, allenatore in seconda)",
  "_note": "Il ruolo non compare nel testo della pagina: e' ricavato dall'ordine della lista (3 P, 8 D, 8 C, 6 A), ordine verificato sulla rosa di FC Tremoooooon che coincide con rosa.json. costo = crediti pagati all'asta; qa = quotazione attuale; fvmp = fantavalore di mercato. Valori del 13/09/2026, cambiano ogni settimana. La rosa di FC Tremoooooon sta in rosa.json e qui non e' ripetuta.",
  "squadre": [
   {
    "nome": "FC IAMO CALCIO",
    "allenatore": "Mario di Martino",
    "id_rosa": 18131699,
    "costo_rosa": 495,
    "crediti": 5,
    "valore_fvmp": 701,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Bijlow",
      "squadra": "Genoa",
      "costo": 2,
      "qa": 7,
      "fvmp": 6
     },
     {
      "ruolo": "P",
      "nome": "Mandas",
      "squadra": "Lazio",
      "costo": 21,
      "qa": 11,
      "fvmp": 19
     },
     {
      "ruolo": "P",
      "nome": "Caprile",
      "squadra": "Cagliari",
      "costo": 13,
      "qa": 11,
      "fvmp": 13
     },
     {
      "ruolo": "D",
      "nome": "Mangas",
      "squadra": "Monza",
      "costo": 2,
      "qa": 7,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Wesley",
      "squadra": "Roma",
      "costo": 37,
      "qa": 18,
      "fvmp": 48
     },
     {
      "ruolo": "D",
      "nome": "Carlos Augusto",
      "squadra": "Inter",
      "costo": 7,
      "qa": 7,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Tavares N.",
      "squadra": "Lazio",
      "costo": 11,
      "qa": 7,
      "fvmp": 14
     },
     {
      "ruolo": "D",
      "nome": "Akanji",
      "squadra": "Inter",
      "costo": 15,
      "qa": 15,
      "fvmp": 23
     },
     {
      "ruolo": "D",
      "nome": "Stones",
      "squadra": "Inter",
      "costo": 8,
      "qa": 12,
      "fvmp": 11
     },
     {
      "ruolo": "D",
      "nome": "Mancini",
      "squadra": "Roma",
      "costo": 16,
      "qa": 15,
      "fvmp": 25
     },
     {
      "ruolo": "D",
      "nome": "Bastoni",
      "squadra": "Inter",
      "costo": 20,
      "qa": 14,
      "fvmp": 21
     },
     {
      "ruolo": "C",
      "nome": "Goncalves P.",
      "squadra": "Fiorentina",
      "costo": 26,
      "qa": 12,
      "fvmp": 24
     },
     {
      "ruolo": "C",
      "nome": "Diouf",
      "squadra": "Inter",
      "costo": 2,
      "qa": 9,
      "fvmp": 22
     },
     {
      "ruolo": "C",
      "nome": "Jones C.",
      "squadra": "Inter",
      "costo": 14,
      "qa": 12,
      "fvmp": 21
     },
     {
      "ruolo": "C",
      "nome": "Saelemaekers",
      "squadra": "Milan",
      "costo": 1,
      "qa": 11,
      "fvmp": 16
     },
     {
      "ruolo": "C",
      "nome": "Modric",
      "squadra": "Milan",
      "costo": 16,
      "qa": 12,
      "fvmp": 23
     },
     {
      "ruolo": "C",
      "nome": "Pulisic",
      "squadra": "Milan",
      "costo": 35,
      "qa": 23,
      "fvmp": 70
     },
     {
      "ruolo": "C",
      "nome": "Calhanoglu",
      "squadra": "Inter",
      "costo": 73,
      "qa": 28,
      "fvmp": 121
     },
     {
      "ruolo": "C",
      "nome": "Kessiè",
      "squadra": "Atalanta",
      "costo": 13,
      "qa": 12,
      "fvmp": 22
     },
     {
      "ruolo": "A",
      "nome": "Diao",
      "squadra": "Como",
      "costo": 18,
      "qa": 14,
      "fvmp": 35
     },
     {
      "ruolo": "A",
      "nome": "Bonny",
      "squadra": "Inter",
      "costo": 4,
      "qa": 7,
      "fvmp": 8
     },
     {
      "ruolo": "A",
      "nome": "Tourè E.",
      "squadra": "Parma",
      "costo": 1,
      "qa": 11,
      "fvmp": 17
     },
     {
      "ruolo": "A",
      "nome": "Maldini",
      "squadra": "Cagliari",
      "costo": 2,
      "qa": 7,
      "fvmp": 13
     },
     {
      "ruolo": "A",
      "nome": "Esposito Se.",
      "squadra": "Sassuolo",
      "costo": 17,
      "qa": 12,
      "fvmp": 18
     },
     {
      "ruolo": "A",
      "nome": "Kean",
      "squadra": "Como",
      "costo": 121,
      "qa": 25,
      "fvmp": 93
     }
    ]
   },
   {
    "nome": "BEVERLY INPS 1926",
    "allenatore": "Presidente",
    "id_rosa": 18136806,
    "costo_rosa": 494,
    "crediti": 6,
    "valore_fvmp": 610,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "De Gea",
      "squadra": "Fiorentina",
      "costo": 17,
      "qa": 10,
      "fvmp": 13
     },
     {
      "ruolo": "P",
      "nome": "Falcone",
      "squadra": "Lecce",
      "costo": 1,
      "qa": 8,
      "fvmp": 13
     },
     {
      "ruolo": "P",
      "nome": "Christensen O.",
      "squadra": "Fiorentina",
      "costo": 1,
      "qa": 1,
      "fvmp": 1
     },
     {
      "ruolo": "D",
      "nome": "Couto",
      "squadra": "Como",
      "costo": 7,
      "qa": 9,
      "fvmp": 16
     },
     {
      "ruolo": "D",
      "nome": "Chalobah T.",
      "squadra": "Como",
      "costo": 7,
      "qa": 10,
      "fvmp": 16
     },
     {
      "ruolo": "D",
      "nome": "Idzes",
      "squadra": "Sassuolo",
      "costo": 2,
      "qa": 7,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Bellanova",
      "squadra": "Atalanta",
      "costo": 5,
      "qa": 5,
      "fvmp": 9
     },
     {
      "ruolo": "D",
      "nome": "Bracaglia",
      "squadra": "Frosinone",
      "costo": 1,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Coco",
      "squadra": "Torino",
      "costo": 1,
      "qa": 7,
      "fvmp": 7
     },
     {
      "ruolo": "D",
      "nome": "Ghilardi",
      "squadra": "Roma",
      "costo": 1,
      "qa": 5,
      "fvmp": 5
     },
     {
      "ruolo": "D",
      "nome": "Cinquegrano",
      "squadra": "Sassuolo",
      "costo": 1,
      "qa": 4,
      "fvmp": 2
     },
     {
      "ruolo": "C",
      "nome": "Gudmundsson A.",
      "squadra": "Lazio",
      "costo": 16,
      "qa": 13,
      "fvmp": 22
     },
     {
      "ruolo": "C",
      "nome": "Alajbegovic",
      "squadra": "Juventus",
      "costo": 4,
      "qa": 11,
      "fvmp": 21
     },
     {
      "ruolo": "C",
      "nome": "Fazzini",
      "squadra": "Cagliari",
      "costo": 1,
      "qa": 8,
      "fvmp": 14
     },
     {
      "ruolo": "C",
      "nome": "Ferguson",
      "squadra": "Bologna",
      "costo": 1,
      "qa": 8,
      "fvmp": 12
     },
     {
      "ruolo": "C",
      "nome": "Pierotti",
      "squadra": "Lecce",
      "costo": 1,
      "qa": 6,
      "fvmp": 10
     },
     {
      "ruolo": "C",
      "nome": "Fitz-Jim",
      "squadra": "Torino",
      "costo": 3,
      "qa": 6,
      "fvmp": 9
     },
     {
      "ruolo": "C",
      "nome": "Ndour",
      "squadra": "Fiorentina",
      "costo": 1,
      "qa": 7,
      "fvmp": 9
     },
     {
      "ruolo": "C",
      "nome": "Adzic",
      "squadra": "Sassuolo",
      "costo": 1,
      "qa": 7,
      "fvmp": 8
     },
     {
      "ruolo": "A",
      "nome": "Malen",
      "squadra": "Roma",
      "costo": 254,
      "qa": 37,
      "fvmp": 223
     },
     {
      "ruolo": "A",
      "nome": "Douvikas",
      "squadra": "Como",
      "costo": 105,
      "qa": 21,
      "fvmp": 90
     },
     {
      "ruolo": "A",
      "nome": "Santos A.",
      "squadra": "Napoli",
      "costo": 18,
      "qa": 14,
      "fvmp": 29
     },
     {
      "ruolo": "A",
      "nome": "Soulè",
      "squadra": "Roma",
      "costo": 9,
      "qa": 15,
      "fvmp": 27
     },
     {
      "ruolo": "A",
      "nome": "Pellegrino M.",
      "squadra": "Fiorentina",
      "costo": 33,
      "qa": 14,
      "fvmp": 25
     },
     {
      "ruolo": "A",
      "nome": "Geubbels",
      "squadra": "Lecce",
      "costo": 3,
      "qa": 8,
      "fvmp": 11
     }
    ]
   },
   {
    "nome": "Red Bull Salisburro",
    "allenatore": "Antonio",
    "id_rosa": 18160021,
    "costo_rosa": 491,
    "crediti": 9,
    "valore_fvmp": 605,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Carnesecchi",
      "squadra": "Atalanta",
      "costo": 36,
      "qa": 17,
      "fvmp": 29
     },
     {
      "ruolo": "P",
      "nome": "Stankovic F.",
      "squadra": "Venezia",
      "costo": 1,
      "qa": 6,
      "fvmp": 6
     },
     {
      "ruolo": "P",
      "nome": "Gollini",
      "squadra": "Roma",
      "costo": 2,
      "qa": 1,
      "fvmp": 1
     },
     {
      "ruolo": "D",
      "nome": "Bremer",
      "squadra": "Juventus",
      "costo": 26,
      "qa": 16,
      "fvmp": 30
     },
     {
      "ruolo": "D",
      "nome": "Solet",
      "squadra": "Udinese",
      "costo": 17,
      "qa": 13,
      "fvmp": 20
     },
     {
      "ruolo": "D",
      "nome": "Ostigard",
      "squadra": "Genoa",
      "costo": 21,
      "qa": 10,
      "fvmp": 17
     },
     {
      "ruolo": "D",
      "nome": "Vasquez",
      "squadra": "Genoa",
      "costo": 7,
      "qa": 9,
      "fvmp": 15
     },
     {
      "ruolo": "D",
      "nome": "Tiago Gabriel",
      "squadra": "Lecce",
      "costo": 1,
      "qa": 8,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Heggem",
      "squadra": "Bologna",
      "costo": 1,
      "qa": 5,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Comuzzo",
      "squadra": "Torino",
      "costo": 2,
      "qa": 8,
      "fvmp": 7
     },
     {
      "ruolo": "D",
      "nome": "Beukema",
      "squadra": "Napoli",
      "costo": 1,
      "qa": 5,
      "fvmp": 6
     },
     {
      "ruolo": "C",
      "nome": "Atta",
      "squadra": "Fiorentina",
      "costo": 25,
      "qa": 15,
      "fvmp": 36
     },
     {
      "ruolo": "C",
      "nome": "Conceicao",
      "squadra": "Juventus",
      "costo": 27,
      "qa": 13,
      "fvmp": 35
     },
     {
      "ruolo": "C",
      "nome": "Ekkelenkamp",
      "squadra": "Udinese",
      "costo": 21,
      "qa": 12,
      "fvmp": 29
     },
     {
      "ruolo": "C",
      "nome": "Konè M.",
      "squadra": "Roma",
      "costo": 8,
      "qa": 10,
      "fvmp": 19
     },
     {
      "ruolo": "C",
      "nome": "Gaetano",
      "squadra": "Atalanta",
      "costo": 5,
      "qa": 7,
      "fvmp": 15
     },
     {
      "ruolo": "C",
      "nome": "Loftus-Cheek",
      "squadra": "Milan",
      "costo": 3,
      "qa": 4,
      "fvmp": 8
     },
     {
      "ruolo": "C",
      "nome": "Piotrowski",
      "squadra": "Udinese",
      "costo": 3,
      "qa": 6,
      "fvmp": 7
     },
     {
      "ruolo": "C",
      "nome": "Fabbian",
      "squadra": "Parma",
      "costo": 1,
      "qa": 4,
      "fvmp": 4
     },
     {
      "ruolo": "A",
      "nome": "Thuram",
      "squadra": "Inter",
      "costo": 129,
      "qa": 28,
      "fvmp": 130
     },
     {
      "ruolo": "A",
      "nome": "De Ketelaere",
      "squadra": "Atalanta",
      "costo": 40,
      "qa": 17,
      "fvmp": 46
     },
     {
      "ruolo": "A",
      "nome": "Simeone",
      "squadra": "Torino",
      "costo": 56,
      "qa": 14,
      "fvmp": 37
     },
     {
      "ruolo": "A",
      "nome": "Raspadori",
      "squadra": "Atalanta",
      "costo": 23,
      "qa": 13,
      "fvmp": 34
     },
     {
      "ruolo": "A",
      "nome": "Raimondo",
      "squadra": "Frosinone",
      "costo": 10,
      "qa": 11,
      "fvmp": 28
     },
     {
      "ruolo": "A",
      "nome": "Colombo",
      "squadra": "Genoa",
      "costo": 25,
      "qa": 11,
      "fvmp": 28
     }
    ]
   },
   {
    "nome": "The Tabacchins",
    "allenatore": "Daniele e Nello",
    "id_rosa": 18162619,
    "costo_rosa": 494,
    "crediti": 6,
    "valore_fvmp": 572,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Butez",
      "squadra": "Como",
      "costo": 30,
      "qa": 15,
      "fvmp": 25
     },
     {
      "ruolo": "P",
      "nome": "Okoye",
      "squadra": "Udinese",
      "costo": 16,
      "qa": 9,
      "fvmp": 14
     },
     {
      "ruolo": "P",
      "nome": "Sanchez Ro.",
      "squadra": "Como",
      "costo": 1,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Pavlovic",
      "squadra": "Milan",
      "costo": 18,
      "qa": 14,
      "fvmp": 24
     },
     {
      "ruolo": "D",
      "nome": "Ramon",
      "squadra": "Como",
      "costo": 12,
      "qa": 10,
      "fvmp": 16
     },
     {
      "ruolo": "D",
      "nome": "Bernasconi",
      "squadra": "Atalanta",
      "costo": 1,
      "qa": 5,
      "fvmp": 9
     },
     {
      "ruolo": "D",
      "nome": "Bartesaghi",
      "squadra": "Milan",
      "costo": 3,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Cambiaso",
      "squadra": "Juventus",
      "costo": 4,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Provstgaard",
      "squadra": "Lazio",
      "costo": 1,
      "qa": 4,
      "fvmp": 7
     },
     {
      "ruolo": "D",
      "nome": "Gabbia",
      "squadra": "Milan",
      "costo": 3,
      "qa": 7,
      "fvmp": 7
     },
     {
      "ruolo": "D",
      "nome": "Kamara H.",
      "squadra": "Udinese",
      "costo": 9,
      "qa": 10,
      "fvmp": 6
     },
     {
      "ruolo": "C",
      "nome": "Da Cunha",
      "squadra": "Como",
      "costo": 45,
      "qa": 18,
      "fvmp": 43
     },
     {
      "ruolo": "C",
      "nome": "Vlasic",
      "squadra": "Torino",
      "costo": 19,
      "qa": 13,
      "fvmp": 33
     },
     {
      "ruolo": "C",
      "nome": "Bernabè",
      "squadra": "Parma",
      "costo": 3,
      "qa": 7,
      "fvmp": 16
     },
     {
      "ruolo": "C",
      "nome": "Cristante",
      "squadra": "Roma",
      "costo": 5,
      "qa": 9,
      "fvmp": 15
     },
     {
      "ruolo": "C",
      "nome": "Rodriguez Je.",
      "squadra": "Como",
      "costo": 2,
      "qa": 11,
      "fvmp": 13
     },
     {
      "ruolo": "C",
      "nome": "Locatelli",
      "squadra": "Juventus",
      "costo": 1,
      "qa": 9,
      "fvmp": 13
     },
     {
      "ruolo": "C",
      "nome": "Odgaard",
      "squadra": "Bologna",
      "costo": 4,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "C",
      "nome": "Matic",
      "squadra": "Sassuolo",
      "costo": 1,
      "qa": 6,
      "fvmp": 8
     },
     {
      "ruolo": "A",
      "nome": "Martinez L.",
      "squadra": "Inter",
      "costo": 213,
      "qa": 35,
      "fvmp": 195
     },
     {
      "ruolo": "A",
      "nome": "Dybala",
      "squadra": "Roma",
      "costo": 68,
      "qa": 16,
      "fvmp": 55
     },
     {
      "ruolo": "A",
      "nome": "Kvernadze",
      "squadra": "Frosinone",
      "costo": 10,
      "qa": 8,
      "fvmp": 15
     },
     {
      "ruolo": "A",
      "nome": "Boga",
      "squadra": "Juventus",
      "costo": 3,
      "qa": 6,
      "fvmp": 14
     },
     {
      "ruolo": "A",
      "nome": "Stulic",
      "squadra": "Lecce",
      "costo": 6,
      "qa": 6,
      "fvmp": 6
     },
     {
      "ruolo": "A",
      "nome": "Vitinha O.",
      "squadra": "Genoa",
      "costo": 16,
      "qa": 7,
      "fvmp": 6
     }
    ]
   },
   {
    "nome": "Azzurrissimo",
    "allenatore": "fantapocho69",
    "id_rosa": 18177885,
    "costo_rosa": 491,
    "crediti": 9,
    "valore_fvmp": 725,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Meret",
      "squadra": "Napoli",
      "costo": 31,
      "qa": 11,
      "fvmp": 25
     },
     {
      "ruolo": "P",
      "nome": "Skorupski",
      "squadra": "Bologna",
      "costo": 20,
      "qa": 10,
      "fvmp": 16
     },
     {
      "ruolo": "P",
      "nome": "Perri",
      "squadra": "Torino",
      "costo": 4,
      "qa": 9,
      "fvmp": 12
     },
     {
      "ruolo": "D",
      "nome": "Di Lorenzo",
      "squadra": "Napoli",
      "costo": 12,
      "qa": 12,
      "fvmp": 19
     },
     {
      "ruolo": "D",
      "nome": "Delprato",
      "squadra": "Parma",
      "costo": 8,
      "qa": 8,
      "fvmp": 11
     },
     {
      "ruolo": "D",
      "nome": "Kristensen T.",
      "squadra": "Atalanta",
      "costo": 4,
      "qa": 6,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Dodò",
      "squadra": "Fiorentina",
      "costo": 8,
      "qa": 9,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Vojvoda",
      "squadra": "Udinese",
      "costo": 11,
      "qa": 9,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Doekhi",
      "squadra": "Lazio",
      "costo": 6,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Kempf",
      "squadra": "Como",
      "costo": 1,
      "qa": 5,
      "fvmp": 7
     },
     {
      "ruolo": "D",
      "nome": "Holm",
      "squadra": "Bologna",
      "costo": 1,
      "qa": 6,
      "fvmp": 7
     },
     {
      "ruolo": "C",
      "nome": "Paz N.",
      "squadra": "Como",
      "costo": 81,
      "qa": 30,
      "fvmp": 125
     },
     {
      "ruolo": "C",
      "nome": "Orsolini",
      "squadra": "Bologna",
      "costo": 45,
      "qa": 25,
      "fvmp": 76
     },
     {
      "ruolo": "C",
      "nome": "De Bruyne",
      "squadra": "Napoli",
      "costo": 26,
      "qa": 17,
      "fvmp": 52
     },
     {
      "ruolo": "C",
      "nome": "Zaccagni",
      "squadra": "Lazio",
      "costo": 30,
      "qa": 16,
      "fvmp": 46
     },
     {
      "ruolo": "C",
      "nome": "Rowe",
      "squadra": "Atalanta",
      "costo": 22,
      "qa": 10,
      "fvmp": 20
     },
     {
      "ruolo": "C",
      "nome": "Zambo Anguissa",
      "squadra": "Napoli",
      "costo": 8,
      "qa": 10,
      "fvmp": 18
     },
     {
      "ruolo": "C",
      "nome": "Vergara",
      "squadra": "Napoli",
      "costo": 2,
      "qa": 9,
      "fvmp": 17
     },
     {
      "ruolo": "C",
      "nome": "Calò",
      "squadra": "Frosinone",
      "costo": 8,
      "qa": 8,
      "fvmp": 14
     },
     {
      "ruolo": "A",
      "nome": "Ramos G.",
      "squadra": "Milan",
      "costo": 132,
      "qa": 27,
      "fvmp": 116
     },
     {
      "ruolo": "A",
      "nome": "Yildiz",
      "squadra": "Juventus",
      "costo": 19,
      "qa": 21,
      "fvmp": 40
     },
     {
      "ruolo": "A",
      "nome": "Varela G.",
      "squadra": "Monza",
      "costo": 8,
      "qa": 7,
      "fvmp": 18
     },
     {
      "ruolo": "A",
      "nome": "Adams A.",
      "squadra": "Venezia",
      "costo": 1,
      "qa": 11,
      "fvmp": 17
     },
     {
      "ruolo": "A",
      "nome": "Adams C.",
      "squadra": "Torino",
      "costo": 2,
      "qa": 12,
      "fvmp": 16
     },
     {
      "ruolo": "A",
      "nome": "Kevin Carlos",
      "squadra": "Cagliari",
      "costo": 1,
      "qa": 12,
      "fvmp": 15
     }
    ]
   },
   {
    "nome": "Berlusca Dortmund",
    "allenatore": "Marco Russo",
    "id_rosa": 18202337,
    "costo_rosa": 499,
    "crediti": 1,
    "valore_fvmp": 669,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Vicario",
      "squadra": "Juventus",
      "costo": 39,
      "qa": 16,
      "fvmp": 35
     },
     {
      "ruolo": "P",
      "nome": "Corvi",
      "squadra": "Parma",
      "costo": 1,
      "qa": 3,
      "fvmp": 5
     },
     {
      "ruolo": "P",
      "nome": "Grabara",
      "squadra": "Juventus",
      "costo": 1,
      "qa": 1,
      "fvmp": 1
     },
     {
      "ruolo": "D",
      "nome": "Molina N.",
      "squadra": "Roma",
      "costo": 22,
      "qa": 18,
      "fvmp": 36
     },
     {
      "ruolo": "D",
      "nome": "Kalulu",
      "squadra": "Juventus",
      "costo": 31,
      "qa": 14,
      "fvmp": 24
     },
     {
      "ruolo": "D",
      "nome": "Bisseck",
      "squadra": "Inter",
      "costo": 9,
      "qa": 13,
      "fvmp": 18
     },
     {
      "ruolo": "D",
      "nome": "De Winter",
      "squadra": "Milan",
      "costo": 1,
      "qa": 5,
      "fvmp": 13
     },
     {
      "ruolo": "D",
      "nome": "Scalvini",
      "squadra": "Atalanta",
      "costo": 9,
      "qa": 11,
      "fvmp": 13
     },
     {
      "ruolo": "D",
      "nome": "Lucumì",
      "squadra": "Juventus",
      "costo": 1,
      "qa": 8,
      "fvmp": 9
     },
     {
      "ruolo": "D",
      "nome": "Celik",
      "squadra": "Juventus",
      "costo": 5,
      "qa": 8,
      "fvmp": 8
     },
     {
      "ruolo": "D",
      "nome": "Lulli",
      "squadra": "Roma",
      "costo": 6,
      "qa": 3,
      "fvmp": 5
     },
     {
      "ruolo": "C",
      "nome": "Rabiot",
      "squadra": "Milan",
      "costo": 33,
      "qa": 22,
      "fvmp": 71
     },
     {
      "ruolo": "C",
      "nome": "Mora",
      "squadra": "Roma",
      "costo": 26,
      "qa": 20,
      "fvmp": 50
     },
     {
      "ruolo": "C",
      "nome": "McKennie",
      "squadra": "Juventus",
      "costo": 12,
      "qa": 16,
      "fvmp": 35
     },
     {
      "ruolo": "C",
      "nome": "Taylor K.",
      "squadra": "Lazio",
      "costo": 10,
      "qa": 13,
      "fvmp": 23
     },
     {
      "ruolo": "C",
      "nome": "Zielinski",
      "squadra": "Inter",
      "costo": 6,
      "qa": 12,
      "fvmp": 21
     },
     {
      "ruolo": "C",
      "nome": "Mastantuono",
      "squadra": "Fiorentina",
      "costo": 23,
      "qa": 11,
      "fvmp": 20
     },
     {
      "ruolo": "C",
      "nome": "Mandragora",
      "squadra": "Torino",
      "costo": 1,
      "qa": 10,
      "fvmp": 18
     },
     {
      "ruolo": "C",
      "nome": "Schmid",
      "squadra": "Frosinone",
      "costo": 1,
      "qa": 8,
      "fvmp": 12
     },
     {
      "ruolo": "A",
      "nome": "Kolo Muani",
      "squadra": "Juventus",
      "costo": 128,
      "qa": 24,
      "fvmp": 72
     },
     {
      "ruolo": "A",
      "nome": "Davis K.",
      "squadra": "Udinese",
      "costo": 53,
      "qa": 19,
      "fvmp": 57
     },
     {
      "ruolo": "A",
      "nome": "Esposito F.P.",
      "squadra": "Inter",
      "costo": 61,
      "qa": 17,
      "fvmp": 53
     },
     {
      "ruolo": "A",
      "nome": "Castro S.",
      "squadra": "Roma",
      "costo": 9,
      "qa": 14,
      "fvmp": 35
     },
     {
      "ruolo": "A",
      "nome": "Piccoli",
      "squadra": "Bologna",
      "costo": 10,
      "qa": 9,
      "fvmp": 25
     },
     {
      "ruolo": "A",
      "nome": "Cutrone",
      "squadra": "Monza",
      "costo": 1,
      "qa": 9,
      "fvmp": 10
     }
    ]
   },
   {
    "nome": "I LEONI DI JEP",
    "allenatore": "Lo Special Jep",
    "id_rosa": 18223511,
    "costo_rosa": 493,
    "crediti": 7,
    "valore_fvmp": 658,
    "giocatori": [
     {
      "ruolo": "P",
      "nome": "Martinez Jo.",
      "squadra": "Inter",
      "costo": 38,
      "qa": 17,
      "fvmp": 34
     },
     {
      "ruolo": "P",
      "nome": "Provedel",
      "squadra": "Inter",
      "costo": 1,
      "qa": 1,
      "fvmp": 3
     },
     {
      "ruolo": "P",
      "nome": "Milinkovic-Savic V.",
      "squadra": "Napoli",
      "costo": 1,
      "qa": 4,
      "fvmp": 3
     },
     {
      "ruolo": "D",
      "nome": "N'Dicka",
      "squadra": "Roma",
      "costo": 11,
      "qa": 12,
      "fvmp": 21
     },
     {
      "ruolo": "D",
      "nome": "Hermoso",
      "squadra": "Roma",
      "costo": 11,
      "qa": 12,
      "fvmp": 18
     },
     {
      "ruolo": "D",
      "nome": "Spence",
      "squadra": "Inter",
      "costo": 13,
      "qa": 11,
      "fvmp": 16
     },
     {
      "ruolo": "D",
      "nome": "Miranda J.",
      "squadra": "Bologna",
      "costo": 5,
      "qa": 9,
      "fvmp": 13
     },
     {
      "ruolo": "D",
      "nome": "Valeri",
      "squadra": "Parma",
      "costo": 10,
      "qa": 9,
      "fvmp": 11
     },
     {
      "ruolo": "D",
      "nome": "Dragusin",
      "squadra": "Fiorentina",
      "costo": 2,
      "qa": 7,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Zortea",
      "squadra": "Bologna",
      "costo": 5,
      "qa": 6,
      "fvmp": 10
     },
     {
      "ruolo": "D",
      "nome": "Marcandalli",
      "squadra": "Genoa",
      "costo": 2,
      "qa": 6,
      "fvmp": 7
     },
     {
      "ruolo": "C",
      "nome": "Baturina",
      "squadra": "Como",
      "costo": 37,
      "qa": 21,
      "fvmp": 78
     },
     {
      "ruolo": "C",
      "nome": "Frattesi",
      "squadra": "Lazio",
      "costo": 36,
      "qa": 11,
      "fvmp": 60
     },
     {
      "ruolo": "C",
      "nome": "Ederson D.S.",
      "squadra": "Atalanta",
      "costo": 11,
      "qa": 13,
      "fvmp": 25
     },
     {
      "ruolo": "C",
      "nome": "Gonzalez N.",
      "squadra": "Juventus",
      "costo": 7,
      "qa": 13,
      "fvmp": 24
     },
     {
      "ruolo": "C",
      "nome": "Politano",
      "squadra": "Napoli",
      "costo": 21,
      "qa": 10,
      "fvmp": 20
     },
     {
      "ruolo": "C",
      "nome": "Chukwueze",
      "squadra": "Milan",
      "costo": 12,
      "qa": 8,
      "fvmp": 10
     },
     {
      "ruolo": "C",
      "nome": "Zalewski",
      "squadra": "Atalanta",
      "costo": 1,
      "qa": 7,
      "fvmp": 9
     },
     {
      "ruolo": "C",
      "nome": "Colpani",
      "squadra": "Monza",
      "costo": 6,
      "qa": 9,
      "fvmp": 8
     },
     {
      "ruolo": "A",
      "nome": "Hojlund",
      "squadra": "Napoli",
      "costo": 160,
      "qa": 29,
      "fvmp": 143
     },
     {
      "ruolo": "A",
      "nome": "Krstovic",
      "squadra": "Atalanta",
      "costo": 31,
      "qa": 18,
      "fvmp": 48
     },
     {
      "ruolo": "A",
      "nome": "Laurientè",
      "squadra": "Sassuolo",
      "costo": 20,
      "qa": 15,
      "fvmp": 40
     },
     {
      "ruolo": "A",
      "nome": "Pinamonti",
      "squadra": "Lazio",
      "costo": 40,
      "qa": 12,
      "fvmp": 26
     },
     {
      "ruolo": "A",
      "nome": "Yeboah J.",
      "squadra": "Venezia",
      "costo": 11,
      "qa": 10,
      "fvmp": 15
     },
     {
      "ruolo": "A",
      "nome": "Lucca",
      "squadra": "Napoli",
      "costo": 1,
      "qa": 3,
      "fvmp": 6
     }
    ]
   }
  ]
 },
 "storico": [
  {
   "nome": "g05-formazione-PROVA.md",
   "stagione": "2026-27",
   "tipo": "formazione",
   "prova": true,
   "testo": "# Giornata 5 — formazione (PROVA A VUOTO)\n\n> **File di prova** del 13/09/2026: serviva a verificare il flusso ricognitore → allenatore. **Non usarlo come consiglio**: rifai `/formazione` in settimana.\n\n## Testata\n\n- **Termine:** venerdì 18 settembre 2026, ore 20:45 (Monza-Sassuolo, prima partita della giornata). Fonte: corrieredellosport.it, calendario letto il 13/09 alle 16:29.\n- **Ore mancanti:** circa 100 (dalle 16:39 di domenica 13/09).\n- **Età delle notizie:** raccolte il 13/09 fra le 16:29 e le 16:39. Le probabili della 5ª non erano ancora uscite.\n- **CONSIGLIO PROVVISORIO:** mancano più di 48 ore.\n- La prima partita è venerdì sera, come di consueto. **Berardi gioca proprio in quella partita.**\n\n## Undici titolare: 4-4-2\n\nIl modificatore di difesa è attivo, quindi servono il portiere e almeno 4 difensori. Ci sono 4 difensori senza dubbi fisici segnalati, mentre in attacco ne restano solo 2 affidabili: un 4-3-3 obbligherebbe a schierare una scommessa.\n\n| Ruolo | Giocatore | Squadra | Avversario | Casa/fuori | Motivo |\n|---|---|---|---|---|---|\n| P | Svilar | Roma | Inter | casa | Nessuna nota negativa (Maignan ha fonti in conflitto) |\n| D | Rrahmani | Napoli | Fiorentina | fuori | Non è nella lista indisponibili all'11/09 |\n| D | Gila | **Milan** | Lecce | casa | Nessuna notizia negativa, ma è un **buco**. Squadra corretta il 13/09: era indicato Lazio |\n| D | Valle | Como | Frosinone | fuori | Titolare nella probabile della 4ª |\n| D | Zappacosta | Atalanta | Juventus | fuori | Disponibile. Nella 4ª era in ballottaggio con Bellanova |\n| C | Samardzic | Atalanta | Juventus | fuori | Titolare nella probabile della 4ª |\n| C | Barella | Inter | Roma | fuori | Disponibile, titolare l'8/9 |\n| C | Bernardeschi | Bologna | Torino | casa | Disponibile. Può diventare rigorista con Orsolini fuori |\n| C | Perrone | Como | Frosinone | fuori | Titolare nella probabile della 4ª |\n| A | Berardi **(R)** | Sassuolo | Monza | fuori | Disponibile, rigorista prima scelta |\n| A | Scamacca | Atalanta | Juventus | fuori | Disponibile, seconda scelta sui rigori dietro Kessié |\n\n## Panchina in ordine\n\nPortieri: Maignan, poi Torriani.\nDifensori: Mina, Valdepenas, Dimarco, Spinazzola.\nCentrocampisti: Baldanzi, Isaksen, Zaniolo.\nAttaccanti: Beto, Woltemade, Dovbyk, Neres.\n\n## Ballottaggi da ricontrollare\n\n- **Portiere:** Svilar o Maignan. Se Maignan viene confermato sano e titolare, la scelta si ribalta.\n- **Difesa:** Dimarco e Spinazzola. Se uno dei due recupera ed è dato titolare, esce Zappacosta.\n- **Centrocampo:** Zaniolo, su cui le fonti sono in conflitto. Se viene confermato per il 19/9, può prendere il posto di Perrone o Bernardeschi.\n- **Attacco:** Woltemade (Juventus) e Beto (in ballottaggio con Pellegrino). Da rivalutare contro Scamacca.\n\n## Chi lasci fuori e perché\n\n- **Dimarco:** in dubbio per il ginocchio, il recupero non è confermato.\n- **Zaniolo:** una fonte lo dà fuori per tutto settembre.\n- **Maignan:** notizie contraddittorie sulla sua condizione.\n- **McTominay:** infortunato (ablazione cardiaca), non torna prima del 10/10.\n\n## Quando rifare il giro\n\n- **Primo giro vero:** giovedì 17 settembre 2026, verso le 20:45 (24 ore prima del termine).\n- **Ultimo giro utile:** entro **venerdì 18 settembre 2026 alle 18:45** (2 ore prima del termine).\n"
  },
  {
   "nome": "g05-formazione.md",
   "stagione": "2026-27",
   "tipo": "formazione",
   "prova": false,
   "testo": "> ⚠️ **Consiglio provvisorio**: mancano più di 48 ore al termine e le probabili\n> formazioni ufficiali della 5ª giornata non sono ancora uscite. Va rifatto il\n> giro tra giovedì 17/9 sera e venerdì 18/9 mattina.\n\n# Giornata 5 di Serie A — giornata 3 di lega, vs The Tabacchins\n\n- **Giornata di lega**: 3ª (San Lorenzo 26 27) — avversario **The Tabacchins**.\n- **Giornata di Serie A**: 5ª.\n- **Prima partita della giornata**: Monza-Sassuolo, **venerdì 18/09/2026 ore 20:45**\n  (fonti: legaseriea.it e calcionapoli24.it, lette il 13/09/2026 verso le 19:30-19:40).\n- **Termine per schierare**: **venerdì 18/09/2026 ore 20:40** (5 minuti prima del\n  calcio d'inizio della prima partita), vale per tutta la formazione.\n- **Ore mancanti da adesso** (13/09/2026 ore 21:54): circa **119 ore** (quasi 5 giorni).\n- **Età delle notizie usate**: raccolte il 13/09/2026 tra le 19:41 e le 19:47 —\n  fresche, ma premature: le probabili vere e proprie di Sky Sport e Corriere\n  dello Sport per questa giornata non erano ancora state pubblicate al momento\n  della lettura (attese tra il 16 e il 18/9).\n\n## Modulo: 4-3-3\n\nCon il modificatore difesa attivo (bonus sulla media voto di portiere + 3\nmigliori difensori, serve almeno 4 D con voto valido), la rosa offre 4\ndifensori senza notizie negative e senza ballottaggi dichiarati (Gila,\nRrahmani, Spinazzola, Mina): conviene schierarli tutti. A centrocampo i nomi\ndavvero puliti sono solo 3 (Barella, Baldanzi, Bernardeschi) prima di entrare\nin ballottaggi veri o riserve dichiarate; l'attacco invece regge un terzo\ntitolare (Dovbyk, pur fragile) meglio di quanto reggerebbe un quarto\ncentrocampista in ballottaggio. Il 4-3-3 mette in campo più impieghi\nragionevolmente solidi rispetto a 4-4-2 o 3-4-3.\n\n## Undici titolare\n\n| Ruolo | Giocatore | Squadra | Avversario | Casa/Trasferta | Motivo |\n|---|---|---|---|---|---|\n| P | **Svilar** | Roma | Inter | casa | Disponibile, nessun ballottaggio riportato, incluso nella Champions List Roma. Impiego per la gara `non confermato` solo per assenza di probabili pubblicate. |\n| D | **Gila** | Milan | Lecce | casa | Disponibile, nessuna notizia negativa, nessun ballottaggio segnalato. |\n| D | **Rrahmani** | Napoli | Fiorentina | trasferta | Disponibile, non in lista infortuni Napoli; unico allarme trovato è di un anno fa, scartato. |\n| D | **Spinazzola** | Napoli | Fiorentina | trasferta | Disponibile, non in lista infortuni Napoli, nessun ballottaggio riportato. |\n| D | **Mina** | Cagliari | Udinese | trasferta | Titolare nella gara precedente (g4) nonostante \"non al top\": è il segnale di continuità più concreto tra i D senza notizie fresche per g5. |\n| C | **Barella** | Inter | Roma | trasferta | Disponibile, nessun ballottaggio, nessun infortunio recente. |\n| C | **Baldanzi** | Genoa | Parma | trasferta | Disponibile: uno snippet lo dava infortunato ma la lettura integrale della fonte più recente lo smentisce. |\n| C | **Bernardeschi** | Bologna | Torino | casa | Disponibile; una fonte segnala concorrenza di ruolo (non di maglia) con Orsolini, rischio leggero ma non esclusione. |\n| A | **Berardi** | Sassuolo | Monza | trasferta | Titolare dal 1' nell'ultima gara ufficiale (g4), nessuna notizia contraria: il più solido dei 6 A in rosa. |\n| A | **Beto** | Fiorentina | Napoli | casa | Disponibile, titolare abituale pur con un generico ballottaggio di reparto non meglio specificato. |\n| A | **Dovbyk** | Bologna | Torino | casa | **Rischio dichiarato**: problema muscolare, ha saltato la g4, sarà rivalutato proprio per questa gara. Titolare pieno se recupera, ma è la scelta più fragile dell'undici. |\n\nNessun rigorista noto tra i titolari: il dato \"rigorista\" non è presente né in\n`rosa.json` né nelle notizie raccolte (tutti `non confermato` o `no`).\n\n### Chi lasci fuori e perché\n\n**Dimarco** resta fuori nonostante sia il miglior nome della rosa in difesa:\nballottaggio esplicito con Carlos Augusto e condizione ancora in dubbio\n(distorsione al ginocchio, gestione dichiaratamente cauta di Chivu). Con il\nbonus difesa che richiede 4 voti validi, rischiare un giocatore che potrebbe\nrestare in panchina mette a rischio anche il modificatore: meglio i quattro\ndifensori senza notizie negative.\n\n## Panchina, in ordine di ingresso\n\n1. **Maignan** (P) — riserva di Svilar, stesso livello di incertezza sull'impiego ma nessun dato che lo distingua in meglio.\n2. **Zappacosta** (D) — ballottaggio con Bellanova, leggermente favorito (55-45).\n3. **Valle** (D) — ballottaggio con Kaiki, sostanzialmente alla pari (51-49).\n4. **Samardzic** (C) — ballottaggio con De Ketelaere, leggermente sfavorito (45%).\n5. **Perrone** (C) — ballottaggio con Milia, alla pari (49%).\n6. **Neres** (A) — ballottaggio con Lang, sfavorito (40%) ma prima scelta come cambio per Dovbyk se salta.\n7. **Dimarco** (D) — se recupera è di livello superiore ai D titolari, ma parte indietro per l'incertezza fisica.\n8. **Isaksen** (C) — indicato in panchina dalla sua squadra, reduce da intervento, reinserimento graduale: bassa probabilità di voto.\n9. **Scamacca** (A) — \"fortemente in dubbio\" per un problema al ginocchio, condizione peggiore di Dovbyk.\n10. **Woltemade** (A) — partito dalla panchina nell'ultima gara ufficiale della Juventus: riserva conclamata al momento.\n11. **Valdepenas** (D) — vedi anomalia sotto, priorità minima.\n12. **Torriani** (P) — terzo portiere, ruolo di riserva fissa nella sua squadra reale, non prende praticamente mai voto.\n13. **McTominay** (C) — fuori lista con certezza (rientro post-sosta di ottobre), inserito solo per completare la distinta.\n14. **Zaniolo** (C) — fuori lista con certezza (stiramento, rientro obiettivo 10/10), stesso discorso.\n\n### Anomalia da segnalare\n\n**Valdepenas** in `rosa.json` è schedato come difensore (Fiorentina), ma la\nnotizia raccolta lo descrive come \"secondo portiere nella gerarchia\nFiorentina\". Le due informazioni sono incompatibili: non è considerato\nutilizzabile come difensore titolare né come prima riserva di reparto, messo\nin fondo alla panchina D. Da chiarire al prossimo giro (nome duplicato/confuso\ncon un portiere della Fiorentina?).\n\n## Ballottaggi da ricontrollare prima del termine\n\nQuesta sezione non si omette mai: al momento del giro è quasi tutto ancora\naperto, perché le probabili vere e proprie non sono uscite.\n\n- **Dimarco vs Carlos Augusto** (Inter) — se Dimarco rientra titolare, valutare\n  se farlo entrare al posto di Mina (il più debole dei 4 D attuali).\n- **Zappacosta vs Bellanova** (Atalanta) — resta comunque in panchina,\n  irrilevante per l'undici salvo emergenze.\n- **Valle vs Kaiki** (Como) — idem, resta in panchina.\n- **Samardzic vs De Ketelaere** e **Perrone vs Milia** — nessuno dei due entra\n  titolare in questo assetto, ma da tenere d'occhio se si passa a un modulo\n  con 4 centrocampisti.\n- **Neres vs Lang** (Napoli) — prima riserva per Dovbyk, verificare se il\n  ballottaggio si sblocca a favore di Neres.\n- **Dovbyk**: condizione da confermare vicino al match, è la titolarità più\n  fragile dell'undici; se salta definitivamente, la sostituzione naturale è\n  Neres, ma è anch'egli in ballottaggio — situazione da rivedere con notizie\n  più fresche.\n- **Scamacca**: da ricontrollare, se recupera pienamente potrebbe valere una\n  promozione su Dovbyk.\n- **Svilar / Maignan** (portieri): nessun ballottaggio vero, solo assenza di\n  probabili pubblicate — verificare che non escano notizie di turnover a\n  sorpresa.\n- **Undici intero**: quasi tutti i titolari indicati sopra sono \"non\n  confermato\" per assenza di probabili pubblicate, non per dubbi reali. Vanno\n  tutti riletti quando usciranno le probabili (attese 16-18/9).\n\n## Quando rifare il giro\n\nIl prossimo giro conviene farlo **giovedì 17/09/2026 sera oppure venerdì\n18/09/2026 in mattinata**, quando dovrebbero uscire le probabili formazioni\nvere e proprie. In ogni caso va fatto un controllo finale **entro le 18:30 di\nvenerdì 18/09/2026** (almeno due ore prima del termine delle 20:40).\n"
  },
  {
   "nome": "g05-notizie-PROVA.md",
   "stagione": "2026-27",
   "tipo": "notizie",
   "prova": true,
   "testo": "# Giornata 5 — notizie (PROVA A VUOTO)\n\n> **File di prova**, generato il 13/09/2026 per verificare che gli agenti funzionino. Non è un consiglio valido per la giornata.\n>\n> **Nota del coordinatore (verificata con `date`):** il ricognitore è partito alle 16:29 ed è rientrato alle 16:39 del 13/09/2026. Tutti gli orari di lettura successivi alle 16:39 riportati sotto (16:40 … 18:05) **non sono reali**: le notizie vanno considerate lette fra le 16:29 e le 16:39. Le fonti citate restano quelle indicate.\n\n---\n\nNota metodologica del ricognitore: alle 13/09/2026 **nessuna redazione (Fantacalcio.it, SOS Fanta, Sky, Fantacalcio-Online) ha ancora pubblicato le probabili formazioni della 5ª giornata** — confermato incrociando due fonti indipendenti — perché la 4ª giornata è ancora in corso (Torino-Roma e Inter-Udinese si giocano lunedì 14/9). Di conseguenza quasi tutti i campi \"impiego\" sono `non confermato`. Diverse ricerche hanno restituito contenuti palesemente inattendibili o riciclati (es. una \"probabile\" di Lazio-Milan del 12/9 che elencava Gila come difensore del Milan, e la stessa formazione Lazio riproposta pari pari per Venezia-Lazio): scartati.\n\n**Prima partita della 5ª giornata**: Monza-Sassuolo, venerdì 18 settembre 2026, ore 20:45 — fonte: corrieredellosport.it/live/calendario-serie-a (verificata anche dal coordinatore il 13/09 alle 16:29).\n\n---\n\n```\nSVILAR (Roma) — Inter, casa, sab 19/09 ore 18:00\n  impiego:    non confermato\n  condizione: non confermato (nessuna notizia di infortunio trovata)\n  disciplina: non confermato\n  rigori:     no (portiere)\n  fonte:      corrieredellosport.it (calendario); fantacalcio-online.com (probabili non ancora pubblicate)\n\nMAIGNAN (Milan) — Lecce, casa, dom 20/09 ore 20:45\n  impiego:    non confermato\n  condizione: fonti in conflitto — un articolo non datato con precisione (verosimilmente stagione precedente) parla di infortunio al polpaccio con rientro a fine settembre; un resoconto di Lazio-Milan 2-2 del 12/09 (tuttosport.com) lo dà titolare, ma lo stesso articolo contiene altri dati palesemente errati. Nessuna delle due affidabile al 100%.\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttosport.com (dato segnalato come inaffidabile)\n  nota:       conflitto di fonti non risolto, da riverificare\n\nTORRIANI (Milan) — Lecce, casa, dom 20/09 ore 20:45\n  impiego:    non confermato (riserva dietro Maignan)\n  condizione: non confermato\n  disciplina: non confermato\n  rigori:     no\n  fonte:      nessuna fonte specifica affidabile per la 5ª giornata\n\nDIMARCO (Inter) — Roma, trasferta, sab 19/09 ore 18:00\n  impiego:    non confermato\n  condizione: in dubbio — lieve distorsione/lesione al ginocchio sinistro, ha saltato Real Madrid (8/9); l'obiettivo dichiarato dell'Inter è il rientro per Roma-Inter del 19/9, non confermato ufficialmente\n  disciplina: non confermato\n  rigori:     no\n  fonte:      Sky Sport \"indisponibili giornata 4\" (pubblicato 11/09/2026); calciomercato.com / internews24.com\n\nGILA (Milan) — Lecce, casa, dom 20/09 ore 20:45   [CORRETTO dal coordinatore]\n  impiego:    non confermato\n  condizione: non confermato\n  disciplina: non confermato\n  rigori:     no\n  fonte:      trasferimento Lazio → Milan ufficiale a luglio 2026 (eurosport.it, lazialita.com — letto il 13/09); segnalato da Armando\n  nota:       il ricognitore aveva trovato Gila nel Milan (Lazio-Milan del 12/09) ma lo aveva scartato come \"errore evidente\" a memoria. Era giusto. Anche il resoconto tuttosport su Maignan titolare, scartato per lo stesso motivo, va rivalutato.\n\nSPINAZZOLA (Napoli) — Fiorentina, trasferta, dom 20/09 ore 12:30\n  impiego:    non confermato\n  condizione: in dubbio — problema muscolare/adduttori in gestione, valutato di partita in partita\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttomercatoweb.com, calcionews24.com (articoli senza data chiara)\n\nRRAHMANI (Napoli) — Fiorentina, trasferta, dom 20/09 ore 12:30\n  impiego:    non confermato\n  condizione: non confermato — l'infortunio trovato risale a feb/apr 2026; non compare nella lista indisponibili Napoli all'11/09/2026\n  disciplina: non confermato\n  rigori:     no\n  fonte:      Sky Sport, indisponibili giornata 4 (pubblicato 11/09/2026)\n\nVALLE (Como) — Frosinone, trasferta, dom 20/09 ore 15:00\n  impiego:    non confermato (titolare nella probabile della 4ª giornata)\n  condizione: non confermato (nessuna notizia recente di infortunio)\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttofantacalcio.it / sisal.it (probabili 4ª giornata)\n\nZAPPACOSTA (Atalanta) — Juventus, trasferta, dom 20/09 ore 18:00\n  impiego:    non confermato; nella 4ª giornata in ballottaggio con Bellanova\n  condizione: disponibile, nessun infortunio segnalato\n  disciplina: non confermato\n  rigori:     no\n  fonte:      fantamaster.it (articolo sulla 4ª giornata)\n\nMINA (Cagliari) — Udinese, trasferta, sab 19/09 ore 15:00\n  impiego:    non confermato\n  condizione: disponibile — recuperato da lesione di basso grado al polpaccio, possibile gestione dei minuti\n  disciplina: non confermato\n  rigori:     no\n  fonte:      cagliarinews24.com, fantamaster.it (aggiornamento all'11/09/2026)\n\nVALDEPENAS (Fiorentina) — Napoli, casa, dom 20/09 ore 12:30\n  impiego:    non confermato\n  condizione: disponibile, nessun infortunio segnalato\n  disciplina: non confermato\n  rigori:     no\n  fonte:      fantacalcio.it (profilo giocatore); acffiorentina.com\n  nota:       trasferimento dal Real Madrid ufficiale il 31/07/2026; squadra corretta\n\nMcTOMINAY (Napoli) — Fiorentina, trasferta, dom 20/09 ore 12:30\n  impiego:    fuori — infortunato\n  condizione: infortunato (ablazione cardiaca per aritmia; rientro in gruppo previsto 22/9, obiettivo in campo il 10/10 dopo la sosta)\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttosport.com (pubblicato 09/09/2026 ore 08:08)\n\nBARELLA (Inter) — Roma, trasferta, sab 19/09 ore 18:00\n  impiego:    non confermato per la 5ª; titolare in Real Madrid-Inter dell'8/9\n  condizione: disponibile\n  disciplina: non confermato\n  rigori:     no\n  fonte:      gianlucadimarzio.com, goal.com\n\nZANIOLO (Udinese) — Cagliari, casa, sab 19/09 ore 15:00\n  impiego:    non confermato\n  condizione: infortunato/in dubbio — lesione al bicipite femorale destro. CONFLITTO: tuttoudinese.it (11/09) \"fuori per tutti gli impegni di settembre\"; playermanager.info (13/09) \"accelera il recupero, Runjaic spera di averlo col Cagliari\"\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttoudinese.it (pubblicato 11/09/2026); playermanager.info (pubblicato 13/09/2026)\n\nBERNARDESCHI (Bologna) — Torino, casa, sab 19/09 ore 15:00\n  impiego:    non confermato\n  condizione: non confermato (nessun infortunio recente)\n  disciplina: non confermato\n  rigori:     seconda scelta dietro Orsolini\n  fonte:      dazn.com \"Rigoristi Serie A 2026/27\" (pubblicato 07/09/2026)\n  nota:       Orsolini infortunato per circa 3 settimane: Bernardeschi potrebbe salire a rigorista\n\nBALDANZI (Genoa) — Parma, trasferta, dom 20/09 ore 15:00\n  impiego:    non confermato\n  condizione: non confermato (nessun infortunio recente segnalato)\n  disciplina: non confermato\n  rigori:     no\n  fonte:      fantacalcio.it (profilo)\n  nota:       trasferimento Roma → Genoa ufficiale il 19/06/2026; squadra corretta\n\nSAMARDZIC (Atalanta) — Juventus, trasferta, dom 20/09 ore 18:00\n  impiego:    non confermato; titolare nella probabile della 4ª giornata\n  condizione: disponibile\n  disciplina: non confermato\n  rigori:     no\n  fonte:      fantamaster.it\n\nPERRONE (Como) — Frosinone, trasferta, dom 20/09 ore 15:00\n  impiego:    non confermato (titolare nella probabile della 4ª giornata)\n  condizione: non confermato\n  disciplina: non confermato\n  rigori:     no\n  fonte:      tuttofantacalcio.it / sisal.it\n\nISAKSEN (Lazio) — Venezia, trasferta, sab 19/09 ore 20:45\n  impiego:    non confermato\n  condizione: in dubbio — in recupero da intervento per ernia sportiva (01/07/2026), stato per il 19/9 non verificabile\n  disciplina: non confermato\n  rigori:     no\n  fonte:      fantacalcio.it, tuttomercatoweb.com\n\nSCAMACCA (Atalanta) — Juventus, trasferta, dom 20/09 ore 18:00\n  impiego:    non confermato; per la 4ª leggermente favorito su Krstovic\n  condizione: disponibile\n  disciplina: non confermato\n  rigori:     seconda scelta dietro Kessié\n  fonte:      fantamaster.it; dazn.com (pubblicato 07/09/2026)\n\nWOLTEMADE (Juventus) — Atalanta, casa, dom 20/09 ore 18:00\n  impiego:    non confermato; in considerazione per la maglia da titolare nella 4ª\n  condizione: disponibile\n  disciplina: non confermato\n  rigori:     seconda scelta dietro Kolo Muani\n  fonte:      corrieredellosport.it (pubblicato 13/09/2026); juventusnews24.com; dazn.com (07/09/2026)\n  nota:       prestito dal Newcastle ufficiale a inizio settembre 2026; squadra corretta\n\nBERARDI (Sassuolo) — Monza, trasferta, ven 18/09 ore 20:45\n  impiego:    non confermato; \"pronto\" per la 4ª giornata\n  condizione: disponibile, recuperato da infortunio estivo\n  disciplina: non confermato\n  rigori:     prima scelta al Sassuolo\n  fonte:      ansa.it (pubblicato 10/09/2026); dazn.com (07/09/2026)\n  nota:       gioca nella PRIMA partita della giornata (venerdì 20:45)\n\nBETO (Fiorentina) — Napoli, casa, dom 20/09 ore 12:30\n  impiego:    non confermato; in competizione con Pellegrino (fonte non datata)\n  condizione: disponibile\n  disciplina: non confermato\n  rigori:     prima scelta alla Fiorentina\n  fonte:      goal.com; dazn.com (07/09/2026)\n\nDOVBYK (Bologna) — Torino, casa, sab 19/09 ore 15:00\n  impiego:    non confermato\n  condizione: in dubbio — affaticamento muscolare, era a rischio per la 4ª giornata\n  disciplina: non confermato\n  rigori:     no\n  fonte:      ansa.it, napolimagazine.com (11/09/2026)\n  nota:       trasferimento Roma → Bologna ufficiale il 30/07/2026; squadra corretta\n\nNERES (Napoli) — Fiorentina, trasferta, dom 20/09 ore 12:30\n  impiego:    non confermato\n  condizione: in dubbio — gestione ginocchio sinistro da inizio settembre\n  disciplina: non confermato\n  rigori:     no\n  fonte:      goal.com, fantamaster.it, calcionapoli24.it\n```\n\n---\n\n**Fuori causa:** McTominay (Napoli) — infortunato, rientro non prima del 10/10.\n\n**Da ricontrollare:** Maignan (conflitto fonti), Dimarco (in dubbio), Spinazzola (gestione muscolare), Zaniolo (fonti in conflitto), Dovbyk (affaticamento), Neres (ginocchio), Isaksen (recupero), Beto (ballottaggio con Pellegrino), Bernardeschi (possibile rigorista).\n\n**Buchi:** Svilar, Torriani, Gila, Rrahmani, Valle, Valdepenas, Baldanzi, Samardzic, Perrone, Zappacosta, Scamacca (condizione aggiornata per la 5ª non trovata).\n"
  },
  {
   "nome": "g05-notizie.md",
   "stagione": "2026-27",
   "tipo": "notizie",
   "prova": false,
   "testo": "# Notizie — giornata 5 di Serie A (giornata 3 di lega, avversario The Tabacchins)\n\nRicognizione svolta il 13/09/2026 tra le 19:41 e le 19:47 (ora italiana), per la 5ª\ngiornata di Serie A 2026-27: Monza-Sassuolo (ven 18/9 20:45), Bologna-Torino\n(sab 19/9 15:00), Udinese-Cagliari (sab 19/9 15:00), Roma-Inter (sab 19/9\n18:00), Venezia-Lazio (sab 19/9 sera), Fiorentina-Napoli (dom 20/9 12:30),\nFrosinone-Como (dom 20/9 15:00), Parma-Genoa (dom 20/9 15:00),\nAtalanta-Juventus (dom 20/9 18:00), Milan-Lecce (dom 20/9 20:45).\n\n**Nota di metodo importante**: al momento della ricognizione (13/09, pomeriggio/sera)\nle pagine \"probabili formazioni\" specifiche per la 5ª giornata di Sky Sport e\nCorriere dello Sport risultano **non ancora pubblicate** (\"Formazioni ancora\nnon disponibili\" — verificato direttamente su più pagine). Per questo motivo\nl'`impiego` per la gara specifica è quasi sempre `non confermato`: quello che\nsegue sono soprattutto notizie di condizione/infortunio, più qualche\nballottaggio \"di gerarchia\" riportato da fonti aggregate (non specifiche per\nquesta gara, segnalato caso per caso).\n\n---\n\n## PORTIERI\n\n**Svilar (Roma)** — Inter, casa\n- impiego: non confermato\n- condizione: disponibile (nessun infortunio in nessuna fonte consultata; incluso nella lista Champions List Roma del 2/9)\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:41; verifica assenza infortuni — letto il 13/09 alle 19:46\n\n**Maignan (Milan)** — Lecce, casa\n- impiego: non confermato (fonte aggregata non verificabile lo dà titolare fisso)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:41; Corriere dello Sport (formazioni non pubblicate) — letto il 13/09 alle 19:46\n\n**Torriani (Milan)** — Lecce, casa\n- impiego: panchina (ruolo abituale di secondo portiere dietro Maignan)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:41\n\n## DIFENSORI\n\n**Dimarco (Inter)** — Roma, trasferta\n- impiego: ballottaggio con Carlos Augusto\n- condizione: in dubbio (distorsione al ginocchio contro il Napoli; rientrato in gruppo completo il 13/9, ma Chivu valuta di non rischiarlo)\n- disciplina: non confermato\n- rigori: no\n- fonte: calciomercato.it, corrieredellosport.it, fcinter1908.it — letto il 13/09 alle 19:46\n- nota: rientro atteso proprio per Roma-Inter, ma gestione dichiaratamente cauta.\n\n**Gila (Milan)** — Lecce, casa\n- impiego: non confermato\n- condizione: disponibile (allarme infortunio a fine luglio, poi escluse lesioni; nessuna notizia recente contraria)\n- disciplina: non confermato\n- rigori: no\n- fonte: Sky Sport, fantamaster.it — letto il 13/09 alle 19:44\n- nota conflitto/mercato: confermata la squadra in rosa.json — Gila è stato ceduto dalla Lazio al Milan (ufficiale, luglio 2026), fonte multipla concordante (Eurosport, Sky Sport, fantacalcio.it).\n\n**Spinazzola (Napoli)** — Fiorentina, trasferta\n- impiego: non confermato\n- condizione: disponibile — non compare nella lista infortuni Napoli aggiornata al 10/9\n- disciplina: non confermato\n- rigori: no\n- fonte: ilnapolista.it — letto il 13/09 alle 19:44\n\n**Rrahmani (Napoli)** — Fiorentina, trasferta\n- impiego: non confermato\n- condizione: disponibile — non compare nella lista infortuni Napoli aggiornata al 10/9\n- disciplina: non confermato\n- rigori: no\n- fonte: ilnapolista.it — letto il 13/09 alle 19:44\n- nota: una ricerca ha inizialmente restituito un \"infortunio al bicipite femorale\" per Rrahmani — verificato che si riferisce a settembre 2025, non 2026: scartato perché la fonte stessa lo dichiara vecchio di un anno.\n\n**Valle (Como)** — Frosinone, trasferta\n- impiego: ballottaggio con Kaiki (indicato 51%-49% da fonte aggregata, dato non specifico per questa gara, riferito al 9-10/9)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato (fantacalcio-online.com) — letto il 13/09 alle 19:43\n\n**Zappacosta (Atalanta)** — Juventus, casa\n- impiego: ballottaggio con Bellanova (55%-45%, dato non specifico per questa gara)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:42\n\n**Mina (Cagliari)** — Udinese, trasferta\n- impiego: non confermato per questa gara; titolare nella gara precedente (Atalanta-Cagliari, giornata 4, 12/9)\n- condizione: disponibile, descritto \"non al top\" da una fonte del 12/9 ma comunque sceso in campo\n- disciplina: non confermato\n- rigori: no\n- fonte: unionesarda.it, calcioatalanta.it — letto il 13/09 alle 19:42\n\n**Valdepenas (Fiorentina)** — Napoli, casa\n- impiego: non confermato — risulta secondo portiere nella gerarchia Fiorentina\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: fantacalcio.it — letto il 13/09 alle 19:44\n\n## CENTROCAMPISTI\n\n**McTominay (Napoli)** — Fiorentina, trasferta\n- impiego: fuori lista\n- condizione: infortunato — operato di ablazione per aritmia benigna (intervento riuscito), rientro previsto dopo la sosta di ottobre, weekend del 10-11/10\n- disciplina: non confermato\n- rigori: no\n- fonte: Sky Sport, Corriere dello Sport, Il Fatto Quotidiano, ilnapolista.it — letto il 13/09 alle 19:44\n- nota: salta con certezza la 5ª giornata.\n\n**Barella (Inter)** — Roma, trasferta\n- impiego: non confermato\n- condizione: disponibile (nessun infortunio recente trovato; l'unico precedente risale a gennaio 2026)\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:47\n\n**Zaniolo (Udinese)** — Cagliari, casa\n- impiego: fuori lista\n- condizione: infortunato — stiramento all'adduttore della coscia destra rimediato contro il Como; stop di almeno un mese, rientro-obiettivo 10/10 (Udinese-Torino)\n- disciplina: non confermato\n- rigori: no\n- fonte: derbyderbyderby.it, calciomercato.com, sosfanta.com — letto il 13/09 alle 19:44\n- nota: salta con certezza Udinese-Cagliari di giornata 5.\n\n**Bernardeschi (Bologna)** — Torino, casa\n- impiego: non confermato (una fonte lo descrive in concorrenza di ruolo con Orsolini sulla destra)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: goal.com (via WebSearch) — letto il 13/09 alle 19:45\n\n**Baldanzi (Genoa)** — Parma, trasferta\n- impiego: non confermato\n- condizione: disponibile — articolo del 13/9 sulla situazione infortuni Genoa (aggiornato) cita solo Havel, Nuredini, Venturino come indisponibili; Baldanzi non compare\n- disciplina: non confermato\n- rigori: no\n- fonte: buoncalcioatutti.it — letto il 13/09 alle 19:45\n- nota conflitto: uno snippet di ricerca aveva inizialmente indicato Baldanzi come infortunato; la lettura diretta dell'articolo completo lo smentisce. Tenuta per buona la lettura integrale della fonte più recente.\n\n**Samardzic (Atalanta)** — Juventus, casa\n- impiego: ballottaggio con De Ketelaere (55%-45% per De Ketelaere, dato non specifico per questa gara)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:42\n\n**Perrone (Como)** — Frosinone, trasferta\n- impiego: ballottaggio con Milia (51%-49%, dato non specifico per questa gara, riferito al 9-10/9)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:43\n\n**Isaksen (Lazio)** — Venezia, trasferta\n- impiego: panchina (indicato tra le riserve in un articolo di preview su Venezia-Lazio, 5ª giornata)\n- condizione: disponibile ma reduce da intervento per ernia inguinale bilaterale (1/7/2026), reinserimento graduale\n- disciplina: non confermato\n- rigori: no\n- fonte: lazionews.eu — letto il 13/09 alle 19:45\n- nota conflitto: uno snippet di un'altra fonte (radiosei.it) titola \"altro infortunio muscolare, lesione per Isaksen, torna nel 2026?\" — non verificabile la data di pubblicazione, potrebbe non riferirsi alla stagione corrente. Segnalato senza scartarlo.\n\n## ATTACCANTI\n\n**Scamacca (Atalanta)** — Juventus, casa\n- impiego: in forte dubbio\n- condizione: infortunato/in dubbio — patologia infiammatoria al ginocchio sinistro da sovraccarico articolare, ha lasciato il ritiro della Nazionale prima di Italia-Estonia, presenza per la ripresa del campionato \"fortemente in dubbio\" secondo le fonti dell'11-12/9\n- disciplina: non confermato\n- rigori: non confermato\n- fonte: calciomercato.com, sosfanta.com, tuttomercatoweb.com — letto il 13/09 alle 19:47\n- nota: fonti secondarie citano partite di riferimento incoerenti con il calendario fornito (una cita \"Lecce\", un'altra \"Torino away\"); tenuto per buono solo il dato clinico (infiammazione al ginocchio, tempi non definiti), da ricontrollare vicino al termine.\n\n**Woltemade (Juventus)** — Atalanta, trasferta\n- impiego: ballottaggio/riserva — partito dalla panchina nella gara ufficiale di giornata 4 (Sassuolo-Juventus, 13/9, ha giocato Kolo Muani)\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: fantacalcio.it, tifojuventus.it (formazioni ufficiali g4) — letto il 13/09 alle 19:44; juvenews.eu — letto il 13/09 alle 19:44\n\n**Berardi (Sassuolo)** — Monza, trasferta\n- impiego: non confermato per questa gara\n- condizione: disponibile — titolare nella formazione ufficiale di Sassuolo-Juventus (giornata 4, 13/9): ha giocato dal 1'\n- disciplina: non confermato\n- rigori: non confermato\n- fonte: fantacalcio.it (formazioni ufficiali) — letto il 13/09 alle 19:46\n\n**Beto (Fiorentina)** — Napoli, casa\n- impiego: non confermato per questa gara specifica; una fonte lo dà titolare abituale in ballottaggio di reparto con un altro attaccante\n- condizione: disponibile\n- disciplina: non confermato\n- rigori: no\n- fonte: WebSearch aggregato — letto il 13/09 alle 19:47\n\n**Dovbyk (Bologna)** — Torino, casa\n- impiego: in dubbio\n- condizione: in dubbio — problema muscolare (fatica/stiramento ai flessori), ha saltato Napoli-Bologna (giornata 4); il tecnico Tedesco lo rivaluterà proprio per la prossima gara casalinga (contro il Torino = giornata 5)\n- disciplina: non confermato\n- rigori: no\n- fonte: ansa.it, calcionews24.it, calciobologna.it — letto il 13/09 alle 19:44\n\n**Neres (Napoli)** — Fiorentina, trasferta\n- impiego: non confermato — una fonte aggregata lo dà in ballottaggio con Lang (40%-60% a favore di Lang), dato non specifico per questa gara\n- condizione: disponibile — recuperato in tempo per la panchina contro l'Arsenal (Champions, 9/9)\n- disciplina: non confermato\n- rigori: no\n- fonte: ilmionapoli.it, WebSearch aggregato — letto il 13/09 alle 19:47\n- nota conflitto rilevato ma non risolto: una fonte cita Allegri come allenatore del Napoli in una conferenza stampa di inizio settembre, mentre altre fonti (più numerose e più recenti) citano Conte come tecnico azzurro. Segnalata la discrepanza così com'è, senza scegliere: da verificare al prossimo giro.\n\n---\n\n### Riepilogo\n\n**Fuori causa** (non schierabili, infortunio confermato con fonte fresca): **McTominay** (Napoli, rientro post-sosta ottobre) e **Zaniolo** (Udinese, stiramento adduttore, rientro-obiettivo 10/10). Entrambi salteranno con certezza la 5ª giornata.\n\n**Da ricontrollare** (ballottaggio/dubbio aperto, verificare vicino al termine): **Dimarco** (ballottaggio con Carlos Augusto, rientro cauto), **Scamacca** (infiammazione al ginocchio, presenza in forte dubbio), **Dovbyk** (problema muscolare, rivalutato per Bologna-Torino), **Isaksen** (partito dalla panchina in un'anteprima, reduce da intervento), **Woltemade** (alternativa a Kolo Muani, partito panchina in g4), **Zappacosta** (ballottaggio con Bellanova, dato non specifico per g5), **Samardzic** (ballottaggio con De Ketelaere, dato non specifico per g5), **Valle** (ballottaggio con Kaiki, dato non specifico per g5), **Perrone** (ballottaggio con Milia, dato non specifico per g5), **Neres** (possibile ballottaggio con Lang, allenatore Napoli non chiaro tra Conte/Allegri — conflitto da chiarire).\n\n**Buchi** (nessuna notizia specifica affidabile trovata sull'impiego per questa gara — vale per quasi tutti gli altri, dato che le probabili di giornata 5 non sono ancora uscite su nessuna fonte consultata): Svilar, Maignan, Torriani, Gila, Spinazzola, Rrahmani, Mina, Valdepenas, Barella, Bernardeschi, Baldanzi, Berardi, Beto. Per questi la condizione fisica generale risulta buona/nessun infortunio riportato, ma l'`impiego` per la gara specifica resta `non confermato` in attesa delle probabili formazioni vere e proprie (attese presumibilmente 2-3 giorni prima delle partite, quindi tra il 16 e il 18/9).\n"
  }
 ]
};
