
# Erweiterung der Projekt- und Referenzen-Sektion

## Ziel
Die bestehende Teaser-Sektion durch eine vollwertige Referenzseite mit echten Projektdaten ersetzen. Die Bilder und Projektdetails zeigen die technische Kompetenz und Erfahrung von GRAU Engineering.

---

## Empfohlene Struktur

### Option A: Erweiterte Karten-Galerie (Empfehlung)
Jedes Projekt als eigene Karte mit:
- Hauptbild
- Projektname
- Kunde
- Anlagentyp
- Fertigstellungsjahr
- Optional: "Besonderheiten" als ausklappbares Accordion

**Vorteile:**
- Zeigt alle 4 Hauptprojekte auf einen Blick
- Skalierbar bei neuen Projekten
- Bleibt auf dem Onepager kompakt

### Option B: Projekt-Slider/Carousel
Horizontaler Slider mit den Projekten, bei dem jedes Projekt mehrere Bilder haben kann.

**Vorteile:**
- Platz fur mehrere Bilder pro Projekt
- Interaktiver

**Nachteile:**
- Weniger ubersichtlich auf einen Blick

---

## Empfohlene Umsetzung (Option A)

### Datenstruktur
4 Hauptprojekte mit vollstandigen Informationen:

| Projekt | Kunde | Anlagen | Jahr |
|---------|-------|---------|------|
| Windpark Hohenlimburg | SL NaturEnergie GmbH | 4x E-138 EP3 E2 | 2024 |
| Windpark Neuenrade | SL NaturEnergie GmbH | 6x E-115 E1 | 2021 |
| Windpark Halde Mottbruch | Steag GmbH / RWE | 1x E-138 EP3 | 2021 |
| Windpark Bottrop Kirchhellen | SL Windenergie GmbH | 2x E-103 EP2 | 2023 |

### Bildauswahl
Fur die beste visuelle Wirkung empfehle ich folgende Hauptbilder:

1. **Hohenlimburg**: Panorama-Drohnenaufnahme (Windpark_Hohenlimburg.jpg oder _1.jpg)
2. **Neuenrade**: Panorama bei Sonnenaufgang (Windpark_Neuenrade.jpg)
3. **Halde Mottbruch**: Nacht-Selbstfahrer-Bild (Windpark_Halde-Mottbruch_07-2021_1.jpg) - sehr einzigartig!
4. **Bottrop Kirchhellen**: Kranmontage (Windpark_Bottrop_Kirchhellen.jpg)

### Layout-Anderungen

```text
+------------------------------------------+
|    Projekte & Referenzen                 |
|    "Ausgewahlte Projekte aus unserem     |
|     Portfolio im Bereich Windenergie."   |
+------------------------------------------+

+----------+  +----------+  +----------+  +----------+
|  [Bild]  |  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |
+----------+  +----------+  +----------+  +----------+
| Hohen-   |  | Neuen-   |  | Halde    |  | Bottrop  |
| limburg  |  | rade     |  | Mottbruch|  | Kirch-   |
|          |  |          |  |          |  | hellen   |
| Kunde    |  | Kunde    |  | Kunde    |  | Kunde    |
| 4x E-138 |  | 6x E-115 |  | 1x E-138 |  | 2x E-103 |
| 2024     |  | 2021     |  | 2021     |  | 2023     |
|          |  |          |  |          |  |          |
| [v Mehr] |  | [v Mehr] |  | [v Mehr] |  | [v Mehr] |
+----------+  +----------+  +----------+  +----------+
```

- **Desktop**: 4-spaltig (md:grid-cols-2, lg:grid-cols-4)
- **Tablet**: 2-spaltig
- **Mobile**: 1-spaltig

### Besonderheiten als Accordion
Projekte mit Besonderheiten (Halde Mottbruch, Hohenlimburg-Logistik, Neuenrade, Bottrop) erhalten ein "Mehr erfahren"-Accordion, das die technischen Details zeigt.

---

## Technische Umsetzung

### 1. Bilder kopieren
Die hochgeladenen Bilder werden in `src/assets/projects/` abgelegt:
- `hohenlimburg.jpg`
- `neuenrade.jpg`
- `halde-mottbruch.jpg`
- `bottrop.jpg`
- Optional weitere Bilder fur spatere Erweiterung

### 2. ProjectsSection.tsx erweitern
- Neue Datenstruktur mit allen Projektfeldern
- Grid auf 4 Spalten erweitern
- Radix UI Accordion fur Besonderheiten einbinden
- Badges fur Jahr und Projekttyp (Repowering)

### 3. Zusatzliche visuelle Elemente
- "Repowering"-Badge fur entsprechende Projekte
- Jahres-Badge in der Ecke
- Hover-Effekt auf Bildern

---

## Alternativ: Separate Referenzseite

Falls die Onepager-Struktur beibehalten werden soll, konnte auch eine separate `/referenzen`-Seite erstellt werden mit:
- Vollstandiger Projekt-Galerie
- Mehreren Bildern pro Projekt
- Ausfuhrlichen Beschreibungen

Der Onepager wurde dann weiterhin nur einen Teaser mit 3-4 Projekten zeigen und auf die Detailseite verlinken.

---

## Empfehlung

**Ich empfehle Option A mit 4 Projektkarten** - das passt zur professionellen B2B-Asthetik, zeigt die Breite der Erfahrung und bleibt auf dem Onepager ubersichtlich. Die Besonderheiten als Accordion bieten interessierten Besuchern die technischen Details, ohne die Seite zu uberladen.

Soll ich diesen Plan umsetzen?
