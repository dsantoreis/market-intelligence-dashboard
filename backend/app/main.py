from datetime import UTC, datetime

from fastapi import FastAPI

app = FastAPI(title="Market Intelligence API", version="0.1.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "market-intelligence-backend",
        "timestamp": datetime.now(UTC).isoformat(),
    }


@app.get("/api/market-metrics")
def market_metrics() -> dict[str, object]:
    return {
        "period": "last_30_days",
        "audience_growth_pct": 12.4,
        "engagement_rate_pct": 4.8,
        "sentiment": {
            "positive": 68,
            "neutral": 21,
            "negative": 11,
        },
        "top_channels": [
            {"name": "Instagram", "share_pct": 41},
            {"name": "TikTok", "share_pct": 29},
            {"name": "YouTube", "share_pct": 18},
            {"name": "Reddit", "share_pct": 12},
        ],
    }
