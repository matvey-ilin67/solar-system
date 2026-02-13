# replit.md

## Overview

Solar System Dynamics is an interactive 3D solar system simulation built as a hybrid Expo (React Native) + Express application. The core experience is a Three.js-powered 3D visualization of planetary orbits using Keplerian mechanics, served as a static web page. The Expo/React Native app wraps this simulation in a WebView for mobile platforms and redirects to it directly on web. The project includes a backend Express server that serves the static simulation files and can host API routes, with PostgreSQL database support via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Dual-Runtime Architecture
The project runs two processes in development:
- **Expo dev server** (`expo:dev`) — serves the React Native app with hot reloading
- **Express server** (`server:dev`) — serves the static solar system simulation and API routes on port 5000

In production, the Express server serves both the static simulation files from `/public` and handles API requests.

### Frontend — Solar System Simulation (Primary UI)
- **Location**: `public/` directory (`index.html`, `script.js`, `style.css`)
- **Technology**: Vanilla JavaScript with Three.js for 3D rendering, OrbitControls for camera interaction
- **Features**: Keplerian orbital mechanics, time controls, planet visibility toggles, interactive left panel with Russian-language UI
- **Rendering**: Full-screen WebGL canvas with overlay UI panels
- The simulation is the main user-facing experience; the Expo app is essentially a shell around it

### Frontend — Expo/React Native Shell
- **Location**: `app/` directory using Expo Router (file-based routing)
- **Architecture**: Tab-based navigation with a single main tab that renders a WebView pointing to the Express server
- **Key Pattern**: On web platform, it redirects directly to the simulation URL; on native, it uses `react-native-webview` to embed it
- **State Management**: TanStack React Query with a centralized query client (`lib/query-client.ts`)
- **Navigation**: Expo Router v6 with typed routes, tab layout in `app/(tabs)/`

### Backend — Express Server
- **Location**: `server/` directory
- **Entry**: `server/index.ts` — sets up Express with CORS, JSON parsing, and static file serving
- **Routes**: `server/routes.ts` — currently a skeleton for API routes (prefixed with `/api`)
- **Storage**: `server/storage.ts` — in-memory storage implementation with a `IStorage` interface (can be swapped for database-backed storage)
- **Static Serving**: The `public/` directory is served as static files; there's also a landing page template in `server/templates/`
- **CORS**: Configured to allow Replit domains and localhost origins for development

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: `shared/schema.ts` — currently defines a `users` table with id, username, and password
- **Validation**: Drizzle-Zod for generating Zod schemas from database tables
- **Migrations**: Output to `migrations/` directory via `drizzle-kit`
- **Config**: `drizzle.config.ts` requires `DATABASE_URL` environment variable
- **Current State**: The app uses in-memory storage (`MemStorage`) by default; the database schema exists but isn't actively connected to routes yet

### Build & Deployment
- **Development**: Two concurrent processes (Expo + Express server)
- **Production Build**: `expo:static:build` creates a static web build; `server:build` bundles the server with esbuild
- **Production Run**: `server:prod` runs the bundled server from `server_dist/`
- **Environment**: Uses Replit-specific env vars (`REPLIT_DEV_DOMAIN`, `REPLIT_DOMAINS`, `REPLIT_INTERNAL_APP_DOMAIN`) for URL resolution

## External Dependencies

### Core Frameworks & Libraries
- **Expo SDK 54** — React Native development platform
- **React 19.1 / React Native 0.81** — UI framework
- **Express 5** — Backend HTTP server
- **Three.js** (imported via CDN/ESM in `script.js`) — 3D rendering engine for the solar system simulation

### Database & ORM
- **PostgreSQL** — relational database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM** — TypeScript-first ORM for database operations
- **Drizzle-Zod** — Schema validation integration

### State & Data Fetching
- **TanStack React Query v5** — server state management and caching

### UI & Platform Libraries
- **react-native-webview** — embeds the simulation on native platforms
- **expo-router** — file-based navigation
- **react-native-reanimated** — animations
- **react-native-gesture-handler** — gesture support
- **expo-blur / expo-glass-effect** — visual effects
- **@expo/vector-icons** — icon library

### Build Tools
- **esbuild** — server bundling for production
- **tsx** — TypeScript execution for development server
- **drizzle-kit** — database migration tooling
- **patch-package** — post-install patching

### Infrastructure
- **Replit** — hosting platform with domain management via environment variables
- **http-proxy-middleware** — development proxy between Expo and Express