import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import Counter from "@/components/Counter.tsx";
import "~/assets/global.css";

// Nothing special here
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <Counter />
    </MantineProvider>
  </React.StrictMode>,
);
