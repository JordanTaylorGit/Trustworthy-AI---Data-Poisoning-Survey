# Taxonomy (draft, edit together)

## Attacks: three axes

**Goal**
- Indiscriminate / availability: degrade overall accuracy
- Targeted: misclassify specific test inputs
- Backdoor: trigger causes attacker-chosen output, clean accuracy preserved

**Mechanism**
- Label flipping
- Clean-label (feature collision, gradient matching, bilevel optimization)
- Trigger insertion (patch, blended, input-aware, semantic)

**Setting**
- Classic ML (SVM, regression)
- Deep learning from scratch
- Transfer learning / fine-tuning
- Contrastive / multimodal pretraining
- LLM pretraining, instruction tuning, RLHF data
- RAG and knowledge bases, agent memory

## Defenses: four families

1. **Data sanitization / detection:** spectral signatures, activation clustering, influence-based filtering
2. **Robust training:** anti-backdoor learning, gradient shaping, differential privacy as a defense
3. **Model inspection and repair:** trigger reverse-engineering, pruning, fine-tuning, unlearning
4. **Certified defenses:** partitioning/aggregation, provable bounds on poison impact

## Questions to answer for every category (from the assignment)

- What problem does it address?
- Central idea and key insight?
- Assumptions (attacker knowledge, poison budget, access to training pipeline, defender's clean data)?
- How is it evaluated (datasets, metrics, attack success rate vs clean accuracy)?
- Strengths and limitations?
- How does it differ from competing approaches?
- What is unresolved?

## Decisions log

| Date | Decision | Why |
|---|---|---|
| | | |
