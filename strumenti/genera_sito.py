#!/usr/bin/env python3
"""Genera docs/dati.js per la pagina web a partire dai file della cartella.

Uso:
    python3 strumenti/genera_sito.py              # tutti i dati
    python3 strumenti/genera_sito.py --senza-nomi # toglie i nomi degli allenatori avversari

Legge config/*.json, rosa.json e storico/**/*.md. Non modifica nessuno di quei file.
"""
import argparse
import json
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

RADICE = Path(__file__).resolve().parent.parent


def leggi_json(percorso):
    with open(RADICE / percorso, encoding="utf-8") as f:
        return json.load(f)


def tipo_file(nome):
    for tipo in ("formazione", "notizie", "bilancio"):
        if tipo in nome:
            return tipo
    return "altro"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--senza-nomi", action="store_true",
                        help="non pubblicare i nomi degli allenatori avversari")
    args = parser.parse_args()

    rose = leggi_json("config/rose-lega.json")
    if args.senza_nomi:
        for squadra in rose["squadre"]:
            squadra.pop("allenatore", None)

    storico = []
    for md in sorted((RADICE / "storico").rglob("*.md")):
        storico.append({
            "nome": md.name,
            "stagione": md.parent.name,
            "tipo": tipo_file(md.name),
            "prova": "PROVA" in md.name.upper(),
            "testo": md.read_text(encoding="utf-8"),
        })

    dati = {
        "generato": datetime.now(ZoneInfo("Europe/Rome")).strftime("%d/%m/%Y %H:%M"),
        "lega": leggi_json("config/lega.json"),
        "rosa": leggi_json("rosa.json"),
        "calendario": leggi_json("config/calendario-lega.json"),
        "rose": rose,
        "storico": storico,
    }

    uscita = RADICE / "docs" / "dati.js"
    uscita.parent.mkdir(exist_ok=True)
    uscita.write_text(
        "window.DATI = " + json.dumps(dati, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"Scritto {uscita.relative_to(RADICE)} ({len(storico)} file di storico, "
          f"nomi avversari {'esclusi' if args.senza_nomi else 'inclusi'})")


if __name__ == "__main__":
    main()
