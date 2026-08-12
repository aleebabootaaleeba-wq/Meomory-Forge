# 🧠 MemoryForge

## Agentic AI Memory Platform Powered by CockroachDB and AWS

MemoryForge is an agentic AI memory platform designed to give AI agents a reliable, persistent, searchable, and structured memory layer.

Instead of treating every AI interaction as an isolated conversation, MemoryForge provides a centralized memory system where information can be stored, updated, retrieved, searched, and managed by AI agents.

The project combines a modern web dashboard with a backend API, persistent database storage, AI-agent workflows, and cloud-ready architecture.

---

# 🚀 Project Overview

AI agents are becoming increasingly capable, but one major limitation remains: **memory**.

An AI agent may perform a task successfully during one interaction but lose important context when the interaction ends.

MemoryForge addresses this problem by providing a dedicated memory layer for AI agents.

The platform allows users and agents to:

- Create memories
- Store important context
- Associate memories with agents
- Retrieve stored memories
- Edit existing memories
- Delete outdated memories
- Search memories
- Manage AI agents
- Monitor agent activity
- Visualize system analytics
- Monitor cloud-related services
- Understand AI-agent workflows

The long-term goal is to create a dependable memory infrastructure that AI agents can use across sessions.

---

# 🎯 Problem Statement

Modern AI agents are increasingly being used for research, coding, testing, automation, and decision-making.

However, many AI systems face limitations around persistent memory.

Important context can become:

- Lost between sessions
- Difficult to retrieve
- Difficult to organize
- Difficult to associate with a specific agent
- Difficult to update
- Difficult to search
- Dependent on a single system

This creates a major challenge for long-running autonomous agents.

MemoryForge introduces a dedicated memory layer that allows agents to persist and retrieve useful information.

---

# 💡 Solution

MemoryForge acts as an intelligent memory infrastructure between AI agents and persistent data storage.

A simplified workflow is:

User / Agent
        ↓
MemoryForge Dashboard
        ↓
Backend API
        ↓
Memory Layer
        ↓
CockroachDB
        ↓
Persistent Agent Context

The system is designed so that AI agents can store useful information and retrieve it when needed.

---

# ✨ Key Features

## 🧠 Persistent Agent Memory

MemoryForge provides a dedicated place to store information that agents may need later.

Each memory can contain:

- Title
- Content
- Associated agent
- Creation information
- Database identifier

---

## 🤖 AI Agent Management

The platform supports multiple AI agents with different responsibilities.

Example agents include:

- Research Agent
- Coding Agent
- Testing Agent
- Deployment Agent

Each agent can be associated with relevant memories.

---

## ✏️ Memory Editing

Users can modify existing memories.

The edit interface allows users to update:

- Memory title
- Memory content
- Associated agent

Changes are sent to the backend and persisted in the database.

---

## 🗑️ Memory Deletion

Users can delete memories that are no longer useful.

The backend performs the deletion through a REST API.

---

## 🔎 Memory Search

The dashboard provides a search interface designed to search across:

- Memories
- Agents
- Projects

This creates a centralized discovery experience for stored AI context.

---

## 📊 Analytics Dashboard

MemoryForge provides an analytics interface displaying information such as:

- Memory usage
- Agent requests
- Vector search activity
- AWS service usage

The dashboard provides a visual overview of the platform.

---

## 🔄 AI Agent Workflow

MemoryForge includes a visual agent workflow:

Research Agent
        ↓
Coding Agent
        ↓
Testing Agent
        ↓
Deployment Agent

This represents how multiple specialized agents can cooperate on a task.

---

# 🏗️ Architecture

The project follows a frontend/backend architecture.

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ MemoryForge Frontend │
                    │      Dashboard       │
                    └──────────┬───────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │ MemoryForge Backend  │
                    │      Express.js      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Memory Layer     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     CockroachDB      │
                    └──────────────────────┘

                         Cloud Layer
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
             Bedrock         Lambda           S3