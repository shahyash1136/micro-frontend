import React from "react";
import { createRoot } from 'react-dom/client';
import Footer from "home/Footer";
import Header from "home/Header";

import "home/AppCSS";

const App = () => (
  <>
    <Header />
    <div className="app__container">
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
    <Footer />
  </>
);
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
