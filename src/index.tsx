import * as React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootElement
);
