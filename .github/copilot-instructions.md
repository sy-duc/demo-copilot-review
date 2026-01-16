# Copilot Review Instructions
---

## 1. Project Baseline Assumptions
- File names must be meaningful, consistent, and accurately reflect their responsibilities.
- User interface options (e.g., dropdowns, checkboxes, radio buttons) must be data-driven and maintainable; hard-coded values should be avoided as they limit extensibility.
- All user-facing text must be internationalized (i18n) and must not be hard-coded.
- Styles must be properly scoped to prevent unintended side effects or cross-component interference.
---

## 2. Review Focus Definitions
### 2.1 Correctness
- Ensure the implemented logic aligns with the intended requirements.
- Focus on edge cases, state consistency, error handling, and interactions with existing logic.
- Prioritize behavioral correctness over code style.

### 2.2 Readability & Maintainability
- Focus on clarity, intent expressiveness, and safety of future changes.
- Identify implicit dependencies, unclear responsibilities, and fragile abstractions.

### 2.3 Architecture & Design
- Evaluate the integrity of boundaries, layering, dependency direction, and long-term scalability.
- Detect architectural drift or responsibility leakage across layers.

### 2.4 Performance
- Identify inefficiencies, unnecessary computations, or scalability risks.
- Avoid optimization unless the risk is clear and justified.

### 2.5 Security
- Identify common security vulnerabilities, improper handling of sensitive data, or authorization violations.
---

## 3. Review Behavior Guidelines
### 3.1 LOW
- Do not perform a full review by default.
- Raise issues or risks only when signals are clear and the impact is significant or severe.
- Avoid suggestions related to minor optimizations or incremental improvements.

### 3.2 MEDIUM
- Review primary flows and common scenarios thoroughly.
- Do not perform an exhaustive analysis.
- Ask questions or provide suggestions when code smells, ambiguous logic, or questionable assumptions are identified.

### 3.3 HIGH
- Proactively search for issues, potential risks, or deviations from expected behavior.
- Analyze critical flows and relevant edge cases.
- Clearly articulate risks when issues are identified.
- Ask questions when encountering unclear or ambiguous areas.
---

## 4. Escalation Rules
- Increase or decrease the review weight only when clear risk signals are identified in the modified code.
- Do not adjust the review weight in the absence of clear signals.
- Escalate or de-escalate only to the minimum level necessary to address the identified risk.
- Clearly state the rationale for escalation.
- Provide precise references to the specific files, functions, or code blocks that triggered the escalation.
---

## 5. Review Scope
- The Review Focus Definitions above describe known risk-based areas and are not exhaustive.
- Explicitly call out any risks or issues that fall outside these categories.
- Prioritize correctness and risk over cosmetic concerns.
- Avoid nitpicking minor details (e.g., formatting or isolated naming issues).
---

## 6. Feedback Principles
- Be concise and actionable.
- Use "Risk" when an issue may realistically lead to incorrect behavior, data inconsistency, or production incidents.
- Use "Suggest" when a change is backward-compatible and improves clarity, maintainability, or stability.
- Use "Question" when intent, assumptions, or constraints are unclear and require human confirmation.