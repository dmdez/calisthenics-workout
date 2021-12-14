import * as React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { ServiceWorkerUpdater } from "./components/ServiceWorkerUpdater";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <ServiceWorkerUpdater />
    <App />
  </QueryClientProvider>,
  rootElement
);
