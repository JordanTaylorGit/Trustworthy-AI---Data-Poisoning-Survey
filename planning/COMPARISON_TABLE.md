# Comparison Tables (the core of the presentation)

Fill with evidence from papers. Mark each cell as **reported** (paper says so) or **ours** (our inference).

## Defenses vs attack types

| Defense (paper) | Family | Label-flip | Clean-label | Patch backdoor | Adaptive attack | Needs clean data? | Scales to large models? | Source |
|---|---|---|---|---|---|---|---|---|
| Spectral Signatures | detection | | | | | | | |
| Neural Cleanse | inspection | | | | | | | |
| Anti-Backdoor Learning | robust training | | | | | | | |
| Deep Partition Aggregation | certified | | | | | | | |
| | | | | | | | | |

## Attacks compared

| Attack (paper) | Goal | Mechanism | Poison budget | Attacker knowledge | Setting | Evaluated against defenses | Source |
|---|---|---|---|---|---|---|---|
| Poison Frogs | targeted | feature collision | | | | | |
| Witches' Brew | targeted | gradient matching | | | | | |
| BadNets | backdoor | patch trigger | | | | | |
| PoisonedRAG | targeted | knowledge-base injection | | | | | |
| | | | | | | | |

## Critical-assessment prompts

- Are poison budgets realistic (1% of ImageNet is still millions of images)?
- Were defenses tested against adaptive attackers who know the defense?
- Do papers use the same datasets, architectures, and metrics? If not, results are not comparable.
- Does the threat model match a real pipeline (web scraping, outsourced training, shared checkpoints)?
- Do vision results transfer to LLMs?
