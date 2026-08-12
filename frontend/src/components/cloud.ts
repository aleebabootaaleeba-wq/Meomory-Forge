export function CloudStatus(): string {

return `

<section class="cloud-status">

<h2>☁ Infrastructure Health</h2>

<div class="cloud-grid">

<div class="cloud-card">

<h3>🪳 CockroachDB Cluster</h3>

<div class="status-row">
<span>Status</span>
<strong class="green">Healthy</strong>
</div>

<div class="status-row">
<span>Replication</span>
<strong>100%</strong>
</div>

<div class="status-row">
<span>Vector Search</span>
<strong>Enabled</strong>
</div>

<div class="status-row">
<span>Memory Records</span>
<strong>124</strong>
</div>

<div class="status-row">
<span>Latency</span>
<strong>11 ms</strong>
</div>

</div>

<div class="cloud-card">

<h3>☁ AWS Services</h3>

<div class="status-row">
<span>Amazon Bedrock</span>
<strong class="green">Online</strong>
</div>

<div class="status-row">
<span>AWS Lambda</span>
<strong>Running</strong>
</div>

<div class="status-row">
<span>S3 Storage</span>
<strong>Connected</strong>
</div>

<div class="status-row">
<span>Region</span>
<strong>us-east-1</strong>
</div>

<div class="status-row">
<span>API Gateway</span>
<strong>Running</strong>
</div>

</div>

</div>

</section>

`;

}