import React from "react";
import Header from "./Components/Header";
import AppRoutes from "./Pages/Routes";

function App() {
  return (
    <div className="App">
      {/* <h1>Header/ component</h1> */}
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
