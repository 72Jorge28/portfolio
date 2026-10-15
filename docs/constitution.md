# Project Constitution

1. **Simple stack:** Reuse the existing stack and platform capabilities; new dependencies require justification and explicit approval.
2. **Specification and code:** Implement approved requirements only; when behavior changes, update and approve the specification before changing the implementation.
3. **Logic and interface:** Keep domain data and business rules separate from UI rendering and interaction.
4. **Tests:** Verify meaningful behavior and regressions using the testing and validation strategy defined in `AGENTS.md`; new testing dependencies require justification and explicit approval.
5. **User data:** Never commit secrets or expose private user data in logs, documentation, project memory, or public output.
6. **Language:** Write code, identifiers, comments, and technical documentation in English; provide translatable UI text in both English and Spanish catalogs.