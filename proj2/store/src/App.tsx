import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: store</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
