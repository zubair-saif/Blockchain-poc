import React from "react";
import createRoot from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionsContext";
import "./index.css";

createRoot.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
