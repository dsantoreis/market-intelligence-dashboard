# Crowdscope Docs — Conversão para Astro Starlight

![Hero](./public/assets/hero.svg)

![Demo GIF](./public/assets/demo.gif)

[![Docs CI](https://img.shields.io/github/actions/workflow/status/dsantoreis/crowdscope/docs-site.yml?branch=main)](../../actions/workflows/docs-site.yml)

## Quickstart

```bash
npm ci
npm run dev
npm run build
```

## Architecture

```mermaid
flowchart LR
 UI[React Dashboard] --> API[FastAPI]
 API --> ETL[Data Pipeline]
 API --> DB[(Postgres)]
```

## Benchmarks

- Static docs build under 3s local
- CDN-ready output

## Docker

```bash
docker build -t crowdscope-docs:latest .
docker compose up --build
```

## Kubernetes

```bash
kubectl apply -f k8s/
```

⭐ Star the repo if this docs setup helps your market intelligence workflow.
