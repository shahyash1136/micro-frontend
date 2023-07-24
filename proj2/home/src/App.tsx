import React from "react";
import { createRoot } from 'react-dom/client';
import MainLayout from "./MainLayout";
import { StoreProvider } from "store/store";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<StoreProvider>
    <MainLayout />
</StoreProvider>);


