type MarketMetrics = {
  period: string;
  audience_growth_pct: number;
  engagement_rate_pct: number;
  sentiment: { positive: number; neutral: number; negative: number };
  top_channels: Array<{ name: string; share_pct: number }>;
};

async function getMetrics(): Promise<MarketMetrics> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const response = await fetch(`${apiBase}/api/market-metrics`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load market metrics");
  }

  return response.json();
}

export default async function HomePage() {
  const metrics = await getMetrics();

  return (
    <main>
      <h1>Market Intelligence Dashboard</h1>
      <p>Live portfolio demo with Next.js frontend + FastAPI backend.</p>

      <section className="card grid">
        <div>
          <div className="metric-label">Period</div>
          <div className="metric-value">{metrics.period}</div>
        </div>
        <div>
          <div className="metric-label">Audience growth</div>
          <div className="metric-value">{metrics.audience_growth_pct}%</div>
        </div>
        <div>
          <div className="metric-label">Engagement rate</div>
          <div className="metric-value">{metrics.engagement_rate_pct}%</div>
        </div>
      </section>

      <section className="card">
        <h2>Sentiment split</h2>
        <ul>
          <li>Positive: {metrics.sentiment.positive}%</li>
          <li>Neutral: {metrics.sentiment.neutral}%</li>
          <li>Negative: {metrics.sentiment.negative}%</li>
        </ul>
      </section>

      <section className="card">
        <h2>Top channels</h2>
        <ul>
          {metrics.top_channels.map((channel) => (
            <li key={channel.name}>
              {channel.name}: {channel.share_pct}%
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
