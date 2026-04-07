# aibiz-warsztat

Materiały warsztatu „Mapowanie procesów pod automatyzację" — przygotowane przez NoCodeWork dla AIbiz (Kacper).

**Live:** https://aibiz.nocodework.pl

## Zawartość

- `index.html` — hub nawigacyjny z linkami do trzech sekcji
- `prezentacja.html` — pełna prezentacja warsztatu (78 slajdów, fullscreen)
- `case-study-1.html` — Case Study #1: Agencja marketingowa „BrandUp"
- `case-study-2.html` — Case Study #2: E-commerce GreenNest
- `styles.css` — wspólne style stron case study
- `assets/` — logo AIbiz, logo NoCodeWork
- `fonts/` — MBJ-Handwriting (font dla prezentacji)
- `diagrams/` — miejsce na diagramy SVG (do uzupełnienia)

## Status diagramów

Strony case study zawierają placeholdery na 6 diagramów:

| Plik docelowy | Opis |
|---------------|------|
| `diagrams/diagram-cs1-agencja.svg` | CS1: AS-IS ręczny |
| `diagrams/diagram-cs1-agencja-bpmn.svg` | CS1: AS-IS BPMN |
| `diagrams/diagram-cs1-agencja-tobe.svg` | CS1: TO-BE |
| `diagrams/diagram-cs2-ecommerce.svg` | CS2: AS-IS ręczny |
| `diagrams/diagram-cs2-ecommerce-bpmn.svg` | CS2: AS-IS BPMN |
| `diagrams/diagram-cs2-ecommerce-tobe.svg` | CS2: TO-BE |

Po wgraniu plików SVG do `diagrams/` placeholdery zostaną zastąpione automatycznie (wymaga drobnej edycji w plikach HTML — `.diagram-placeholder` → `<img src="diagrams/...">`).

## Deploy

GitHub → Coolify (build pack: static), domena `aibiz.nocodework.pl`.
Webhook GitHub uruchamia rebuild automatycznie po `git push`.
