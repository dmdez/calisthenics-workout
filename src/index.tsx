import { createRoot } from "react-dom/client";
import App from "./App";
import { ServiceWorkerUpdater } from "./components/ServiceWorkerUpdater";

createRoot(document.getElementById("root")!).render(
  <>
    <ServiceWorkerUpdater />
    <App />
  </>
);
