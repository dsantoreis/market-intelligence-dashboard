from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["service"] == "market-intelligence-backend"
    assert "timestamp" in body


def test_market_metrics_endpoint() -> None:
    response = client.get("/api/market-metrics")

    assert response.status_code == 200
    body = response.json()
    assert body["period"] == "last_30_days"
    assert body["engagement_rate_pct"] > 0
    assert len(body["top_channels"]) == 4
