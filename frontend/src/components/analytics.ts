export function Analytics(): string {

return `

<section id="analytics-section" class="analytics">

<h2>📊 AI Analytics Dashboard</h2>

<div class="analytics-grid">

<div class="chart-card">

<h3>Memory Usage</h3>

<div class="bar-chart">

<div class="bar b1"></div>

<div class="bar b2"></div>

<div class="bar b3"></div>

<div class="bar b4"></div>

<div class="bar b5"></div>

<div class="bar b6"></div>

<div class="bar b7"></div>

</div>

</div>

<div class="chart-card">

<h3>Agent Requests</h3>

<div class="circle-chart">

<div class="circle">

85%

</div>

</div>

</div>

<div class="chart-card">

<h3>Vector Search</h3>

<div class="progress-circle">

<div class="progress-fill"></div>

</div>

<p>12,540 Queries</p>

</div>

<div class="chart-card">

<h3>AWS Usage</h3>

<div class="aws-list">

<div>☁ Bedrock <span>96%</span></div>

<div>⚡ Lambda <span>88%</span></div>

<div>🪣 S3 <span>100%</span></div>

<div>🌍 API <span>92%</span></div>

</div>

</div>

</div>

</section>

`;

}