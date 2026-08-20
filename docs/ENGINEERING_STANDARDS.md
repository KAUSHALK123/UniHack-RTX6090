# Engineering Standards & Team Workflow

## Git & Branching Strategy

- **Default branch**: `main`
- **Branch naming convention**: `<type>/issue-<issue-number>-<short-description>`
  - Examples:
    - `feat/issue-1-project-foundation`
    - `feat/issue-12-product-contract`
    - `fix/issue-14-validation-rules`
- **Rules**:
  - Never commit directly to `main`.
  - All features must go through Pull Requests referencing their Issue number.
  - Branches must stay focused on their assigned issue.

## Commit Message Standards

Follow Conventional Commits:
- `feat: implement canonical product domain model (#12)`
- `fix: resolve LOV lookup mismatch (#14)`
- `test: add unit tests for datasheet extractor (#15)`
- `docs: update setup and API documentation`
- `refactor: optimize batch ingestion pipeline`

## Code Quality & Tooling

### Python Backend (`apps/api`)
- **Linter & Formatter**: `ruff`
  - Run linting: `ruff check apps/api`
  - Run formatter: `ruff format apps/api`
- **Type Checking**: `mypy`
- **Testing**: `pytest`
  - Run tests: `pytest apps/api/tests`

### TypeScript & React Frontend (`apps/web`, `packages/*`)
- **Linter**: `eslint`
  - Run linting: `npm run lint`
- **Type Checking**: `tsc --noEmit`
- **Testing**: `vitest`
  - Run tests: `npm run test:web`

## Environment & Secrets
- Never commit `.env` files or API keys.
- Always update `.env.example` when introducing new environment variables.
