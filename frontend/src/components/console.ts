export function Console(): string {

return `

<section class="console-section">

<h2>💬 Live AI Agent Console</h2>

<div class="console">

<div class="console-header">

<span class="dot red"></span>
<span class="dot yellow"></span>
<span class="dot green"></span>

<span class="console-title">memoryforge-terminal</span>

</div>

<div class="console-body">

<p><span class="time">09:41</span> 🔍 Research Agent → Searching previous memory...</p>

<p><span class="success">✔ Memory Found</span> (12 related memories)</p>

<p><span class="time">09:42</span> 💻 Coding Agent → Generating backend APIs...</p>

<p><span class="loading">██████████░░░░░ 78%</span></p>

<p><span class="time">09:43</span> 🧪 Testing Agent → Running unit tests...</p>

<p><span class="success">✔ 124 Tests Passed</span></p>

<p><span class="time">09:44</span> 🚀 Deployment Agent → Deploying to AWS...</p>

<p><span class="success">✔ Deployment Successful</span></p>

<p><span class="time">09:45</span> 🪳 CockroachDB → Memory synchronized.</p>

<p><span class="success">✔ Replication Complete</span></p>

</div>

</div>

</section>

`;

}