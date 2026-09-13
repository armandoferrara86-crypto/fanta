# Gestione fantacalcio 2026-27

Cartella di lavoro per Claude Code. Gestisce la squadra durante la stagione:
raccoglie le notizie, consiglia la formazione, fa il bilancio a giornata finita.

## Prima volta

1. Apri `config/lega.json` e **controlla ogni valore** contro le impostazioni
   vere della tua lega. Soprattutto: modificatore di difesa, moduli ammessi,
   numero di sostituzioni automatiche.
2. Esporta lo stato dalla console d'asta (pulsante **Salva stato**) e metti il
   file in `in/`.
3. Lancia `/rosa`. Costruisce `rosa.json` prendendo i giocatori con `mine: true`.

## Ogni settimana

Il termine per schierare è il **calcio d'inizio della prima partita della
giornata**, che di solito è il venerdì sera. Non è un giorno fisso: i turni
infrasettimanali partono di martedì e gli anticipi si spostano. Per questo il
comando va a leggersi il calendario ogni volta invece di dare per scontato il
fine settimana.

| Quando | Comando | Cosa fa |
|---|---|---|
| Circa 24 ore prima del termine | `/formazione` | Primo quadro: probabili, infortuni, squalifiche |
| Almeno 2 ore prima del termine | `/formazione` | Secondo giro: ballottaggi sciolti e notizie tardive |
| A voti usciti | `/bilancio N` | Confronta le scelte con quello che è successo |

Il secondo giro non è un vezzo: le probabili si consolidano nelle ultime ore ed
è lì che si decidono i ballottaggi. Ogni consiglio si chiude dicendoti giorno e
ora entro cui rilanciarlo, così non devi tenerlo a mente.

## Come è fatto

Due agenti separati, e la separazione è il punto:

- **ricognitore** — va sul web e raccoglie i fatti. Ogni dato porta fonte e ora
  di lettura. Dove non trova, scrive `non confermato`.
- **allenatore** — sceglie la formazione leggendo *solo* quei fatti. Non ha
  accesso al web, quindi non può far passare un ricordo per una notizia.

Tenerli distinti evita il guaio peggiore di questi sistemi: una supposizione
scritta con lo stesso tono di un dato verificato.

## Cosa resta fuori

- Il mercato di riparazione e gli svincolati.
- Le proposte di scambio.

Si aggiungono quando servono, come comandi nuovi in `.claude/commands/`.
