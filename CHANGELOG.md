# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-06

### Added
- Portfolio baseline for production-style showcase.
- FastAPI backend demo endpoints under `backend/`.
- Next.js frontend dashboard under `frontend/`.
- CI workflow for backend tests and frontend build.
- Container and deployment assets (`Dockerfile`, `docker-compose.yml`, `k8s/`).
- Documentation structure (`docs/`, `docs-site/`) and contribution/security templates.

### Changed
- README expanded with architecture, data-scale metrics, local run flow, and portfolio conversion sections.

### Quality
- Coverage gate configured in CI with `--cov-fail-under=80`.
