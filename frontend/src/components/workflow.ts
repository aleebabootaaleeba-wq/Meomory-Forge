export function Workflow(): string {

return `

<section id="workflow-section" class="workflow">

<h2>🤖 AI Agent Workflow</h2>

<div class="workflow-container">

<div class="workflow-card">

<div class="agent-avatar">🔍</div>

<h3>Research Agent</h3>

<p class="status online">● Thinking...</p>

<div class="progress">

<div class="progress-bar research"></div>

</div>

<p>Task</p>

<strong>Collecting Requirements</strong>

</div>

<div class="arrow">

↓

</div>

<div class="workflow-card">

<div class="agent-avatar">💻</div>

<h3>Coding Agent</h3>

<p class="status online">● Generating API</p>

<div class="progress">

<div class="progress-bar coding"></div>

</div>

<p>Task</p>

<strong>Building Backend</strong>

</div>

<div class="arrow">

↓

</div>

<div class="workflow-card">

<div class="agent-avatar">🧪</div>

<h3>Testing Agent</h3>

<p class="status online">● Running Tests</p>

<div class="progress">

<div class="progress-bar testing"></div>

</div>

<p>Task</p>

<strong>Validating Output</strong>

</div>

<div class="arrow">

↓

</div>

<div class="workflow-card">

<div class="agent-avatar">🚀</div>

<h3>Deployment Agent</h3>

<p class="status online">● Ready</p>

<div class="progress">

<div class="progress-bar deploy"></div>

</div>

<p>Task</p>

<strong>Deploy to AWS</strong>

</div>

</div>

</section>

`;

}