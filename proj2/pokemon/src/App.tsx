import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "home/Header";
import Footer from "home/Footer";
import { StoreProvider, useStore } from "store/store";

import "home/AppCSS";

const App = () => {

  return (
    <>
      <Header />
      <div className="app__container">
        <div>Name: pokemon</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>
      </div>
      <Footer />
    </>
  );
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
