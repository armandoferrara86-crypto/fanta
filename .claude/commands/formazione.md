---
description: Raccoglie le notizie e consiglia l'undici per la prossima giornata
argument-hint: [numero giornata] (facoltativo, altrimenti la deduce)
allowed-tools: Read, Write, Glob, Grep, WebSearch, WebFetch, Task, Bash(date:*), Bash(python3 strumenti/genera_sito.py), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*)
---

Consiglia la formazione per la giornata **$1** (se vuoto, deduci qual è la
prossima giornata di Serie A non ancora giocata).

## 1. Prepara

- Leggi `config/lega.json` e `rosa.json`. Se uno dei due manca, fermati e dillo.
- Ricava la data e l'ora correnti con `date`.
- Cerca sul web il calendario di quella giornata: tutte le partite con giorno
  e ora. Serve per due cose diverse, non confonderle: gli avversari di ogni tuo
  giocatore, e il **termine per schierare**.
- Il termine è la regola scritta in `config/lega.json` alla voce
  `termine_schieramento`: di norma il calcio d'inizio della **prima** partita
  della giornata. Individuala e calcola quante ore mancano da adesso.
- **Non dare per scontato che sia venerdì sera.** I turni infrasettimanali
  partono di martedì e gli anticipi si spostano. Se la prima partita cade prima
  del venerdì sera o in mezzo alla settimana, mettilo in cima al consiglio in
  evidenza: è il modo classico di arrivare a formazione bloccata.

## 2. Raccogli le notizie

Lancia il subagent `ricognitore` passandogli l'elenco completo dei 25 giocatori
di `rosa.json` con nome e squadra.

Il ricognitore deve tornare con, per ogni giocatore: stato di impiego previsto,
condizione fisica, squalifiche e diffide, e per ognuna di queste la fonte e
l'ora di lettura.

Salva quello che torna in `storico/2026-27/gNN-notizie.md`.

Nello stesso momento (in parallelo al ricognitore) lancia il subagent
`statistico` con lo stesso elenco di giocatori, nome, squadra e ruolo: raccoglie i
numeri della stagione in corso (presenze, MV, FM, gol, assist, cartellini, rigori)
con fonte e ora. Salva quello che torna in `storico/2026-27/gNN-statistiche.md`.
Se esiste già un file statistiche per questa giornata scritto dopo l'ultima
giornata giocata, riusalo invece di rilanciare lo statistico.

## 3. Scegli

Lancia il subagent `allenatore` passandogli i percorsi del file notizie e del
file statistiche appena scritti, `rosa.json` e `config/lega.json`.

## 4. Scrivi il consiglio

Salva in `storico/2026-27/gNN-formazione.md` e riporta in chat, in questo ordine:

**Testata**
Giornata; giorno, data e ora della prima partita, cioè il termine; ore mancanti
da adesso; da quando risalgono le notizie usate.
Se mancano più di 48 ore, scrivi in cima che il consiglio è provvisorio.
Se la prima partita non è nel solito fine settimana, scrivilo in grassetto.

**Undici titolare**
Modulo scelto e perché. Per ogni giocatore: ruolo, nome, squadra, avversario,
in casa o fuori, e una riga di motivo. Segna i rigoristi.

**Panchina in ordine**
Le sostituzioni automatiche entrano in quest'ordine: mettilo giusto, è la
differenza fra prendere 6 e prendere 4.5 quando uno non gioca.

**Ballottaggi da ricontrollare**
La lista dei nomi non sicuri, con il concorrente e cosa fare in ciascun caso.
Questa sezione non si omette mai. Se è vuota, scrivi che è vuota.

**Chi lasci fuori e perché**
Solo per le scelte non ovvie: se tieni in panchina un titolare, spiega.

**Quando rifare il giro**
Chiudi sempre con giorno e ora entro cui conviene rilanciare `/formazione`:
almeno due ore prima del termine. Scrivilo per esteso, non "prima della
partita". Se mancano meno di due ore, di' che questo è l'ultimo giro utile.

## 5. Aggiorna la pagina web

Dopo aver salvato i file in `storico/`, aggiorna la pagina che vedono Armando e Mirko:

1. `python3 strumenti/genera_sito.py`
2. `git add -A`
3. `git commit -m "Giornata NN di Serie A: consiglio"` (con il numero vero)
4. `git push`

In chat scrivi se la pubblicazione è andata a buon fine. Se il push fallisce,
riporta l'errore così com'è e non riprovare a vuoto: il consiglio in chat e nei
file resta comunque valido. GitHub Pages impiega un paio di minuti ad aggiornarsi.

## Regole di scelta

- I moduli ammessi stanno in `config/lega.json`. Non inventarne altri.
- Se il modificatore di difesa è attivo, valuta se schierare quattro difensori
  della stessa squadra o comunque di difese solide: il bonus sulla media dei
  voti difensivi spesso vale più di un attaccante in più.
- Un giocatore infortunato o squalificato non si schiera, nemmeno se è il più
  forte della rosa.
- Un diffidato si schiera normalmente, ma segnalalo: serve a programmare le
  giornate successive.
- A parità di tutto, preferisci chi gioca in casa e chi affronta una difesa
  debole. Se hai trovato dati sui gol subiti dell'avversario, usali; se non li
  hai, non inventarli.

## Cosa non fare

- Non dare per titolare nessuno solo perché "di solito gioca".
- Non usare la fantamedia della stagione scorsa come prova che uno giocherà.
- Non riempire i buchi con supposizioni: `non confermato` è una risposta valida.
