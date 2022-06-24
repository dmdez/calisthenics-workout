import { render } from "react-dom";
import App from "./App";
import { ServiceWorkerUpdater } from "./components/ServiceWorkerUpdater";

const rootElement = document.getElementById("root");
render(
  <>
    <ServiceWorkerUpdater />
    <App />
  </>,
  rootElement
);
