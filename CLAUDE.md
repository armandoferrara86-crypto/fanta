# Gestione fantacalcio — istruzioni permanenti

Questa cartella serve a gestire una squadra di fantacalcio Classic a scontri
diretti per tutta la stagione. L'utente si chiama Armando. Risposte in italiano, dirette, senza
preamboli.

## Regola numero uno: mai a memoria

Il tuo addestramento è vecchio di mesi. Formazioni, infortuni, squalifiche,
gerarchie dei rigoristi e persino le squadre di appartenenza cambiano di
continuo.

**Non scrivere MAI lo stato di un giocatore senza averlo appena letto sul web.**
Se non riesci a verificarlo, scrivi `non confermato` e vai avanti. Un dato
sbagliato dato per certo è molto peggio di un buco dichiarato.

Ogni affermazione sullo stato di un giocatore deve portare con sé:
- la fonte (nome del sito)
- la data e l'ora della lettura

## Regola numero due: il termine lo calcoli, non lo supponi

**Il termine per schierare è 5 minuti prima del calcio d'inizio della prima
partita della giornata.** Sul sito della lega l'opzione è "Timeout inserimento
formazione: 5 minuti" (vedi `termine_schieramento` in `config/lega.json`).
Confermato da Armando: il blocco scatta sulla prima partita e vale per tutta la
formazione.

Non è un giorno fisso della settimana: di solito è il venerdì sera, ma i turni
infrasettimanali partono di martedì e capitano anticipi spostati per impegni
europei o per esigenze televisive.

Quindi: a ogni giro vai a leggere sul calendario **giorno e ora della prima
partita di quella giornata** e calcola da lì. Non dare mai per scontato che si
giochi nel fine settimana.

Se la prima partita non è dove uno se l'aspetta — prima del venerdì sera, o in
mezzo alla settimana — **scrivilo in cima al consiglio, in evidenza**. È il modo
tipico di arrivare tardi con la formazione.

All'inizio di ogni consiglio scrivi sempre, in chiaro:
- la giornata di lega e la giornata di Serie A corrispondente, e l'avversario di lega
- giorno e ora della prima partita, e il termine (5 minuti prima)
- quante ore mancano da adesso
- quanto sono vecchie le notizie che hai usato

Se mancano più di 48 ore, dillo apertamente: il consiglio è provvisorio e va
rifatto. Se ne mancano meno di due, avvisa che non c'è più tempo per un altro
giro.

Alla fine di ogni consiglio indica **quando conviene rifare il giro**: almeno
due ore prima del termine, con giorno e ora scritti per esteso.

## Regola numero tre: i ballottaggi restano aperti

Non fingere certezza dove non c'è. Se un giocatore è in ballottaggio, dillo,
indica il concorrente e proponi l'alternativa in panchina. La lista dei
ballottaggi da ricontrollare prima del termine è la parte più utile di tutto
il lavoro: non ometterla mai.

## La lega

- **San Lorenzo 26 27** su Leghe Fantacalcio: https://leghe.fantacalcio.it/san-lorenzo-26-27
  ("San Lorenzo League" e "San Lorenzo 25 26" sono leghe vecchie: ignorale).
- Squadra **FC Tremoooooon**: Mirko allenatore principale, Armando allenatore in
  seconda. Mirko di solito invia la formazione dall'app.
- Classic **a scontri diretti**, 8 squadre: il totale punti diventa gol secondo
  le soglie in `config/lega.json`.
- **Le giornate di lega sono sfalsate rispetto alla Serie A** (la 1ª di lega è
  la 3ª di Serie A). La corrispondenza esatta sta in `config/calendario-lega.json`:
  non ricavarla a mente.
- Nei file di `storico/` il numero `gNN` è la **giornata di Serie A**. In testa
  a ogni file scrivi anche la giornata di lega e l'avversario.

## File della cartella

| Percorso | Cosa contiene |
|---|---|
| `config/lega.json` | Regole della lega: moduli, modificatori, punteggi, soglie gol, termine. **Fonte unica**: non usare mai regole a memoria. |
| `config/calendario-lega.json` | Accoppiamenti di lega giornata per giornata, con la giornata di Serie A corrispondente. |
| `config/rose-lega.json` | Rose delle altre 7 squadre, lette dal sito della lega (con data di lettura). |
| `rosa.json` | I 25 giocatori di Armando. Lo genera `/rosa`. |
| `in/` | Dove Armando lascia i file da leggere (l'export della console d'asta). |
| `storico/2026-27/` | Un file per giornata: notizie raccolte e formazione consigliata. |
| `docs/` | Pagina web pubblica per Armando e Mirko (GitHub Pages). `docs/dati.js` non si scrive a mano: lo rigenera `python3 strumenti/genera_sito.py`. |
| `strumenti/genera_sito.py` | Costruisce `docs/dati.js` dai file sopra. |

**Il repository GitHub è pubblico**: tutto quello che finisce in questa cartella
(tranne `in/`, esclusa da `.gitignore`) è visibile a chiunque. Non scriverci mai
password, email, token o dati personali che non siano già quelli della lega.

## Comandi

- `/rosa` — legge l'export della console d'asta e costruisce `rosa.json`
- `/formazione` — raccoglie le notizie e consiglia l'undici per la prossima giornata
- `/bilancio` — a giornata conclusa, confronta le scelte con quello che è successo

## Come lavorare

Prima di qualsiasi consiglio leggi sempre `config/lega.json` e `rosa.json`.
Se uno dei due manca o è incompleto, fermati e dillo, non tirare a indovinare.

Non modificare `rosa.json` durante `/formazione`. Quel file cambia solo con
`/rosa` o quando Armando chiede esplicitamente un aggiornamento (scambio,
svincolo, acquisto dal mercato di riparazione).

Scrivi i file in `storico/` senza chiedere conferma. Non sovrascrivere un file
di giornata già esistente: aggiungi un suffisso progressivo (`g05-formazione-2.md`)
così resta traccia di come è cambiato il consiglio avvicinandosi al termine.
