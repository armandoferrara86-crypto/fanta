---
description: A giornata conclusa, confronta le scelte fatte con quello che è successo
argument-hint: [numero giornata]
allowed-tools: Read, Write, Glob, WebSearch, WebFetch, Bash(date:*)
---

Fai il bilancio della giornata **$1**.

## Passi

1. Leggi `storico/2026-27/gNN-formazione.md`: è quello che avevi consigliato.
   Se non esiste, dillo e fermati.
2. Cerca sul web i voti e i bonus della giornata per i giocatori schierati.
   Usa le pagine dei voti ufficiali di Fantacalcio.it. Se i voti non sono
   ancora usciti, dillo e fermati: non stimarli.
3. Ricostruisci il punteggio applicando i punteggi di `config/lega.json`,
   modificatori inclusi.

## Cosa scrivere in `storico/2026-27/gNN-bilancio.md`

- Punteggio totale e voto per voto degli undici schierati.
- **Le scelte sbagliate**: chi hai schierato che non ha giocato, e chi avevi
  lasciato in panchina che ha fatto meglio. Con quanto è costato in punti.
- **I ballottaggi**: come sono finiti quelli che avevi segnalato come aperti.
  Questa è la sezione che serve davvero, perché è l'unica che insegna qualcosa
  per la volta dopo.
- **Le sostituzioni automatiche**: sono entrate? L'ordine della panchina era
  giusto?
- Una riga sola di lezione, se ce n'è una vera. Se la giornata è andata come
  doveva, scrivi che è andata come doveva. Non inventare insegnamenti.

## Regola

Non addolcire. Se il consiglio era sbagliato, scrivi che era sbagliato e
perché. Il valore di questo file è tutto nell'onestà: serve a capire se il
metodo funziona o se va corretto.
