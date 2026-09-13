---
description: Costruisce rosa.json dall'export della console d'asta
argument-hint: [percorso del file] (facoltativo, altrimenti cerca in in/)
allowed-tools: Read, Write, Glob
---

Costruisci `rosa.json` a partire dal file di stato salvato dalla console d'asta.

## Da dove leggere

Se `$1` è indicato, usa quel file. Altrimenti cerca in `in/` il file `.json`
più recente il cui contenuto abbia le chiavi `cfg`, `sold` e `players`.
Se non lo trovi, fermati e spiega ad Armando che deve esportarlo dalla console
con il pulsante **Salva stato** e metterlo in `in/`.

## Come si legge quel file

- `players` è l'elenco completo del listone. Ogni voce ha
  `id, nome, squadra, ruolo, qta, fvm, pv, mv, fm, gol, ass, rig`.
- `sold` è una mappa `id → {price, mine}`.
- **I giocatori di Armando sono quelli con `mine: true`.** Gli altri sono
  andati agli avversari: ignorali.
- `cfg` contiene le regole della lega: `part`, `budget`, `slots`, `modulo`,
  `modDif`.

## Cosa scrivere

`rosa.json` con questa forma:

```json
{
  "stagione": "2026-27",
  "aggiornato": "GG/MM/AAAA",
  "crediti_spesi": 0,
  "giocatori": [
    {
      "nome": "", "squadra": "", "ruolo": "P|D|C|A",
      "pagato": 0, "quotazione": 0,
      "fm_scorsa": null, "presenze_scorsa": null, "rigorista": false,
      "stato": "in rosa"
    }
  ]
}
```

Ordina per ruolo (P, D, C, A) e dentro ogni ruolo per prezzo pagato decrescente.
Metti `rigorista: true` se nel listone `rig` era 3 o più.

## Poi aggiorna la configurazione

Da `cfg` riporta in `config/lega.json` i valori di `partecipanti`, `budget`,
`slot_per_ruolo` e `modificatore_difesa`. **Non toccare gli altri campi**:
punteggi e moduli ammessi li ha messi Armando e la console non li conosce.

## Alla fine

Riepiloga in chat: quanti giocatori per ruolo, quanto ha speso in totale e per
reparto, e i tre più pagati. Poi avvisalo di aprire `config/lega.json` e
verificare a mano modificatori e punteggi contro le impostazioni vere della
sua lega, perché quelli la console non li sa.
