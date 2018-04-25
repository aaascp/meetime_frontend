import React, { Component } from "react";

import Header from "./Header";
import CarsList from "./CarsList";
import CarsForm from "./CarsForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <CarsList />
        </div>
        <CarsForm />
      </div>
    );
  }
}

export default App;
