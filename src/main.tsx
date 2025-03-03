import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "Shared/Molecule/index.ts";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<Fallback />} onReset={() => console.log("reset")}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
