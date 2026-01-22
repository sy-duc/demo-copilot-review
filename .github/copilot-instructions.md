# Copilot Review Instructions


## Project Baseline Assumptions
- The following are non-negotiable project invariants.
- Any violation introduced by this Pull Request must be explicitly called out as a Risk.

1. File names must be meaningful, consistent, and accurately reflect their responsibilities.
2. User interface options (e.g., dropdowns, checkboxes, radio buttons) must be data-driven and maintainable; hard-coded values should be avoided as they limit extensibility.
3. All user-facing text must be internationalized (i18n) and must not be hard-coded.
4. Styles must be properly scoped to prevent unintended side effects or cross-component interference.


## Review Behavior Guidelines
- This document defines the **expected review behavior and evaluation dimensions** for you when reviewing Pull Requests.
- These guidelines describe **how to review**, not a checklist of items that must always be reported.
- These guidelines describe known risk-based areas and are not exhaustive. You can specify any risks or issues that fall outside these categories.

1. Correctness
- Ensure the implemented logic aligns with the intended requirements.
- Focus on edge cases, state consistency, error handling, and interactions with existing logic.
- Prioritize behavioral correctness over code style.

2. Readability & Maintainability
- Focus on clarity, intent expressiveness, and safety of future changes.
- Identify implicit dependencies, unclear responsibilities, and fragile abstractions.

3. Architecture & Design
- Evaluate the integrity of boundaries, layering, dependency direction, and long-term scalability.
- Detect architectural drift or responsibility leakage across layers.

4. Performance
- Identify inefficiencies, unnecessary computations, or scalability risks.
- Avoid optimization unless the risk is clear and justified.

5. Security
- Identify common security vulnerabilities, improper handling of sensitive data, or authorization violations.


## Review Scope
- This section defines the **boundaries and priorities** of the review to prevent unnecessary noise and over-reviewing.

1. Prioritize correctness and risk over cosmetic concerns.

2. Avoid nitpicking minor details (e.g., formatting or isolated naming issues).

3. Only mention cosmetic or style-related issues if:
- They significantly reduce readability or maintainability, or
- They appear repeatedly and suggest a systematic problem.


## Feedback Principles
- This section defines **how you should express review feedback**.

1. Keep feedback concise and directly actionable.

2. Use "Risk" when an issue may realistically lead to incorrect behavior, data inconsistency, or production incidents.

3. Use "Suggest" when a change is backward-compatible and improves clarity, maintainability, or stability.

4. Use "Question" when intent, assumptions, or constraints are unclear and require human confirmation.

5. Do NOT restate, summarize, or rephrase the checklist. They are provided as operating constraints, not review content.

6. Reference specific code locations when it improves clarity or precision.
