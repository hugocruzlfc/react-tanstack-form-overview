# React 19 + TypeScript + Vite + Tailwind CSS v4 Starter Kit

A modern, fast, and pre-configured scaffolding template for developers who want to start building applications using **React 19** and **TypeScript** from scratch.

🚀 **Start coding in seconds with Vite and Tailwind CSS v4!**

---

## 🛠️ Features & Tech Stack

This template is packed with the latest stable releases and tools:

- **React 19** (Stable version `^19.2.7`) & React DOM.
- **TypeScript 6.x** pre-configured with modern compiler standards (`tsconfig.app.json` & `tsconfig.node.json`).
- **Tailwind CSS v4** via PostCSS integration (`@tailwindcss/postcss`).
- **Vite 5** for extremely fast HMR (Hot Module Replacement) and optimized production builds.
- **ESLint** pre-configured for React and TypeScript code standards.

---

## 🚀 Getting Started

### 1. Create a New Project

You can bootstrap a new project from this template instantly using `degit`:

```bash
npx degit atapas/code-react19-ts#main <YOUR_PROJECT_NAME>
```

Alternatively, you can fork this repository or click the **"Use this template"** button in GitHub.

### 2. Install & Run Locally

Navigate into your project folder and follow these steps:

```bash
# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies using Yarn or npm
yarn install
# or
npm install

# Run the development server
yarn dev
# or
npm run dev
```

The application will be running locally at `http://localhost:5173`.

---

## 📂 Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/          # Project images and graphics
│   ├── App.css          # App-specific styles
│   ├── App.tsx          # Main React component
│   ├── index.css        # Tailwind CSS imports & global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite TypeScript declarations
├── .eslintrc.cjs        # ESLint configuration
├── postcss.config.js    # PostCSS config (Tailwind v4 integration)
├── tailwind.config.js   # Tailwind configurations
├── tsconfig.json        # TypeScript configuration root
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```
