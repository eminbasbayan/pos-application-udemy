import React from "react";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between">
        <div className="categories">
          <div>categories</div>
        </div>
        <div className="products">
          <div className="">products</div>
        </div>
        <div className="">
          <div>cart totals</div>
        </div>
      </div>
    </>
  );
}

export default App;
